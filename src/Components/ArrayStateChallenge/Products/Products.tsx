import { useState } from "react";

const initialProducts = [
  { id: 0, name: "Baklava", count: 1 },
  { id: 1, name: "Cheese", count: 5 },
  { id: 2, name: "Spaghetti", count: 2 },
];

export default function Products() {
  const [products, setProducts] = useState(initialProducts);

  function handleIncreaseClick(productId) {
    setProducts((products) =>
      products.map((product) =>
        product.id === productId
          ? { ...product, count: product.count + 1 }
          : product
      )
    );
  }

  function handleDecreaseClick(productId) {
    setProducts((products) =>
      products.map((product) =>
        product.id === productId && product.count > 0
          ? { ...product, count: product.count - 1 }
          : product
      )
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
        <h2 className="text-xl font-bold mb-4 text-center text-gray-800">
          Shopping Cart
        </h2>
        <ul className="space-y-4">
          {products.map((product) => (
            <li
              key={product.id}
              className="flex justify-between items-center border-b pb-2"
            >
              <span className="text-gray-700 font-medium">
                {product.name} (<b>{product.count}</b>)
              </span>
              <button
                onClick={() => handleIncreaseClick(product.id)}
                className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition"
              >
                +
              </button>
              <button
                onClick={() => handleDecreaseClick(product.id)}
                className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition"
              >
                -
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
