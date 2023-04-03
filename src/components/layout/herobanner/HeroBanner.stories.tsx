import { ComponentStory, ComponentMeta } from '@storybook/react';
import HeroBanner from './HeroBanner';

export default {
  title: 'layout/HeroBanner',
  component: HeroBanner,
  argTypes: {},
} as ComponentMeta<typeof HeroBanner>;

const Template: ComponentStory<typeof HeroBanner> = (args) => (
  <HeroBanner {...args} />
);

export const Base = Template.bind({});