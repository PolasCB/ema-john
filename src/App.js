import * as React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Shop from "./Components/Shop/Shop";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./Components/NotFounf/NotFound";
import Review from "./Components/Review/Review";
import Inventory from "./Components/Inventory/Inventory";

function App() {
  return (
    <div>
      <Header></Header>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Shop />} />
          <Route index element={<Shop />} />
          <Route path="shop" element={<Shop />} />
          <Route path="review" element={<Review />} />
          <Route path="manage" element={<Inventory />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
