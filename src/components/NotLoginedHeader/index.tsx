import './style.css'

const NotLoginedHeader = () => {
    return (
        <>  
        <header className="header">
            <div className="header-container">
                <div className="logo">
                    <img className="logo-image" src="https://i.postimg.cc/gkFRpygg/Group-1.png" alt="Book Haven Logo"></img>
                    <h1 className="logo-text">Book Haven</h1>
                </div>
                
                <nav className="nav-menu">
                    <a href="/" className="nav-link">Home</a>
                    <a href="/about" className="nav-link">About us</a>
                    <a href="/book" className="nav-link">Book</a>
                    <a href="/contact" className="nav-link">Contact us</a>
                </nav>

                <div className="auth-buttons">
                    <button className="btn-login">Sign in</button>
                    <button className="btn-signup">Join us</button>
                </div>
            </div>
        </header>
        </>
    );
};

export default NotLoginedHeader;