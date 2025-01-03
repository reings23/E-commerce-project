import './App.css';
import Homepage from './Component/Homepage';
import Product from './Component/Product';


import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/products" element={<Product/>} />
        </Routes>
    </Router>
  );
}

export default App;
