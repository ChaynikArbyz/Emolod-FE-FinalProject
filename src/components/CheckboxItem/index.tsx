import './style.css';

type CheckboxItemProps = {
    id: string;
    name: string;
    label: string;
}

export default function CheckboxItem({ id, name, label }: CheckboxItemProps) {
    return (
        <div className="checkbox-item-container">
            <input
                type="checkbox"
                id={id}
                name={name}
                className="checkbox-item"
            />
            <label htmlFor={id} className="checkbox-item-label">{label}</label>
        </div>
    );
}
