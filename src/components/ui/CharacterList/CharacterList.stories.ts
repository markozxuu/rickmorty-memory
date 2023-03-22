import { Meta, StoryObj } from '@storybook/react';

import CharacterList from './CharacterList';

const mockData = {
  id: '1',
  image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
  name: 'Rick',
  species: 'Human',
  status: 'Alive',
};

const meta: Meta<typeof CharacterList> = {
  title: 'List',
  component: CharacterList,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CharacterList>;

export const OneItem: Story = {
  args: {
    characters: new Array(1).fill(mockData),
    defaultActive: true,
  },
};

export const TwoItems: Story = {
  args: {
    characters: new Array(2).fill(mockData),
    defaultActive: true,
  },
};

export const ThreeItems: Story = {
  args: {
    characters: new Array(3).fill(mockData),
    defaultActive: true,
  },
};

export const FourItems: Story = {
  args: {
    characters: new Array(4).fill(mockData),
    defaultActive: true,
  },
};
