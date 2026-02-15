import './index.css'
import { createRoot } from 'react-dom/client'
import {BrowserRouter, Route, Routes} from 'react-router'
import Main from './pages/Main'
import Books from './pages/Books'
import Book from './pages/Book'
import Login from './pages/Login'
import Register from './pages/Register'
import { checkToken } from './services/localStorageHelper'

createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/books"  element={checkToken() ? <Books /> : <Login />} />
        <Route path="/book" element={<Book />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
)
