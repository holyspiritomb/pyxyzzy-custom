import type { Meta, StoryObj } from '@storybook/react';

import { BlackCardView } from './cards';
import { BlackCard } from '../state';

const meta = {
  component: BlackCardView,
  argTypes: {
    card: BlackCard,
  }
} satisfies Meta<typeof BlackCardView>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    card: {
      "drawCount": 0,
      "pickCount": 1,
      "text": "A prompt!",
      "packName": "Pack Name",
    }
  }
};
export const Pick2: Story = {
  args: {
    card: {
      drawCount: 0,
      pickCount: 2,
      "text": "A prompt that requires two cards as answers.",
      "packName": "Pack Name",
    }
  }
};
export const Draw2Pick3: Story = {
  args: {
    card: {
      drawCount: 2,
      pickCount: 3,
      "text": "A prompt that asks for three cards.",
      "packName": "Pack Name",
    }
  }
};
