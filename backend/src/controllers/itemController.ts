import { Request, Response } from 'express';
import { Item } from '../types';

// In-memory storage for demo purposes
let items: Item[] = [
  {
    id: '1',
    name: 'Sample Item 1',
    description: 'This is a sample item',
    createdAt: new Date().toISOString(),
  },
  {
    id: '2',
    name: 'Sample Item 2',
    description: 'Another sample item',
    createdAt: new Date().toISOString(),
  },
];

export const getItems = (req: Request, res: Response): void => {
  res.json({ success: true, data: items });
};

export const getItemById = (req: Request, res: Response): void => {
  const { id } = req.params;
  const item = items.find(i => i.id === id);

  if (!item) {
    res.status(404).json({ success: false, error: 'Item not found' });
    return;
  }

  res.json({ success: true, data: item });
};

export const createItem = (req: Request, res: Response): void => {
  const { name, description } = req.body;

  if (!name) {
    res.status(400).json({ success: false, error: 'Name is required' });
    return;
  }

  const newItem: Item = {
    id: String(items.length + 1),
    name,
    description: description || '',
    createdAt: new Date().toISOString(),
  };

  items.push(newItem);
  res.status(201).json({ success: true, data: newItem });
};

// Helper function for testing
export const resetItems = (): void => {
  items = [];
};
