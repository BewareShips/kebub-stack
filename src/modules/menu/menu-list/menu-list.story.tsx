import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MenuList } from './menu-list';



export default {
  title: 'Menu/Menu List',
  component: MenuList,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof MenuList>;

const Template: ComponentStory<typeof MenuList> = () => <MenuList />;

export const View = Template.bind({});


