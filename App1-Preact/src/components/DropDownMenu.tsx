import '@/components/css/dropdown-menu.css'
import { useClickOutside } from '@/components/hooks/useClickOutside';
import type { JSX, KeyboardEvent } from 'preact/compat';
import { useRef, useState } from 'preact/hooks'

export interface OptionMenu {
    id: string;
    label: string;
    url: string;
    render?: (opt: any) => JSX.Element;
}

interface DropDownProps {
    labelMenu: string;
    optionsMenu?: OptionMenu[]

}

// Creamos el icono de la flecha
interface DownArrowProps {
    classArrow?: string;
    sizeArrow?: number;
}

const DownArrow = ({
    classArrow = '',
    sizeArrow = 24
}: DownArrowProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg"
            width={`${sizeArrow}px`}
            height={`${sizeArrow}px`}
            viewBox={`0 0 ${sizeArrow} ${sizeArrow}`}
            fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
            class={`${classArrow}`}>
            <path d="m6 9 6 6 6-6" />
        </svg>
    )
}


// Aqui esta el contenido del componente dropdown men
export const Dropdownmenu = ({
    labelMenu,
    optionsMenu = []
}: DropDownProps) => {
    const [isOpen, setIsOpen] = useState(false)
    const menuRef = useRef<HTMLDivElement>(null)
    const optionsRef = useRef<HTMLUListElement>(null)
    const optionsMenuRef = useRef<(HTMLLIElement | null)[]>([])
    const [optionActive, setOptionActive] = useState(0)

    // Al detectar click fuera, cerramos el menú
    useClickOutside(menuRef, () => {
        setIsOpen(false)
    })

    // Manejamos el uso de teclado en el componente para el contenedor principal
    const handleKeyDownDropDown = (e: JSX.TargetedKeyboardEvent<HTMLDivElement>) => {
        console.log(e.key)
        switch (e.key) {
            case 'Enter':
                const newIsOpen = !isOpen
                setIsOpen(newIsOpen)
                if (newIsOpen && optionsMenuRef.current[optionActive]) {
                    console.log('Entramos por aqui...')
                    console.log(optionsMenuRef.current[optionActive])
                    optionsRef.current!.focus()
                    optionsMenuRef.current[optionActive].focus()
                }
                break;
            case 'Tab':
                setIsOpen(false)
                break;
            default:
                break;
        }
    }

    // Manejamos el uso de teclado en los li del componente
    const handleKeyDownOptionDropDown = (e: JSX.TargetedKeyboardEvent<HTMLLIElement>) => {
        console.log(e.key)
        switch (e.key) {
            case 'Tab':
                console.log('Tab en elemento click')
                setIsOpen(false)
                break;
            case 'ArrowUp':
                const newOptionIndex1 = optionActive === 0 ? optionsMenu.length - 1 : optionActive - 1
                setOptionActive(newOptionIndex1)
                optionsMenuRef.current[newOptionIndex1]!.focus()
                break;
            case 'ArrowDown':
                const newOptionIndex = optionActive === optionsMenu.length - 1 ? 0 : optionActive + 1
                setOptionActive(newOptionIndex)
                optionsMenuRef.current[newOptionIndex]!.focus()
                break;
            default:
                break;
        }
    }

    return (
        <div
            class="dropdown-container"
            ref={menuRef}
        >
            <div
                class="dropdown-trigger"
                onKeyDown={handleKeyDownDropDown}
                tabIndex={0}
            >
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    aria-haspopup="menu"
                    aria-expanded={isOpen}
                    aria-controls="dropdown-list"
                    tabIndex={-1}
                // tabindex={0}
                >
                    {labelMenu}
                    {/* Mostramos o no el arrow del dropdown */}
                    {optionsMenu.length > 0 &&
                        <span>
                            <DownArrow
                                sizeArrow={24}
                                classArrow={`${isOpen && 'arrowdown-rotate'} arrowdown`} />
                        </span>
                    }
                </button>
            </div>
            {
                optionsMenu.length > 0 && (
                    <ul
                        class={`dropdown-optionslist ${isOpen && 'activate'}`}
                        role={`menu`}
                        tabIndex={0}
                        ref={optionsRef}
                    >
                        {
                            optionsMenu.map((option, index) => {
                                return <li
                                    class="dropdown-option"
                                    key={option.id}
                                    ref={(el) => optionsMenuRef.current[index] = el}
                                    tabIndex={index === optionActive ? 0 : -1}
                                    onKeyDown={handleKeyDownOptionDropDown}
                                >
                                    {option.label}
                                </li>
                            })
                        }
                    </ul>
                )
            }
        </div>
    )
}

// export default Dropdownmenu