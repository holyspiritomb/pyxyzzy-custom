import type { Meta, StoryObj } from '@storybook/react';

import { WhiteCardPlaceholder } from './cards';

const meta = {
  component: WhiteCardPlaceholder,
} satisfies Meta<typeof WhiteCardPlaceholder>;

export default meta;

type Story = StoryObj<typeof meta>;

export const WPlaceholder: Story = {
  args: {
    text: "(placeholder text)",
  }
};
