import "./style.css"
import Layout from "../../layouts/Layout"
import { useAppDispatch, useAppSelector } from "../../hooks/redux"
import { useEffect } from "react"
import { getAllProducts, getProductById, createProduct, updateProduct, deleteProduct } from "../../shop/slices/productsSlice"
import ProductCard from "../../components/ProductCard"
import Loader from "../../components/Loader"

const Products = () => {
    const dispatch = useAppDispatch()
    const {products, isLoading, error} = useAppSelector(state => state.products)

const currentProduct = useAppSelector(state => state.products.currentProduct);

    useEffect(() => {
        dispatch(getAllProducts())
    }, [dispatch]);

    const handleGetProductByID = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const id = Number(formData.get('id'));

        if (id <= 0) {
            alert("product ID must be greater than zero")
            return;
        }

        const isExist = products.some(p => Number(p.id) === id)
        if (!isExist) {
            alert(`product with ID: ${id} does not exists!`);
            return;
        }
        
        dispatch(getProductById(id));
    };

    const handleCreateProduct = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const newProduct = {
            title: formData.get('title') as string,
            price: Number(formData.get('price')),
            description: formData.get('description') as string,
            category: formData.get('category') as string,
            image: formData.get('image') as string
        };

        dispatch(createProduct(newProduct));
    };

    const handleUpdateProduct = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const id = Number(formData.get('id'));
        const productData = {
            title: formData.get('title') as string,
            price: Number(formData.get('price')),
            description: formData.get('description') as string,
            category: formData.get('category') as string,
            image: formData.get('image') as string
        };

        if (id <= 0) {
            alert("product ID must be greater than zero")
            return;
        }

        const isExist = products.some(p => Number(p.id) === id)
        if (!isExist) {
            alert(`product with ID: ${id} does not exists!`);
            return;
        }

        if (productData.price <= 0) {
            alert("Price must be greater than zero");
            return;
        }

        dispatch(updateProduct({id, productData: productData}));
    };

    const handleDeleteProductByID = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const id = Number(formData.get('id'));

        if (id <= 0) {
            alert("product ID must be greater than zero")
            return;
        }

        const isExist = products.some(p => Number(p.id) === id)
        if (!isExist) {
            alert(`product with ID: ${id} does not exists!`);
            return;
        }
        
        dispatch(deleteProduct(id));
    };

    return (
        <Layout>
                {isLoading && <div className="loader-and-error-container"><Loader /></div>}
                {error && <div className="loader-and-error-container"><p style={{color:"red"}}>{error}</p></div>}
            <div style={{maxWidth: "1600px", margin: "20px auto", display: "flex", gap: "20px", justifyContent:"center"}}>
            {/* стилі селектору та інпут намберу було лінь робити тому тільки так*/}
            <div className="products-form">
                <button className="book-btn-to-cart" onClick={() => dispatch(getAllProducts())}>Get all products</button>
            </div>

            <form onSubmit={handleGetProductByID} className="products-form">
                <div>                    
                    <div><input type="number" name="id" placeholder="ID of product" required className="form-input"/></div>
                </div>
                <button className="book-btn-to-cart" type="submit">Get product by ID</button>
            </form>

            <form onSubmit={handleCreateProduct} className="products-form">
                <div>
                    <div><input type="text" name="title" placeholder="Product name" required className="form-input"/></div>
                    <div><input type="number" name="price" placeholder="Price" required className="form-input"/></div>
                    <div><input type="text" name="description" placeholder="Description" required className="form-input"/></div>
                    <div><select name="category" required className="form-input">
                        <option value="">Choose category</option>
                        <option value="electronics">electronics</option>
                        <option value="clothing">clothing</option>
                        <option value="books">books</option>
                    </select></div>
                    <div><input type="text" name="image" placeholder="Image Url" required className="form-input"/></div>
                </div>
                <button className="book-btn-to-cart" type="submit">Add product</button>
            </form>

            <form onSubmit={handleUpdateProduct} className="products-form">
                <div>                    
                    <div><input type="number" name="id" placeholder="ID of product" required className="form-input"/></div>
                    <div><input type="text" name="title" placeholder="Product name" required className="form-input"/></div>
                    <div><input type="number" name="price" placeholder="Price" required className="form-input"/></div>
                    <div><input type="text" name="description" placeholder="Description" required className="form-input"/></div>
                    <div><select name="category" required className="form-input">
                        <option value="">Choose category</option>
                        <option value="electronics">electronics</option>
                        <option value="clothing">clothing</option>
                        <option value="books">books</option>
                    </select></div>
                    <div><input type="text" name="image" placeholder="Image Url" required className="form-input"/></div>
                </div>
                <button className="book-btn-to-cart" type="submit">Edit product</button>
            </form>

             <form onSubmit={handleDeleteProductByID} className="products-form">
                <div>                    
                    <div><input type="number" name="id" placeholder="ID of product" required className="form-input"/></div>
                </div>
                <button className="book-btn-to-cart" type="submit">Delete product</button>
            </form>

            </div>
                <div className="products-container">
                    {currentProduct !== null ? (
                        <ProductCard key={currentProduct.id} product={currentProduct} />
                    ) : (
                        products.map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))
                    )}
                </div>
        </Layout>
    )
}

export default Products