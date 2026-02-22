import './style.css'
import { addBookToCart } from '../../shop/slices/userSlice';
import { useAppDispatch } from '../../hooks/redux';

type props = {
    id: number
    image: string
    title: string
    authorName: string
    price: number
    discountPrice: number
    status: string
}

const BookPreview = (args: props) => {
    const dispatch = useAppDispatch();

    return (
        <div className="book-container">
            <a href={`/book/${args.id}`} className="book-image-link"><img className="book-image" src={args.image} alt="bookImage"></img></a>
            <p className="book-title">{args.title}</p>
            <p className="book-author">{args.authorName}</p>
            <div className="book-prices">
                <p className="book-discount-price">{args.discountPrice}$</p>
                <p className="book-price">{args.price}$</p>
            </div>
            <p className="book-status">{args.status}</p>
            <button className="book-btn-to-cart"
            onClick={() => {
                if (args.id) {
                    dispatch(addBookToCart(args.id));
                    alert("Book added to cart!");
                }
            }}
            >Add to Cart</button>
        </div>
        )
}

export default BookPreview