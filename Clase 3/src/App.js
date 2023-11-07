import React from "react";
import "./App.css";
import ProductDetail from "./Componentes/ProductDetail";

function App() {
  const productData = {
    name: "Producto de ejemplo",
    description: "Esta es una descripción del producto de ejemplo.",
    price: "$99.99",
    sku: "ABC123",
    quantity: 10,
  };

  return (
    <div className="App">
      <h1>Detalle del Producto</h1>
      <ProductDetail product={productData} />
    </div>
  );
}

export default App;