import "./style.css"
import Layout from "../../layouts/Layout";
import AdBanner from "../../components/AdBanner";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import type { BookWithAuthor } from "../../services/localStorageHelper";
import { getBooksWithAuthor, getCategories, addBookToCurrentUserCart } from "../../services/localStorageHelper";
import BookPreview from "../../components/BookPreview";

const Book = () => {
    const bookId = useParams().bookId;
    const [book, setBook] = useState<BookWithAuthor | null>(null);
    const [recommendedBooks, setRecommendedBooks] = useState<BookWithAuthor[]>([]);

    useEffect(() => {
        const allBooks = getBooksWithAuthor();
        if (allBooks && bookId) {
            const selectedBook = allBooks.find(book => book.id === parseInt(bookId));
            
            if (selectedBook) {
                setBook(selectedBook);
            }

            const sorted = [...allBooks].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()).slice(0, 5);
            setRecommendedBooks(sorted);
        }
    }, [bookId]);

    if (!book) {
        return (
            <Layout>
                <p>Loading</p>
                <AdBanner />
            </Layout>
        );
    }

    return (
        <Layout>
            <div className="book-page">
                <div className="book-main">
                    <div className="book-cover-container">
                        <img src={book.image} alt={book.title} className="book-cover" />
                    </div>

                    <div className="book-details">
                        <h1 className="book-page-title">{book.title}</h1>
                        
                        <div className="book-meta">
                            <p className="book-author-name">{book.authorName}</p>
                            <p className="book-category">{getCategories()?.find(c => c.id === book.categoryId)?.name || "Unknown Category"}</p>
                        </div>

                        <div className="book-info-row">
                            <span className="book-info-label">Publish date:</span>
                            <span className="book-info-value">{new Date(book.createdAt).toDateString()}</span>
                        </div>

                        <div className="book-price-container">
                            <span className="book-price-label">Price:</span>
                            <span className="book-discount-price" style={{color:"#333", marginLeft:"6px"}}>{book.discountPrice}$</span>
                            <span className="book-price">{book.price}$</span>
                        </div>

                        <div className="book-status-container">
                            <span className="book-status-label">Status: </span>
                            <span className="book-status">{book.status}</span>
                        </div>

                        <button
                            className="book-btn-to-cart"
                            style={{maxWidth:"230px", marginLeft:"0px"}}
                            onClick={() => {
                                if (book) {
                                    addBookToCurrentUserCart(book.id);
                                    alert("Book added to cart!");
                                }
                            }}
                        >Add to Cart</button>
                    </div>
                </div>

                <div className="book-description-section">
                    <h2 className="section-title">Book Description</h2>
                    <p className="description-text">{book.description}</p>
                </div>

                <div className="recommended-section">
                    <h2 className="section-title">New Released</h2>
                    <div className="recommended-books-container">
                        {recommendedBooks.map((recBook) => (
                            <BookPreview
                                key={recBook.id}
                                id={recBook.id}
                                image={recBook.image}
                                title={recBook.title}
                                authorName={recBook.authorName ?? "unknown author"}
                                status={recBook.status}
                                price={recBook.price}
                                discountPrice={recBook.discountPrice}
                            />
                        ))}
                    </div>
                </div>
            </div>
        <AdBanner />
        </Layout>
    )
}

export default Book;