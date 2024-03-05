import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Product from "./components/Product";
import Backet from "./components/Backet";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/product" element={<Product />} />
        <Route path="/backet" element={<Backet />} />
      </Routes>
    </div>
  );
}

export default App;
