import { render, screen, fireEvent } from '@testing-library/react';
import ItemList from '../ItemList';
import { Item } from '../../types';

const mockItems: Item[] = [
  {
    id: '1',
    name: 'Test Item 1',
    description: 'Description 1',
    createdAt: new Date('2024-01-01').toISOString(),
  },
  {
    id: '2',
    name: 'Test Item 2',
    description: 'Description 2',
    createdAt: new Date('2024-01-02').toISOString(),
  },
];

describe('ItemList', () => {
  it('renders empty state when no items', () => {
    const mockDelete = jest.fn();
    render(<ItemList items={[]} onDelete={mockDelete} />);

    expect(screen.getByText(/no items yet/i)).toBeInTheDocument();
  });

  it('renders list of items', () => {
    const mockDelete = jest.fn();
    render(<ItemList items={mockItems} onDelete={mockDelete} />);

    expect(screen.getByText('Test Item 1')).toBeInTheDocument();
    expect(screen.getByText('Test Item 2')).toBeInTheDocument();
    expect(screen.getByText('Description 1')).toBeInTheDocument();
    expect(screen.getByText('Description 2')).toBeInTheDocument();
  });

  it('calls onDelete when delete button clicked', () => {
    const mockDelete = jest.fn();
    render(<ItemList items={mockItems} onDelete={mockDelete} />);

    const deleteButtons = screen.getAllByLabelText(/delete item/i);
    fireEvent.click(deleteButtons[0]);

    expect(mockDelete).toHaveBeenCalledWith('1');
  });

  it('displays formatted dates', () => {
    const mockDelete = jest.fn();
    render(<ItemList items={mockItems} onDelete={mockDelete} />);

    expect(screen.getByText(/january 1, 2024/i)).toBeInTheDocument();
    expect(screen.getByText(/january 2, 2024/i)).toBeInTheDocument();
  });
});
