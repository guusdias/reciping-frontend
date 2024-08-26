import LoginForm from "../support/loginForm.js";

describe("Recipe Management Application - User Login", () => {
  const loginForm = new LoginForm();

  describe("Successful user login", () => {
    const input = {
      username: "testuser",
      email: "testuser@example.com",
      password: "Password123",
      confirmPassword: "Password123",
    };
    it("Should allow a user to login successfully", () => {
      cy.visit("/login");
      cy.url().should("include", "/login");

      cy.get('input[name="email"]', { timeout: 10000 }).should("be.visible");

      loginForm.typeEmail(input.email);
      loginForm.typePassword(input.password);
      loginForm.submit();
      loginForm.checkRedirectToLoginPage();
      loginForm.checkSuccessfulRegistrationMessage();
    });
  });
});
