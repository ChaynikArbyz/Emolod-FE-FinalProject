import Header from "../../components/Header";
import Footer from "../../components/Footer";

const Layout = (children: React.ReactNode) => {

    return (
        <>
        <Header />
        {children}
        <Footer />
        </>
    )
}

export default Layout;