import './App.css'
import AppLayout from './components/Layout'
import { Route, Routes } from 'react-router-dom'
import ProductTable from './components/ProductTable'
import ProductInfo from './components/ProductInfo'
import CreateProduct from './components/CreateProduct'
import EditProduct from './components/EditProduct'
import Login from './components/Login'
import Register from './components/Register'
import { ProtectedRoute } from './security/ProtectedRoute'
import Home from './components/Home'

function App() {
  return (
    <Routes>
      <Route path='/' element={<AppLayout />}>
        <Route index element={<Home />} />
        <Route path='/products' element={<ProductTable />} />
        <Route path='/products/:id' element={<ProductInfo />} />
        <Route path='/create' element={
          <ProtectedRoute>
            <CreateProduct />
          </ProtectedRoute>
        } />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />-
        <Route path='/edit/:id' element={<EditProduct />} />
        <Route path='*' element={<p>Page Not Found!</p>} />
      </Route>
    </Routes>
  )
}

export default App
