import type { Meta, StoryObj } from '@storybook/react';
import { ProductCard } from './ProductCard';

const meta = {
  title: 'Components/ProductCard',
  component: ProductCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ProductCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Wireless Headphones',
    description: 'High-quality noise-canceling wireless headphones with 30-hour battery life and superior sound.',
    price: 199.99,
    imageUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800&auto=format&fit=crop',
  },
};

export const WithBadge: Story = {
  args: {
    title: 'Smart Watch Series 7',
    description: 'The most advanced smartwatch with health tracking, ECG, and always-on retina display.',
    price: 399.00,
    badge: 'New Arrival',
    imageUrl: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=800&auto=format&fit=crop',
  },
};
