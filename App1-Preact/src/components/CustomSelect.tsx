// Componente select personalizado en PreactJs
import { useEffect, useRef, useState } from 'preact/hooks'
import './css/custom-select.css'

interface SelectOption {
    value: string
    label: string
    selected?: boolean
}

interface CustomSelectProps {
    selectOptions: SelectOption[];
    selectLabel?: string;
}

const CustomSelect = ({
    selectOptions,
    selectLabel,
}: CustomSelectProps
) => {
    const [isOptionsVisible, setIsOptionsVisible] = useState(false)
    const [selectedOption, setSelectedOption] = useState<SelectOption | null>({ value: '', label: 'Selecciona una opción' })
    const [highlightedIndex, setHighlightedIndex] = useState(0)
    const optionRefs = useRef<(HTMLLIElement | null)[]>([]);


    // Efecto para mostrar resaltada la primera opción o la que ya se escogió
    useEffect(() => {
        if (isOptionsVisible && highlightedIndex !== null) {
            const selectedIndex = selectOptions.findIndex(opt => opt.value === selectedOption?.value);
            const el = optionRefs.current[highlightedIndex];
            el?.scrollIntoView({ block: 'nearest' });
            setHighlightedIndex(selectedIndex >= 0 ? selectedIndex : 0);
        }
    }, [isOptionsVisible, highlightedIndex]);


    const handleWrapperClick = () => {
        setIsOptionsVisible(!isOptionsVisible)
        console.log('Hemos clicado en el select', isOptionsVisible)
    }

    const handleOptionClick = (option: SelectOption, e?: MouseEvent | KeyboardEvent) => {
        if (e) e.stopPropagation()
        setIsOptionsVisible(false)
        setSelectedOption({
            ...option,
            selected: true
        })
    }

    // Código para manejo del tecado
    const handleKeyDown = (e: KeyboardEvent) => {
        // if (!isOptionsVisible) return;

        switch (e.key) {
            case 'ArrowDown':
                e.preventDefault(); // evita scroll en la página
                setHighlightedIndex((prev) => {
                    const nextIndex = Math.min(prev + 1, selectOptions.length - 1);
                    setSelectedOption({ ...selectOptions[nextIndex], selected: true });
                    return nextIndex;
                });
                console.log('Valor actual: ', selectedOption)
                break;

            case 'ArrowUp':
                e.preventDefault();
                setHighlightedIndex((prev) => {
                    const nextIndex = Math.max(prev - 1, 0);
                    setSelectedOption({ ...selectOptions[nextIndex], selected: true });
                    return nextIndex;
                });
                break;

            case 'Enter':
                e.preventDefault();
                const selected = selectOptions[highlightedIndex];
                if (selected) handleOptionClick(selected);
                break;

            case 'Escape':
                setIsOptionsVisible(false);
                break;
        }
    };

    console.log(optionRefs.current)


    return (
        <div
            class={`select-wrapper ${isOptionsVisible ? 'select-open' : ''}`}
            onClick={handleWrapperClick}
            tabIndex={0}
            onBlur={() => setIsOptionsVisible(false)}
            onKeyDown={handleKeyDown}
        >
            <span class="select-trigger">{selectedOption?.label}</span>
            {/* Flecha hacia abajo del select */}
            <svg
                class={`select-arrow ${isOptionsVisible ? 'arrow-open' : ''}`}
                width="25"
                height="25"
                viewBox="0 0 24 24" fill="none">
                <path d="M6 9l6 6 6-6" stroke="#333" strokeWidth="4" fill="none" />
            </svg>
            {/* Aquí se muestra el componente Select */}
            <ul
                class={`select-options ${!isOptionsVisible ? 'select-options-hidden' : ''}`} >
                {
                    selectOptions.map((option, index) => (
                        <li
                            class={`select-option ${index === highlightedIndex ? 'highlighted' : ''}`}
                            key={option.value}
                            ref={(el) => optionRefs.current[index] = el}
                            onClick={(event) => handleOptionClick(option, event)}
                        >
                            {option.label}
                        </li>
                    ))
                }
            </ul>

        </div>
    )
}

export default CustomSelect