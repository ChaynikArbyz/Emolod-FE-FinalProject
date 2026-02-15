import "./style.css"
import { useState } from "react"
import Layout from "../../layouts/Layout";
import Categories from "../../components/Categories";
import BookPreview from "../../components/BookPreview";
import AdBanner from "../../components/AdBanner";
import {getBooksWithAuthor} from "../../services/localStorageHelper"
import type {BookWithAuthor} from "../../services/localStorageHelper"

const Books = () => {
    const allBooks: BookWithAuthor[] | null = getBooksWithAuthor()
    const [selectedCategories, setSelectedCategories] = useState<string[]>([])
    
    const handleCategoryChange = (categoryId: string, isChecked: boolean) => {
        if (isChecked) {
            setSelectedCategories([...selectedCategories, categoryId])
        } else {
            setSelectedCategories(selectedCategories.filter(id => id !== categoryId))
        }
    }
    
    const filteredBooks = selectedCategories.length === 0 ? allBooks : allBooks?.filter(book => selectedCategories.includes(String(book.categoryId)))
    
    return (
        <Layout>
            <div>
                <Categories onCategoryChange={handleCategoryChange} />
                <div className="books-container">
                    {filteredBooks && filteredBooks.map((book, index) => ( 
                        < BookPreview image={book.image} title={book.title} authorName={book.authorName ?? "unknown author"}  status={book.status} price={book.price} discountPrice={book.discountPrice} key={index}/>) )
                    }
                </div>
                <AdBanner/>
            </div>
        </Layout>
    )
}

export default Books