// Usamos forwardRef para admitir una referencia externa.
import { forwardRef } from 'preact/compat'
import './css/input-css.css'

interface InputProps {
    labelText?: string;
    inputName: string;
    value: string;
    placeholder?: string;
    focused?: boolean;
    onChange: (value: string) => void;
}


const Input = forwardRef<HTMLInputElement, InputProps>((
    {
        labelText = 'Escribe algo',
        inputName,
        value,
        placeholder = 'Escribe aquí...',
        focused = false,
        onChange
    },
    ref
) =>
(
    <div class={'input-container'}>
        <label htmlFor={inputName}>{labelText}</label>
        <input
            type="text"
            name={inputName}
            value={value}
            id={inputName}
            placeholder={placeholder}
            onInput={e => onChange((e.target as HTMLInputElement).value)}
            autoFocus={focused}
            ref={ref}
        />
    </div>
)
);

export default Input