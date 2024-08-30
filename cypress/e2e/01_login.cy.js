import LoginForm from "../support/loginForm.js";
import AddRecipeForm from "../support/addRecipe.js";

describe("Recipe Management Application", () => {
  const loginForm = new LoginForm();
  const addRecipe = new AddRecipeForm();

  const login = {
    email: "testuser@example.com",
    password: "Password123",
  };

  const input = {
    title: "Torta de Maçã",
    ingredients: "leite, maçã, bolacha",
    description: "This is a good apple pie.",
    instructions: "First you're going to make a hello world with test.",
    imgUrl:
      "https://img-global.cpcdn.com/recipes/631927057888eef1/680x482cq70/foto-principal-da-receita-torta-de-maca-apple-pie.jpg",
  };

  it("Should allow a user to login, add a recipe, and edit user information successfully", () => {
    cy.visit("/login");
    loginForm.typeEmail(login.email);
    loginForm.typePassword(login.password);
    loginForm.submit();
    loginForm.checkRedirectToHomePage();

    cy.get('[href="/addRecipe"]', { timeout: 10000 }).click();
    cy.url().should("include", "/addRecipe");

    addRecipe.typeTitle(input.title);
    addRecipe.typeIngredients(input.ingredients);
    addRecipe.typeDescriptionTextArea(input.description);
    addRecipe.typeInstructionsTextArea(input.instructions);
    addRecipe.typeImgUrl(input.imgUrl);
    addRecipe.submit();

    // cy.get('[href="/profile"]', { timeout: 10000 }).click();
    // cy.url().should("include", "/profile");
    // cy.get('input[name="user_name"]').clear().type("novoTestUser");
    // cy.get('input[name="email"]').clear().type("novoTestUser@msail.com");
    // cy.get('input[name="user_img"]')
    //   .clear()
    //   .type(
    //     "https://static-00.iconduck.com/assets.00/cypress-icon-512x512-zi8589rq.png"
    //   );
    // cy.get('button[type="submit"]').click();

    // cy.url().should("include", "/recipes");
    // cy.get(
    //   '[class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-i4bv87-MuiSvgIcon-root"] edit-recipe'
    // ).click();
    // cy.get('input[placeholder="Title"]').type("NEW TEST NAME");
    // cy.get(
    //   '[class="py-2 px-4 bg-orange-500 text-white border-2  border-orange-500 font-medium rounded-md hover:bg-orange-600  hover:text-white focus:outline-none focus:ring-2 focus:ring-orange-500"]'
    // ).click();
  });
});
