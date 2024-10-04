import type { Meta, StoryObj } from '@storybook/react';

import PlayersView from './PlayersView';
import {Player} from "../state"

const meta = {
  component: PlayersView,
} satisfies Meta<typeof PlayersView>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
