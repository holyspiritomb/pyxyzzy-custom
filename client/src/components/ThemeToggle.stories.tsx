import type { Meta, StoryObj } from '@storybook/react';

import ThemeToggle from './ThemeToggle';

const meta = {
  component: ThemeToggle,
} satisfies Meta<typeof ThemeToggle>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};