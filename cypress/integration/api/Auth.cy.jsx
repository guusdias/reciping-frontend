import React from "react";
import { mount } from "cypress/react";
import Login from "../../../src/pages/Login";
import { AuthContext } from "../../../src/contexts/AuthContext";
import { MemoryRouter } from "react-router-dom";

describe("Login Page", () => {
  it("should render login form", () => {
    const mockLogin = cy.stub();
    const mockContextValue = {
      login: mockLogin,
    };

    mount(
      <AuthContext.Provider value={mockContextValue}>
        <MemoryRouter>
          <Login />
        </MemoryRouter>
      </AuthContext.Provider>
    );

    cy.get('input[name="email"]').should("be.visible");
    cy.get('input[name="password"]').should("be.visible");
    cy.get('button[type="submit"]').should("be.visible");
  });
});
