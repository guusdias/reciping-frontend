import React from "react";
import UserProfile from "./index";

export default {
  title: "Design System/UserProfile",
  component: UserProfile,
};

const Template = (args) => <UserProfile {...args} />;

export const Default = Template.bind({});
Default.args = {
  toggle: false,
};
