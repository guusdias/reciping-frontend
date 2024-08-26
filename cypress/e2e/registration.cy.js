import RegisterForm from "../support/registerForm";
describe("Recipe Management Application - User Registration", () => {
  const registerForm = new RegisterForm();

  describe("Successful user registration", () => {
    const input = {
      username: "testuser",
      email: "testuser@example.com",
      password: "Password123",
      confirmPassword: "Password123",
    };

    it("Should allow a user to register successfully", () => {
      cy.visit("/register");

      cy.url().should("include", "/register");

      cy.get('input[name="user_name"]', { timeout: 10000 }).should(
        "be.visible"
      );

      registerForm.typeUsername(input.username);
      registerForm.typeEmail(input.email);
      registerForm.typePassword(input.password);
      registerForm.typeConfirmPassword(input.confirmPassword);
      registerForm.submit();
      registerForm.checkRedirectToLoginPage();
      registerForm.checkSuccessfulRegistrationMessage();
    });
  });

  // Outros cenários de teste
});
