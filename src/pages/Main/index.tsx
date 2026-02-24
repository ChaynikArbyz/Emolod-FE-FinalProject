import "./style.css"
import Layout from "../../layouts/Layout"
import { getBooksWithAuthor } from "../../services/localStorageHelper"
import BookPreview from "../../components/BookPreview"

const Main = () => {
    const allBooks = getBooksWithAuthor()
    const popularBooks = allBooks ? allBooks.slice(0, 10) : []

    return (
        <Layout>
            <div className="main-first-background">
                <div className="main-first-div"> 
                    <div className="main-text-search">
                        <p className="main-text-header">Find your next great read at our online book store</p>
                        <p className="main-text-second">Explore our current collection</p>
                        <div style={{display:"flex"}}>
                            <input type="text" className="search-input" placeholder="Find your books here...."/>
                            <button className="search-btn">Search</button>
                        </div>
                    </div>
                    <img src="https://i.postimg.cc/GhH9ZwHK/image-8.png" alt="cool photo" className="main-image"/>
                </div>
            </div>
            <div className="main-second-div">
                    <p style={{fontWeight:"800", fontSize:"25px", marginTop:"35px", marginBottom:"0"}}>Popular Books</p>
                    <div className="books-container">
                        {popularBooks.map((book, index) => (
                            < BookPreview id={book.id} image={book.image} title={book.title} authorName={book.authorName ?? "unknown author"}  status={book.status} price={book.price} discountPrice={book.discountPrice} key={index}/>
                        ))}

                    </div>
            </div>
            <div style={{backgroundColor:"#ffc581", height:"450px", width:"100%"}}>
                <div className="main-third-div">
                    <p className="main-third-text-header">Start your reading journey</p>
                    <p className="main-third-text-second">No subscription needed. Drive into a world of stories today.</p>
                    <div style={{display:"flex", justifyContent:"center"}}>
                        <button className="main-third-btn" onClick={() => window.location.href = "/Books"}>Start Buying</button>
                    </div>
                </div>
            </div>
            <div className="main-fourth-div">
                <p className="main-fourth-header">Buyer’s feedback</p>
                <div style={{display:"flex", justifyContent:"center", gap:"30px", flexWrap:"wrap"}}>
                    <div className="main-feedback-card">
                        <div style={{display:"flex", gap:"20px"}}>
                            <img className="main-feedback-icon" src="https://i.postimg.cc/s2qJhdv1/8c248244a03c4b443811e8029b4c48959592e6c0.png" alt="Author icon" />
                            <div>
                                <p className="main-feedback-author">Emily Thompson</p>
                                <img style={{width:"100px", height:"20px", margin:"0"}} src="https://i.postimg.cc/y6wwztjj/image.png" alt="Star icon"/>
                            </div>
                        </div>
                        <p className="main-feedback-text">A haven for book lovers!</p>
                    </div>
                    <div className="main-feedback-card">
                        <div style={{display:"flex", gap:"20px"}}>
                            <img className="main-feedback-icon" style={{backgroundColor:"#b9e5ff"}} src="https://i.postimg.cc/L5MBxtk1/6c53cc42faf52cc0c4dd477f9b397f3bb09d4c46.png" alt="Author icon" />
                            <div>
                                <p className="main-feedback-author">Michael Chen</p>
                                <img style={{width:"100px", height:"20px", margin:"0"}} src="https://i.postimg.cc/y6wwztjj/image.png" alt="Star icon"/>
                            </div>
                        </div>
                        <p className="main-feedback-text">Great collection and cozy atmosphere.</p>
                    </div>
                    <div className="main-feedback-card">
                        <div style={{display:"flex", gap:"20px"}}>
                            <img className="main-feedback-icon" src="https://i.postimg.cc/s2qJhdv1/8c248244a03c4b443811e8029b4c48959592e6c0.png" alt="Author icon" />
                            <div>
                                <p className="main-feedback-author">Sofia Rodriguez</p>
                                <img style={{width:"100px", height:"20px", margin:"0"}} src="https://i.postimg.cc/y6wwztjj/image.png" alt="Star icon"/>
                            </div>
                        </div>
                        <p className="main-feedback-text">Best bookstore experience ever!</p>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Main;