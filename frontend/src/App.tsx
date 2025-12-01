import { useState, useEffect } from 'react';
import { Plus, RefreshCw } from 'lucide-react';
import ItemForm from './components/ItemForm';
import ItemList from './components/ItemList';
import { Item } from './types';
import { getItems, createItem, deleteItem } from './services/api';

function App() {
  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchItems = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await getItems();
      setItems(data);
    } catch (err) {
      setError('Failed to fetch items');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const handleCreateItem = async (name: string, description: string) => {
    try {
      const newItem = await createItem(name, description);
      setItems([...items, newItem]);
    } catch (err) {
      setError('Failed to create item');
      console.error(err);
    }
  };

  const handleDeleteItem = async (id: string) => {
    try {
      await deleteItem(id);
      setItems(items.filter(item => item.id !== id));
    } catch (err) {
      setError('Failed to delete item');
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">Workshop Starter App</h1>
          <p className="text-xl text-gray-600">
            Built with React, TypeScript, Tailwind CSS, and Express
          </p>
        </header>

        <div className="max-w-4xl mx-auto">
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
              {error}
            </div>
          )}

          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-semibold text-gray-800 flex items-center gap-2">
                <Plus className="w-6 h-6" />
                Add New Item
              </h2>
            </div>
            <ItemForm onSubmit={handleCreateItem} />
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-semibold text-gray-800">Items</h2>
              <button
                onClick={fetchItems}
                className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                disabled={loading}
              >
                <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
                Refresh
              </button>
            </div>

            {loading && items.length === 0 ? (
              <div className="text-center py-8 text-gray-500">Loading...</div>
            ) : (
              <ItemList items={items} onDelete={handleDeleteItem} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
