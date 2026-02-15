import './style.css';

type RadioOption = {
    value: string;
    label: string;
}

type RadioGroupProps = {
    name: string;
    options: RadioOption[];
}

export default function RadioGroup({ name, options }: RadioGroupProps) {
    return (
        <div className="radio-group-container">
            {options.map((option) => (
                <div key={option.value} className="radio-item-container">
                    <input
                        type="radio"
                        id={`${name}-${option.value}`}
                        name={name}
                        value={option.value}
                        className="radio-item"
                    />
                    <label htmlFor={`${name}-${option.value}`} className="radio-item-label">
                        {option.label}
                    </label>
                </div>
            ))}
        </div>
    );
}
