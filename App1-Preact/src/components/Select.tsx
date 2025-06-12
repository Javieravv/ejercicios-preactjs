// Componente Select
 import './css/select-css.css'

interface SelectOption {
    value: string;
    label: string;
    selected?: boolean;
}

interface SelectProps {
    selectName: string;
    selectId: string;
    selectOptions: SelectOption[];
    selectLabel?: string;
}

const Select = ({ selectName, selectId, selectOptions, selectLabel }: SelectProps) => {
    return (
        <div class='select-container'>
            <label htmlFor={selectId}>{selectLabel}</label>
            <select name={selectName} id={selectId}>
                {selectOptions.map(option => (
                    <option key={option.value} value={option.value} selected={option.selected}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default Select