import { Meta, StoryObj } from '@storybook/react';

import CharacterCard from './CharacterCard';

const mockData = {
  id: '1',
  image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
  name: 'Rick',
  species: 'Human',
  status: 'Alive',
};

const meta: Meta<typeof CharacterCard> = {
  title: 'Card',
  component: CharacterCard,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CharacterCard>;

export const Flipped: Story = {
  args: {
    character: mockData,
    defaultActive: true,
    isFlipped: true,
    handleClick: () => 1,
    matched: [],
  },
};

export const NotFlipped: Story = {
  args: {
    character: mockData,
    defaultActive: false,
    isFlipped: false,
    handleClick: () => 1,
    matched: [],
  },
};
