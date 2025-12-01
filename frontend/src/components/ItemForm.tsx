import { useState, FormEvent } from 'react';
import { Plus } from 'lucide-react';

interface ItemFormProps {
  onSubmit: (name: string, description: string) => void;
}

function ItemForm({ onSubmit }: ItemFormProps) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      onSubmit(name, description);
      setName('');
      setDescription('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
          Name
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={e => setName(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Enter item name"
          required
        />
      </div>

      <div>
        <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
          Description
        </label>
        <textarea
          id="description"
          value={description}
          onChange={e => setDescription(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Enter item description"
          rows={3}
        />
      </div>

      <button
        type="submit"
        className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
      >
        <Plus className="w-5 h-5" />
        Add Item
      </button>
    </form>
  );
}

export default ItemForm;
