import React from "react";
import ProfileEdit from "./index";

export default {
  title: "Design System/ProfileEdit",
  component: ProfileEdit,
};

const Template = (args) => <ProfileEdit {...args} />;

export const Default = Template.bind({});
Default.args = {
  // passar props fictícias aqui no futuro
};
