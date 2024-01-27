import { Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './pages/Cart';
import Home from './pages/Home';
import Wishlist from './pages/Wishlist';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="Cart" element={<Cart></Cart>}  ></Route>
        <Route path="/" element={<Home></Home>}  ></Route>
        <Route path="Wishlist" element={<Wishlist></Wishlist>}  ></Route>


      </Routes>

      <Footer></Footer>

    </div>
  );
}

export default App;
