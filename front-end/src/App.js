// import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Login from './Login';
import { Route, Routes } from 'react-router-dom';
import SignIn from './SignIn';
import Products from './Products';
import Home from './Home';
import AddProducts from './AddProducts';
import PrivateComponent from './PrivateComponent';
import Update from './Update';
import Cards from './Cards';
import BlogInput from './BlogInput';
// import Navbar from './Navbar';
// import LogOut from './LogOut';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        {/* <Route element={<PrivateComponent />}> */}
          <Route path="/" element={<Home />}></Route>
          <Route path="/products" element={<Products />}></Route>
          <Route path="/add_Product" element={<AddProducts />}></Route>
          <Route path="/update/:id" element={<Update />}></Route>
          <Route path='/card' element={<Cards/>}></Route>
          <Route path='/blog' element={<BlogInput/>} ></Route>
        {/* </Route> */}
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/signin" element={<SignIn />}></Route>

      </Routes>
    </div>
  );
}

export default App;
