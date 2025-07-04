import '@/components/css/dropdown-menu.css'
import { useEffect, useRef, useState } from 'preact/hooks'

export interface OptionMenu {
    id: string;
    label: string;
    url: string;
}

interface DropDownProps {
    labelMenu: string;
    optionsMenu?: OptionMenu[]

}

// Creamos aqui el icono de la flecha
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


// Aqui esta el contenido del dropdown men
export const Dropdownmenu = ({
    labelMenu,
    optionsMenu = []
}: DropDownProps) => {
    const [isOpen, setIsOpen] = useState(false)
    const menuRef = useRef<HTMLDivElement>(null)

    // Efecto para controlar cuando se de click fuera del menu
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
                setIsOpen(false)
            }
        }
        document.addEventListener('click', handleClickOutside)
        return () => document.removeEventListener('click', handleClickOutside)
    }, [])

    return (
        <div class="dropdown-container" ref={menuRef}>
            <div class="dropdown-trigger">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {labelMenu}
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
                    >
                        {
                            optionsMenu.map((option) => {
                                return <li class="dropdown-option" key={option.id}>{option.label}</li>
                            })
                        }
                    </ul>
                )
            }
        </div>
    )
}

// export default Dropdownmenu