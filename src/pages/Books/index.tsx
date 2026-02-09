import "./style.css"
import "../../layouts/NotLoginedLayout";
import Layout from "../../layouts/Layout";
import Categories from "../../components/Categories";
import BookPreview from "../../components/BookPreview";
import AdBanner from "../../components/AdBanner";
import {getBooksWithAuthor} from "../../services/localStorageHelper"
import type {BookWithAuthor} from "../../services/localStorageHelper"

const Books = () => {
    const books: BookWithAuthor[] | null = getBooksWithAuthor()
    return (
        Layout(
        <div>
            <Categories/>
            <div className="books-container">
                {books && books.map((book, index) => ( 
                    < BookPreview image={book.image} title={book.title} authorName={book.authorName ?? "unknown author"}  status={book.status} price={book.price} discountPrice={book.discountPrice} key={index}/>) )
                }
            </div>
            <AdBanner/>
        </div>
        )
    )
}

export default Books