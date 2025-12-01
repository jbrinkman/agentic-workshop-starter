import { Trash2, Calendar } from 'lucide-react';
import { Item } from '../types';

interface ItemListProps {
  items: Item[];
  onDelete: (id: string) => void;
}

function ItemList({ items, onDelete }: ItemListProps) {
  if (items.length === 0) {
    return (
      <div className="text-center py-12 text-gray-500">
        <p className="text-lg">No items yet. Add your first item above!</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {items.map(item => (
        <div
          key={item.id}
          className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
        >
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.name}</h3>
              {item.description && <p className="text-gray-600 mb-3">{item.description}</p>}
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <Calendar className="w-4 h-4" />
                <span>
                  {new Date(item.createdAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </span>
              </div>
            </div>
            <button
              onClick={() => onDelete(item.id)}
              className="ml-4 p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
              aria-label="Delete item"
            >
              <Trash2 className="w-5 h-5" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ItemList;
