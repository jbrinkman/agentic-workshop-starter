import { render, screen, fireEvent } from '@testing-library/react';
import ItemForm from '../ItemForm';

describe('ItemForm', () => {
  it('renders form fields', () => {
    const mockSubmit = jest.fn();
    render(<ItemForm onSubmit={mockSubmit} />);

    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/description/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /add item/i })).toBeInTheDocument();
  });

  it('calls onSubmit with form data', () => {
    const mockSubmit = jest.fn();
    render(<ItemForm onSubmit={mockSubmit} />);

    const nameInput = screen.getByLabelText(/name/i);
    const descriptionInput = screen.getByLabelText(/description/i);
    const submitButton = screen.getByRole('button', { name: /add item/i });

    fireEvent.change(nameInput, { target: { value: 'Test Item' } });
    fireEvent.change(descriptionInput, { target: { value: 'Test Description' } });
    fireEvent.click(submitButton);

    expect(mockSubmit).toHaveBeenCalledWith('Test Item', 'Test Description');
  });

  it('clears form after submission', () => {
    const mockSubmit = jest.fn();
    render(<ItemForm onSubmit={mockSubmit} />);

    const nameInput = screen.getByLabelText(/name/i) as HTMLInputElement;
    const descriptionInput = screen.getByLabelText(/description/i) as HTMLTextAreaElement;
    const submitButton = screen.getByRole('button', { name: /add item/i });

    fireEvent.change(nameInput, { target: { value: 'Test Item' } });
    fireEvent.change(descriptionInput, { target: { value: 'Test Description' } });
    fireEvent.click(submitButton);

    expect(nameInput.value).toBe('');
    expect(descriptionInput.value).toBe('');
  });

  it('does not submit with empty name', () => {
    const mockSubmit = jest.fn();
    render(<ItemForm onSubmit={mockSubmit} />);

    const submitButton = screen.getByRole('button', { name: /add item/i });
    fireEvent.click(submitButton);

    expect(mockSubmit).not.toHaveBeenCalled();
  });
});
