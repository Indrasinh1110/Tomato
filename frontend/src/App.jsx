import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Cart from './pages/cart/Cart';
import Order from './pages/order/Order';
import NavBar from './components/navbar/NavBar';
import Footer from './components/footer/Footer';
import AppDownload from './components/appdownload/AppDownload';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const App = () => {
  return (<div className='app'>
    <ToastContainer />
    <NavBar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/order' element={<Order />} />
    </Routes><AppDownload />
    <Footer />
  </div>

  );
};

export default App;
