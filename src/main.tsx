import './index.css'

import { createRoot } from 'react-dom/client'
import {BrowserRouter, Route, Routes} from 'react-router'
import Main from './pages/Main'
import Books from './pages/Books'
import Book from './pages/Book'

createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/books" element={<Books />} />
        <Route path="/book" element={<Book />} />
      </Routes>
    </BrowserRouter>
)
