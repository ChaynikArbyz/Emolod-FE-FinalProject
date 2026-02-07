import './style.css'

const Categories = () => {
    return (
            <div className="categories-container">
                <div className="category-container">
                    <input type= "checkbox" id="Fiction" className="category-checkbox"/>
                    <label htmlFor="Fiction" className="category-label">Fiction</label>
                </div>
                <div className="category-container">
                    <input type= "checkbox" id="Science Fiction" className="category-checkbox"/>
                    <label htmlFor="Science Fiction" className="category-label">Science Fiction</label>
                </div>
                <div className="category-container">
                    <input type= "checkbox" id="Fantasy" className="category-checkbox"/>
                    <label htmlFor="Fantasy" className="category-label">Fantasy</label>
                </div>
                <div className="category-container">
                    <input type= "checkbox" id="Mystery" className="category-checkbox"/>
                    <label htmlFor="Mystery" className="category-label">Mystery</label>
                </div>
                <div className="category-container">
                    <input type= "checkbox" id="Horror" className="category-checkbox"/>
                    <label htmlFor="Horror" className="category-label">Horror</label>
                </div>
                <div className="category-container">
                    <input type= "checkbox" id="Biography" className="category-checkbox"/>
                    <label htmlFor="Biography" className="category-label">Biography</label>
                </div>
                <div className="category-container">
                    <input type= "checkbox" id="History" className="category-checkbox"/>
                    <label htmlFor="History" className="category-label">History</label>
                </div>
            </div>
    );  
};

export default Categories;