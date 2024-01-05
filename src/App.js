import { Routes,Route } from 'react-router-dom';
import Login from './pages/Login';
import ProductsList from './pages/ProductsList';
import './App.css';
import Signup from './pages/Signup';
import Cart from './pages/Cart';
import Product from './pages/Product';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
function App() {
  return (
    <>
    <Routes>
    <Route path="/" element={<ProductsList />} />
    <Route path="/signin" element={<Login />} />
    <Route path="/signup" element={<Signup />} />
    <Route path="/cart" element={<Cart />} />
    <Route path="/products/:id" element={<Product/>}/>
    <Route path='/aboutus' element={<AboutUs/>}/>
    <Route path='/contactus' element={<ContactUs/>}/>
    </Routes>
    </>
  );
}
export default App;
