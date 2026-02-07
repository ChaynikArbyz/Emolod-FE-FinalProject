import "./style.css"
import "../../layouts/NotLoginedLayout";
import NotLoginedLayout from "../../layouts/NotLoginedLayout";

const Main = () => {
    return (
        NotLoginedLayout(
            <div style={{backgroundColor: "#fff", height: "1000px"}}>  </div>
        )
    )
}

export default Main;