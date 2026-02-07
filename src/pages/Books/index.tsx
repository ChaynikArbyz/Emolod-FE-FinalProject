import "./style.css"
import "../../layouts/NotLoginedLayout";
import Layout from "../../layouts/Layout";
import Categories from "../../components/Categories";

const Books = () => {
    return (
        Layout(
        <div className="books-container">
            <Categories />
        </div>
        )
    )
}

export default Books;