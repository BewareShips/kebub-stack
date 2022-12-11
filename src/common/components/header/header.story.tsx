import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Header } from './header';


export default {
  title: 'Common/Header',
  component: Header,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = () => <Header  />;

export const View = Template.bind({});
