class RegisterForm {
  elements = {
    usernameInput: () => cy.get('input[name="user_name"]'),
    emailInput: () => cy.get('input[name="email"]'),
    passwordInput: () => cy.get('input[name="password"]'),
    confirmPasswordInput: () => cy.get('input[name="confirmPassword"]'),
    submitBtn: () => cy.get('button[type="submit"]'),
    errorMessage: () => cy.get(".mb-4 p-4 text-red-700 bg-red-100 rounded-lg"),
    successMessage: () => cy.contains("Registration successful"),
  };

  typeUsername(text) {
    if (!text) return;
    this.elements.usernameInput().type(text);
  }

  typeEmail(text) {
    if (!text) return;
    this.elements.emailInput().type(text);
  }

  typePassword(text) {
    if (!text) return;
    this.elements.passwordInput().type(text);
  }

  typeConfirmPassword(text) {
    if (!text) return;
    this.elements.confirmPasswordInput().type(text);
  }

  submit() {
    this.elements.submitBtn().click();
  }

  checkSuccessfulRegistrationMessage() {
    this.elements.successMessage().should("be.visible");
  }

  checkRedirectToLoginPage() {
    cy.url().should("include", "/login");
  }

  checkErrorMessage(message) {
    this.elements.errorMessage().should("contain.text", message);
  }
}

export default RegisterForm;
