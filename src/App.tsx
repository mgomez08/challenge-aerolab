import React, { useState } from "react";
import { Header } from "./components/Header/Header";
import { Nav } from "./components/Nav/Nav";
import { ProductsSection } from "./components/Products/ProductsSection";

function App() {
  return (
    <>
      <Nav />
      <Header />
      <main>
        <ProductsSection />
      </main>
    </>
  );
}

export default App;
