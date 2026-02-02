import './style.css'

const Header = () => {
    return (
        <>  
        <header className="header">
            <div className="header-container">
                <div className="logo">
                    <a href="/"><img className="logo-image" src="https://i.postimg.cc/gkFRpygg/Group-1.png" alt="Book Haven Logo"></img></a>
                    
                    <h1 className="logo-text">Book Haven</h1>
                </div>
                
                <nav className="nav-menu">
                    <a href="/" className="nav-link">Home</a>
                    <a href="/about" className="nav-link">About us</a>
                    <a href="/book" className="nav-link">Book</a>
                </nav>

                <button className="search-btn">Search</button>
                <input type="text" className="search-input"/>
                
                <a href="/account" className="nav-link">Account</a>
                <button className="btn-cart"><img src="https://i.postimg.cc/g0nc57FD/Vector.png" alt="card image" /></button>
            </div>
        </header>
        </>
    );
};

export default Header;