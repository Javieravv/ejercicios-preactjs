import '@/components/css/dropdown-menu.css'
import { useClickOutside } from '@/components/hooks/useClickOutside';
import type { JSX, KeyboardEvent } from 'preact/compat';
import { useEffect, useRef, useState } from 'preact/hooks'

export interface OptionMenu {
    id: string;
    label: string;
    url: string;
    render?: JSX.Element;
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
    const [optionActive, setOptionActive] = useState(0)
    const menuRef = useRef<HTMLDivElement>(null)
    const optionsRef = useRef<HTMLUListElement>(null)
    const optionsMenuRef = useRef<(HTMLLIElement | null)[]>([])
    const triggerRef = useRef<HTMLButtonElement>(null)

    useEffect(() => {
        if (!isOpen) triggerRef.current?.focus()
    }, [isOpen])


    // Al detectar click fuera, cerramos el menú
    useClickOutside(menuRef, () => {
        setIsOpen(false)
    })

    // Al detectar cuando la ventana pierde el foco
    useEffect(() => {
        const handleVisibilityChange = () => {
            if (!document.hidden) {
                console.log('LA VENTANA PERDIO EL FOCO')
                setIsOpen(false)
            }
        }
        document.addEventListener('visibilitychange', handleVisibilityChange)
        return () => {
            document.removeEventListener('visibilitychange', handleVisibilityChange)
        }
    }, [])


    // dentro de tu componente Dropdownmenu

    // 1. Cada vez que abrimos el menú, ponemos el foco en la opción activa (por defecto, la 0)
    useEffect(() => {
        if (isOpen && optionsMenuRef.current[optionActive]) {
            optionsMenuRef.current[optionActive]!.focus()
        }
    }, [isOpen, optionActive])


    // Manejamos el uso de teclado en el componente para el contenedor principal
    const handleKeyDownDropDown = (e: JSX.TargetedKeyboardEvent<HTMLDivElement>) => {
        switch (e.key) {
            case 'Enter':
                e.preventDefault()
                setIsOpen(!isOpen)
                setOptionActive(0)     // arrancamos siempre en la primera opción
                break;
            case 'Escape':
            case 'Tab':
                setIsOpen(false)
                break;
            default:
                break;
        }
    }

    // Manejamos el uso de teclado en los li del componente
    const handleKeyDownOptionDropDown = (e: JSX.TargetedKeyboardEvent<HTMLLIElement>) => {
        switch (e.key) {
            case 'Tab':
                setIsOpen(false)
                break;
            case 'ArrowUp':
                e.preventDefault()
                const newOptionIndex1 = optionActive === 0 ? optionsMenu.length - 1 : optionActive - 1
                setOptionActive(newOptionIndex1)
                optionsMenuRef.current[newOptionIndex1]!.focus()
                break;
            case 'ArrowDown':
                e.preventDefault()
                const newOptionIndex = optionActive === optionsMenu.length - 1 ? 0 : optionActive + 1
                setOptionActive(newOptionIndex)
                optionsMenuRef.current[newOptionIndex]!.focus()
                break;
            case 'Enter':
                console.log('Dimos Enter en una opcion')
                // e.preventDefault()
                optionsMenuRef.current[optionActive]!.click()
                setIsOpen(false)
                break
            case 'Escape':
                setIsOpen(false)
                break
            default:
                break;
        }
    }

    console.log('EL VALOR DE ISOPEN ES ', isOpen)

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
                    onClick={() => {
                        setOptionActive(-1)
                        setIsOpen(!isOpen)
                    }}
                    aria-haspopup="menu"
                    aria-expanded={isOpen}
                    aria-controls="dropdown-list"
                    tabIndex={-1}
                    ref={triggerRef}
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
                                    <>{option.render ? option.render : option.label}</>
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