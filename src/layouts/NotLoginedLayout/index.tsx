import NotLoginedHeader from "../../components/NotLoginedHeader";
import Footer from "../../components/Footer";

const NotLoginedLayout = (children: React.ReactNode) => {

    return (
        <>
        <NotLoginedHeader />
        {children}
        <Footer />
        </>
    )
}

export default NotLoginedLayout;