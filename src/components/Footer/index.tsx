import './style.css'

const Footer = () => {
    return (
        <>  
        <footer className="footer">
            <div className="footer-container">
                <p style={{textAlign: "center", fontWeight: "bold", fontSize: "22px", paddingTop: "80px",marginTop: "0px", marginBottom: "30px"}}>Subscribe our new offers !</p>
                <div className= "email-input-container">
                    <input type="email" placeholder="Input your email" className="email-input"></input>
                    <button className="subscribe-button">Subscribe</button>
                </div>
                <div style={{display: "flex", alignItems: "center", columnGap: "400px", flexWrap: "wrap"}}>
                    <div>
                        <a href="/"><img className="logo-image" src="https://i.postimg.cc/gkFRpygg/Group-1.png" alt="Book Haven Logo"></img></a>
                        <h1 className="logo-text">Book Haven</h1>
                    </div>
                    <div>
                        <nav className="nav-menu" style={{display: "flex", gap: "40px", flexWrap: "wrap"}}>
                            <a className='nav-link'>Pricing</a>
                            <a className='nav-link'>About us</a>
                            <a className='nav-link'>Features</a> 
                            <a className='nav-link'>Help center</a> 
                            <a className='nav-link'>Contact us</a> 
                            <a className='nav-link'>FAQs</a> 
                            <a className='nav-link'>Careers</a> 
                        </nav>
                    </div>
                </div>
                <div style={{height: "1px", backgroundColor: "#000000", margin: "20px 0"}}></div>
                <div style={{display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap"}}>
                    <img style={{maxHeight: "36px"}}  src="https://i.postimg.cc/TY5pkz5F/Textbox-7.pngg" alt="Footer Logo"></img>
                    <p style={{marginTop: "10px"}}>© 2022 Brand, Inc. • Privacy • Terms • Sitemap</p>
                    <div style={{display: "flex", gap: "15px", alignItems: "center"}}>
                        <img style={{maxHeight: "24px"}} src="https://i.postimg.cc/9fCPHmGQ/Logo-twitter-4.png" alt="Twitter Icon"></img>
                        <img style={{maxHeight: "24px"}} src="https://i.postimg.cc/GpdPnLkp/Logo-facebook-4.png" alt="Facebook Icon"></img>
                        <img style={{maxHeight: "24px"}} src="https://i.postimg.cc/0NPG1kp2/Logo-linkedin-4.png" alt="LinkedIn Icon"></img>
                        <img style={{maxHeight: "24px"}} src="https://i.postimg.cc/CKSCphjM/Logo-youtube-4.png" alt="YouTube Icon"></img>
                    </div>
                </div>
            </div>
        </footer>
        </>
    );  
};

export default Footer;