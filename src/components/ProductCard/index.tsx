import "./style.css"
import type { Product } from "../../types/product"


const ProductCard = ({product}: {product: Product}) => {
    return (
        <div className="product-card">
            <img className="product-image" src={product.image} alt={product.title} />
            <h3 className="product-title">{product.title}</h3>
            <p className="product-description">{product.description}</p>
            <p className="product-category">{product.category}</p>
            <p className="product-price">${product.price}</p>
            <p className="product-id">ID: {product.id}</p>
        </div>
    );
}

export default ProductCard;