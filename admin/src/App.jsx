import { Routes, Route } from 'react-router-dom';
import NavBar from './components/navbar/NavBar';
import Add from './pages/add/Add';
import List from './pages/list/List';
import Order from './pages/order/Order';
import SidePanel from './components/sidebar/SidePanel';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const url = 'http://localhost:5001';
  return (
    <><ToastContainer />
      <NavBar />
      <SidePanel />
      <Routes>
        <Route path='/order' element={<Order />} />
        <Route path='/add' element={<Add url={url}/>} />
        <Route path='/list' element={<List url={url}/>} />

      </Routes>
    </>
  );
}

export default App;
