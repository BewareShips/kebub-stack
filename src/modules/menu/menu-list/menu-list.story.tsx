import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MenuList } from './menu-list';
import kebubList from "@app/mocks/kebub.json";



export default {
  title: 'Menu/Menu List',
  component: MenuList,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof MenuList>;

const Template: ComponentStory<typeof MenuList> = (args) => <MenuList {...args} />;

export const View = Template.bind({});
View.args = {
  items: kebubList
}


