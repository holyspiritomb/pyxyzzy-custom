import type { Meta, StoryObj } from '@storybook/react';

import { WhiteCardView } from './cards';
import { WhiteCard } from '../state';

const meta = {
  component: WhiteCardView,
  argTypes: {
    card: WhiteCard,
  },
  decorators: [
    (Story) => (
      <div style={{ margin: '3em' }}>
        {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
        <Story />
      </div>
    )
  ]
} satisfies Meta<typeof WhiteCardView>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    card: {
      "text": "Woo! This card is a white card.",
      "packName": "Card Pack",
      "isBlank": false,
      "id": "cardid",
      "fontSizeCacheKey": null,
    }
  }
};
