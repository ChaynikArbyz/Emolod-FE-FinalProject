import Header from "../../components/Header";
import NotLoginedHeader from "../../components/NotLoginedHeader";
import Footer from "../../components/Footer";
import { checkToken } from "../../services/localStorageHelper";

const Layout = ({ children }: { children: React.ReactNode }) => {

    return (
        <>
        {checkToken() ? <Header /> : <NotLoginedHeader />}
        {children}
        <Footer />
        </>
    )
}

export default Layout;