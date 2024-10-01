
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import GetProductsList from './components/Products'
import ProductDetails from './components/ProductDetails'
import Login from './components/Login'


function App() {
  return (
  <BrowserRouter>
  <Routes>
    <Route element={<GetProductsList />} path="/" />
    <Route element={<ProductDetails />} path="details/:id" />
    <Route element={<Login />} path="login/" />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
