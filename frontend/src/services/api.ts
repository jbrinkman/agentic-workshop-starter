import { Item, ApiResponse } from '../types';

const API_BASE_URL = '/api';

export const getItems = async (): Promise<Item[]> => {
  const response = await fetch(`${API_BASE_URL}/items`);
  if (!response.ok) {
    throw new Error('Failed to fetch items');
  }
  const data: ApiResponse<Item[]> = await response.json();
  return data.data || [];
};

export const getItemById = async (id: string): Promise<Item> => {
  const response = await fetch(`${API_BASE_URL}/items/${id}`);
  if (!response.ok) {
    throw new Error('Failed to fetch item');
  }
  const data: ApiResponse<Item> = await response.json();
  if (!data.data) {
    throw new Error('Item not found');
  }
  return data.data;
};

export const createItem = async (name: string, description: string): Promise<Item> => {
  const response = await fetch(`${API_BASE_URL}/items`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, description }),
  });

  if (!response.ok) {
    throw new Error('Failed to create item');
  }

  const data: ApiResponse<Item> = await response.json();
  if (!data.data) {
    throw new Error('Failed to create item');
  }
  return data.data;
};

export const deleteItem = async (id: string): Promise<void> => {
  // Note: This is a placeholder since we haven't implemented DELETE in the backend
  // Students can implement this during the workshop
  console.log('Delete item:', id);
};
