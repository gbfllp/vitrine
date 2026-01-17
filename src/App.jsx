import { useState } from "react";
import ProductCard from "./components/ProductCard";
import "./App.css";

function App() {
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = (productName) => {
    setCartCount((prevCount) => prevCount + 1);
    console.log(`Produto adicionado: ${productName}`);
  };

  const products = [
    {
      id: 1,
      name: "Smartphone X",
      price: 2999.0,
      image: "/img/smartphone.jpg",
      isAvailable: true,
    },
    {
      id: 2,
      name: "Notebook Pro",
      price: 5499.0,
      image: "/img/notebook.jpg",
      isAvailable: false,
    },
    {
      id: 3,
      name: "Fone Bluetooth",
      price: 299.0,
      image: "/img/fone.jpg",
      isAvailable: true,
    },
    {
      id: 4,
      name: "Monitor Ultra",
      price: 1200.0,
      image: "/img/monitor.jpg",
      isAvailable: true,
    },
  ];

  return (
    <div className="app-container">
      <header>
        <h1>Tech Store</h1>
        <div className="cart-summary">🛒 Carrinho: {cartCount} itens</div>
      </header>

      <main className="product-list">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            price={product.price}
            image={product.image}
            isAvailable={product.isAvailable}
            onAddToCart={handleAddToCart}
          />
        ))}
      </main>
    </div>
  );
}

export default App;
