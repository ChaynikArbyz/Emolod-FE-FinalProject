import Layout from "../../layouts/Layout";
import "./style.css"
import { useAppSelector } from "../../hooks/redux";
import CartItem from "../../components/CartItem/index";
import { getBooksWithAuthor } from "../../services/localStorageHelper";

const Cart = () => {
    const cart = useAppSelector(state => state.user.cart);
    return (
        <Layout>
            <div className="cart-items-container">
                <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
                    <p className="cart-total-price" style={{fontWeight:"700", fontSize:"30px", margin:"0", marginLeft:"20px"}}>Total Cart Price: {cart?.reduce((total, item) => {
                        const book = getBooksWithAuthor()?.find(b => b.id === item.bookId);
                        return total + (book ? book.discountPrice * item.quantity : 0);
                    }, 0) || 0}$</p>
                    <button className="cart-checkout-btn">Checkout</button>
                </div>
                {cart?.map(item => {
                    const book = getBooksWithAuthor()?.find(b => b.id === item.bookId);
                    return book ? <CartItem key={item.bookId} book={book} quantity={item.quantity} /> : null;
                })}
            </div>
        </Layout>
    )
}

export default Cart