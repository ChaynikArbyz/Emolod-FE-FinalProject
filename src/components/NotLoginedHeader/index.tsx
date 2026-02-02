import './style.css'

const NotLoginedHeader = () => {
    return (
        <>  
        <header className="not-header">
            <div className="not-header-container">
                <div className="not-logo">
                    <a href="/"><img className="not-logo-image" src="https://i.postimg.cc/gkFRpygg/Group-1.png" alt="Book Haven Logo"></img></a>
                    
                    <h1 className="not-logo-text">Book Haven</h1>
                </div>
                
                <nav className="not-nav-menu">
                    <a href="/" className="not-nav-link">Home</a>
                    <a href="/about" className="not-nav-link">About us</a>
                    <a href="/book" className="not-nav-link">Book</a>
                    <a href="/contact" className="not-nav-link">Contact us</a>
                </nav>

                <div className="not-auth-buttons">
                    <button className="not-btn-login">Sign in</button>
                    <button className="not-btn-signup">Join us</button>
                </div>
            </div>
        </header>
        </>
    );
};

export default NotLoginedHeader;