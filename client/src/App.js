import { Route,Routes } from "react-router-dom";
import Home from "./component/Home";
// import Navbar from "./component/Navbar";
// import   rtCard from "./component/CartCard";
import Login from "./component/Login";
import Register from "./component/Register";
import Cart from "./component/Cart";
import Hello from "./component/Hello";
// import AdminNavbar from "./component/AdminNavbar";
import Users from "./component/Users";
import Addproducsts from "./component/Addproducsts";
import ProductList from "./component/ProductList";
import Address from "./component/Address";
import Test from "./component/Test";
import Delivery from "./component/Delivery";
import UpdateProduct from "./component/UpdateProduct";
import Orders from "./component/Orders";
import UpdateOrders from "./component/UpdateOrders";
import Collections from "./component/Collections";
import Navigation from "./component/Navigation";
import AuthProvider from './AuthContext';
import AddressDisplay from "./component/AddressDisplay";
import UpdateAddress from "./component/UpdateAddress";
import Addresslist from "./component/Addresslist";
function App() {
  return (
    <div >
      <AuthProvider>
      <Navigation/>
      
      <Routes>
      <Route path="/" element={<Home/>}/>
        <Route path="/product" element={<Collections/>}/>
        {/* <Route path="/carts" element={<CartCard/>}/> */}
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/hello" element={<Hello/>}/>
        {/* <Route path="/admin" element={<AdminNavbar/>}/> */}
        <Route path="/users" element={<Users/>}/>
        <Route path="/addproducts" element={<Addproducsts/>}/>
        <Route path="/productlist" element={<ProductList/>}/>
        <Route path="/address" element={<Address/>}/>
        <Route path ="/test" element={<Test/>}/>
        <Route path ="/addresslist" element={<Addresslist/>}/>
        <Route path ="/delivery" element={<Delivery/>}/>
        <Route path ="/updateproducts/:id" element={<UpdateProduct/>}/>
        <Route path ="/orders" element={<Orders />}/>
        <Route path ="/updateorders/:id" element={<UpdateOrders />}/>
        <Route path ="displayaddress" element={<AddressDisplay />}/>
        <Route path ="/updateaddress/:id" element={<UpdateAddress/>}/>
      </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
