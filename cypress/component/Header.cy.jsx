import React from "react";
import Header from "../../src/components/Header";

describe("Header Component", () => {
  const recipes = [{ title: "Pizza" }, { title: "Salad" }, { title: "Pasta" }];

  let filteredRecipes = [];

  const setFilteredRecipes = (foundRecipes) => {
    filteredRecipes = foundRecipes;
  };

  it("should render the header", () => {
    cy.mount(
      <Header
        showSearch={true}
        recipes={recipes}
        setFilteredRecipes={setFilteredRecipes}
      />
    );
    cy.get("h1").contains("Reciping").should("be.visible");
  });

  it("should display the search input and button when showSearch is true", () => {
    cy.mount(<Header />);
  });
});
