import React from "react";
import { styled } from "../../../stitches.config";

const Wrapper = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "$small",
  marginBottom: "$small",
});

const Label = styled("label", {
  marginBottom: "4px",
  fontWeight: "bold",
  fontSize: "$lg",
  color: "$textColor",
});

const Input = styled("input", {
  padding: "$small",
  border: "1px solid $borderColor",
  borderRadius: "$small",
  "&:focus": {
    borderColor: "$primary",
    outline: "none",
    boxShadow: "0 0 0 2px rgba(255, 102, 0, 0.2)",
  },
});

const SearchInput = ({ value, onChange, placeholder }) => (
  <Wrapper>
    <Label htmlFor="recipeSearch">Buscar receita:</Label>
    <Input
      type="text"
      id="recipeSearch"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  </Wrapper>
);

export default SearchInput;
