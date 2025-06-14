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
    onChange?: (value: string) => void;
}

const CustomSelect = ({
    selectOptions,
    selectLabel,
    onChange
}: CustomSelectProps
) => {
    const [isOptionsVisible, setIsOptionsVisible] = useState(false)
    const [selectedOption, setSelectedOption] = useState<SelectOption | null>({ value: '', label: 'Selecciona una opción' })
    const [highlightedIndex, setHighlightedIndex] = useState(0)
    const [searchBuffer, setSearchBuffer] = useState<string>('')
    const [openDirection, setOpenDirection] = useState<'up' | 'down'>('down')

    const optionRefs = useRef<(HTMLLIElement | null)[]>([]);
    const searchTimeOut = useRef<number | null>(null);
    const wrapperRef = useRef<HTMLDivElement | null>(null);


    // Efecto para mostrar resaltada la primera opción o la que ya se escogió
    // useEffect(() => {
    //     if (isOptionsVisible && highlightedIndex !== null) {
    //         const selectedIndex = selectOptions.findIndex(opt => opt.value === selectedOption?.value);
    //         const el = optionRefs.current[highlightedIndex];
    //         el?.scrollIntoView({ block: 'nearest' });
    //         setHighlightedIndex(selectedIndex >= 0 ? selectedIndex : 0);
    //     }
    // }, [isOptionsVisible, highlightedIndex]);

    useEffect(() => {
        if (isOptionsVisible) {
            const selectedIndex = selectOptions.findIndex(opt => opt.value === selectedOption?.value);
            setHighlightedIndex(selectedIndex >= 0 ? selectedIndex : 0);
        }
    }, [isOptionsVisible]);


    useEffect(() => {
        if (isOptionsVisible && optionRefs.current[highlightedIndex]) {
            optionRefs.current[highlightedIndex]?.scrollIntoView({ block: 'center', behavior: 'smooth' });
        }
    }, [highlightedIndex, isOptionsVisible]);

    // Efecto para establecer la opción seleccionada al cargar el componente
    const handleWrapperClick = () => {
        if (!isOptionsVisible && wrapperRef.current) {

            const rect = wrapperRef.current.getBoundingClientRect();
            const spaceBelow = window.innerHeight - rect.bottom;
            const spaceAbove = rect.top;
            setOpenDirection(spaceBelow < 300 && spaceAbove > 300 ? 'up' : 'down');
        }
        setIsOptionsVisible(prev => !prev);
    };

    // Efecto para establecer la opción al dar click en el select
    const handleOptionClick = (option: SelectOption, e?: MouseEvent | KeyboardEvent) => {
        if (e) e.stopPropagation()
        setIsOptionsVisible(false)
        setSelectedOption({
            ...option,
            selected: true
        })
        onChange?.(option?.value);
    }

    // Función para añadir un carácter al buffer de búsqueda
    const appendToSearchBuffer = (char: string) => {
        if (searchTimeOut.current) clearTimeout(searchTimeOut.current);
        const newBuffer = searchBuffer + char.toLowerCase();
        setSearchBuffer(newBuffer);
        searchTimeOut.current = setTimeout(() => {
            setSearchBuffer('');
        }, 1000);
        return newBuffer;
    }

    // Código para que el componente sea accesible con el teclado
    // y se pueda navegar con las flechas del teclado
    // También para capturar la letra que se pulse y hacer una búsqueda
    const handleKeyDown = (e: KeyboardEvent) => {
        // Si se pulsa una letra o un número, buscamos la opción que empiece por esa letra
        if (e.key.length === 1 && /^[a-zA-ZñÑáéíóúüÁÉÍÓÚÜ]$/.test(e.key)) {
            const nextBuffer = appendToSearchBuffer(e.key);
            const index = selectOptions.findIndex(opt =>
                opt.label.trim().toLowerCase().startsWith(nextBuffer)
            );

            if (index >= 0) {
                setHighlightedIndex(() => {
                    setSelectedOption({ ...selectOptions[index], selected: true });
                    onChange?.(selectOptions[index].value);
                    return index;
                });

            }
        }

        // Si se pulsa una tecla que no es Enter, Escape, ArrowDown o ArrowUp,
        //  no hacemos nada
        switch (e.key) {
            case 'ArrowDown':
                e.preventDefault(); // evita scroll en la página
                setHighlightedIndex((prev) => {
                    const nextIndex = Math.min(prev + 1, selectOptions.length - 1);
                    setSelectedOption({ ...selectOptions[nextIndex], selected: true });
                    onChange?.(selectOptions[nextIndex].value);
                    return nextIndex;
                });
                break;

            case 'ArrowUp':
                e.preventDefault();
                setHighlightedIndex((prev) => {
                    const nextIndex = Math.max(prev - 1, 0);
                    setSelectedOption({ ...selectOptions[nextIndex], selected: true });
                    onChange?.(selectOptions[nextIndex].value);
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

    return (
        <div
            class={`select-wrapper ${isOptionsVisible ? 'select-open' : ''}`}
            onClick={handleWrapperClick}
            tabIndex={0}
            onBlur={() => setIsOptionsVisible(false)}
            onKeyDown={handleKeyDown}
            ref={wrapperRef}
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
                // class={`select-options ${!isOptionsVisible ? 'select-options-hidden' : ''}`} >
                class={`select-options ${!isOptionsVisible ? 'select-options-hidden' : ''} ${openDirection === 'up' ? 'select-options-open-up' : ''}`}
            >
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