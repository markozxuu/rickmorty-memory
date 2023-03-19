import type { Meta, StoryObj } from '@storybook/react';

import Link from './Link';

const meta: Meta<typeof Link> = {
  title: 'Link',
  component: Link,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Link>;

export const Primary: Story = {
  args: {
    type: 'primary',
    path: '/',
    label: 'Jugar',
  },
};

export const Secondary: Story = {
  args: {
    type: 'secondary',
    path: '/juego',
    label: 'Jugar',
  },
};
