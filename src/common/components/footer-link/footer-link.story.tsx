import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { FooterLink } from "./footer-link";

export default {
   title: "Common/Footer link",
   component: FooterLink,
} as ComponentMeta<typeof FooterLink>;

const Template: ComponentStory<typeof FooterLink> = (args) => (
   <FooterLink {...args} />
);

export const View = Template.bind({});

View.args = {
   href: "1234566678",
   children: "1234566678",
};
