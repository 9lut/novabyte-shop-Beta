import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register";
import Profile from "./pages/profile/profile";
import ProductView from './components/product/productView';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/product-detail/:id" element={<ProductView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
