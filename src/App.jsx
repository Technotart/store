import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Laptops from './pages/Laptops';
import Mobiles from './pages/Mobiles';
import Checkout from './pages/Checkout';
import Register from './pages/Register';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/laptops" element={<Laptops />} />
          <Route path="/mobiles" element={<Mobiles />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
