import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MenuItem } from './menu-item';


export default {
  title: 'Menu/Menu Item',
  component: MenuItem,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof MenuItem>;

const Template: ComponentStory<typeof MenuItem> = (args) => <MenuItem {...args} />;

export const View = Template.bind({});

View.args = {
    imagePath: '/assets/img/Kebab1.webp',
    weight:120,
    title:'Turkey Kebub',
    ingridients: "1 pound ground lamb (or 1/2 pound each of ground lamb and ground beef),1 large egg,4 clove garlic, peeled and finely minced,1 teaspoon ground cumin,1 teaspoon ground coriander,1 teaspoon smoked paprika,1 teaspoon dried oregano,1/2 teaspoon kosher salt,1/4 teaspoon ground black pepper,1 tablespoon oil, more for the pan",
    price:5
}
