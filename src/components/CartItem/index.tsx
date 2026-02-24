import "./style.css"
import type { Book } from "../../types/Book";
import { getCategories, getAuthorById } from "../../services/localStorageHelper";
import { useAppDispatch } from "../../hooks/redux";
import { addBookToCart, removeOneBookFromCart } from "../../shop/slices/userSlice";

type props = {
  book: Book;
  quantity: number;
};

const CartItem = (args: props) => {
    const dispatch = useAppDispatch();

    return (
        <div className="cart-book-container">
            <div className="cart-book-meta">
                <img className="book-image" src={args.book.image} alt="bookImage"></img>
                <div className="cart-book-info">
                    <p className="book-page-title">{args.book.title}</p>
                    <p className="cart-book-description">{args.book.description}</p>
                    <p className="cart-book-author">Author: {getAuthorById(args.book.authorId)?? "Unknown Author"}</p>
                    <p className="cart-book-category">Category: {getCategories()?.find(c => c.id === args.book.categoryId)?.name || "Unknown Category"}</p>
                    <p className="cart-book-status">Status: {args.book.status}</p>
                    <p className="cart-book-price"style={{fontWeight:"600"}}>Price: {args.book.discountPrice}$</p>
                </div>
            </div>
            <div className="cart-book-important-info">
                <p className="cart-book-total-price" style={{fontWeight:"700"}}>Total price: {(args.book.discountPrice * args.quantity).toFixed(2)}$</p>
                <div className="cart-book-quantity-container">
                    <button className="cart-book-btn" onClick={() => dispatch(removeOneBookFromCart(args.book.id))}>-</button>
                    <p className="cart-book-quantity">Quantity: {args.quantity}</p>
                    <button className="cart-book-btn" onClick={() => dispatch(addBookToCart(args.book.id))}>+</button>
                </div>
            </div>
        </div>
        )
}

export default CartItem