import React from "react";
import SearchInput from "./index";

export default {
  title: "Design System/SearchInput",
  component: SearchInput,
};

const Template = (args) => <SearchInput {...args} />;

export const Default = Template.bind({});
Default.args = {
  value: "",
  placeholder: "Digite o título da receita...",
};
