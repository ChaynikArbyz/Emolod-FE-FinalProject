import Layout from "../../layouts/Layout";
import "./style.css"
import { getCartForCurrentUser } from "../../services/localStorageHelper";

const Cart = () => {
    return (
        <Layout>
            <h1 style={{color:"#000"}}>Cart Page</h1>
            <p>right now work only with 1 paragraph style</p>
            <p>Cart items: {getCartForCurrentUser()}</p>
        </Layout>
    )
}

export default Cart