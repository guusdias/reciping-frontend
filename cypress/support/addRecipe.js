class AddRecipeForm {
  elements = {
    titleInput: () => cy.get('input[name="title"]'),
    ingredientsTextArea: () => cy.get('textarea[name="ingredients"]'),
    descriptionTextArea: () => cy.get('textarea[name="description"]'),
    instructionsTextArea: () => cy.get('textarea[name="instructions"]'),
    imgInput: () => cy.get('input[name="img_url"]'),
    submitBtn: () => cy.get('button[type="submit"]'),
    errorMessage: () => cy.get(".mb-4 p-4 text-red-700 bg-red-100 rounded-lg"),
    successMessage: () => cy.contains("Registration successful"),
  };

  typeTitle(text) {
    if (!text) return;
    this.elements.titleInput().type(text);
  }

  typeIngredients(text) {
    if (!text) return;
    this.elements.ingredientsTextArea().type(text);
  }

  typeDescriptionTextArea(text) {
    if (!text) return;
    this.elements.descriptionTextArea().type(text);
  }

  typeInstructionsTextArea(text) {
    if (!text) return;
    this.elements.instructionsTextArea().type(text);
  }

  typeImgUrl(text) {
    if (!text) return;
    this.elements.imgInput().type(text);
  }

  submit() {
    this.elements.submitBtn().click();
  }

  checkSuccessfulRegistrationMessage() {
    this.elements.successMessage().should("be.visible");
  }

  checkRedirectToRecipesPage() {
    cy.url().should("include", "/recipes");
  }

  checkErrorMessage(message) {
    this.elements.errorMessage().should("contain.text", message);
  }
}
export default AddRecipeForm;
