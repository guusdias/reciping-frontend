import LoginForm from "../support/loginForm.js";
import AddRecipeForm from "../support/addRecipe.js";

describe("Recipe Management Application - User Login", () => {
  const addRecipe = new AddRecipeForm();
  const loginForm = new LoginForm();

  describe("Successful user login", () => {
    const input = {
      email: "testuser@example.com",
      password: "Password123",
    };

    it("Should allow a user to login successfully", () => {
      cy.visit("/login");
      cy.url().should("include", "/login");

      cy.get('input[name="email"]', { timeout: 10000 }).should("be.visible");

      loginForm.typeEmail(input.email);
      loginForm.typePassword(input.password);
      loginForm.submit();
      loginForm.checkRedirectToHomePage();
    });
  });

  describe("Successful add recipe", () => {
    const input = {
      title: "torta de maçã",
      ingredients: "leite, maçã, bolacha",
      description: "this is a good apple pie",
      instructions: "First you're going to make a hello world with test.",
      imgUrl:
        "https://img-global.cpcdn.com/recipes/631927057888eef1/680x482cq70/foto-principal-da-receita-torta-de-maca-apple-pie.jpg",
    };

    it("Should allow a user to add a recipe successfully", () => {
      cy.visit("/login");
      loginForm.typeEmail("testuser@example.com");
      loginForm.typePassword("Password123");
      loginForm.submit();
      loginForm.checkRedirectToHomePage();

      cy.get('[href="/addRecipe"]').click();
      cy.url().should("include", "/addRecipe");

      cy.get('input[name="title"]', { timeout: 10000 }).should("be.visible");

      addRecipe.typeTitle(input.title);
      addRecipe.typeIngredients(input.ingredients);
      addRecipe.typeDescriptionTextArea(input.description);
      addRecipe.typeInstructionsTextArea(input.instructions);
      addRecipe.typeImgUrl(input.imgUrl);
      addRecipe.submit();
      addRecipe.checkRedirectToRecipesPage();
    });
  });
});
