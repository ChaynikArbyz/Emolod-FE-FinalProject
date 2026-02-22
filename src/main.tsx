import './index.css'
import { createRoot } from 'react-dom/client'
import {BrowserRouter, Route, Routes} from 'react-router'
import Main from './pages/Main'
import Books from './pages/Books'
import Book from './pages/Book'
import Login from './pages/Login'
import Register from './pages/Register'
import Cart from './pages/Cart'
import { checkToken } from './services/localStorageHelper'
import { Provider } from 'react-redux'
import { store } from './shop'

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/books"  element={checkToken() ? <Books /> : <Login />} />
        <Route path="/book/:bookId" element={<Book />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  </Provider>
)
