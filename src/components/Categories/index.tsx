import './style.css'
import { useRef } from 'react';
import { getCategories } from '../../services/localStorageHelper';

interface CategoriesProps {
    onCategoryChange?: (categoryId: string, isChecked: boolean) => void;
}

const Categories = ({ onCategoryChange }: CategoriesProps) => {
    const categoriesData = getCategories() || [];
    const categories = categoriesData.map(category => ({
        id: String(category.id),
        label: category.name
    }));
    const checkboxRefs = useRef<{ [key: string]: HTMLInputElement }>({});

    const handleCheckboxChange = (categoryId: string) => {
        const checkbox = checkboxRefs.current[categoryId];
        if (checkbox && onCategoryChange) {
            onCategoryChange(categoryId, checkbox.checked);
        }
    };

    return (
        <div className="categories-container">
            {categories.map((category) => (
                <div key={category.id}>
                    <input
                        ref={(el) => {
                            if (el) checkboxRefs.current[category.id] = el;
                        }}
                        type="checkbox"
                        id={category.id}
                        onChange={() => handleCheckboxChange(category.id)}
                        className="checkbox-item"
                    />
                    <label htmlFor={category.id} className="checkbox-item-label">{category.label}</label>
                </div>
            ))}
        </div>
    );
};

export default Categories;