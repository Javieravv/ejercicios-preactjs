// Componente de tabs o pestañas personalizado en Preact

import type { JSX } from "preact/jsx-runtime";
import './css/tabs-css.css'
import { useEffect, useRef, useState } from "preact/hooks";
import { useTabsDrag } from "./hooks/useTabsDrag";

export interface Tab {
    id: string;
    label: string;
    content: string | JSX.Element;
    isActive?: boolean;
}

interface TabsProps {
    tabs: Tab[];
    closeTabs?: boolean;
    tabId: string;
}

const Tabs = (
    {
        tabs,
        closeTabs = false,
        tabId // Prop opcional para cerrar pestañas 
    }: TabsProps
) => {
    // Usamos un hook personalizado para manejar el arrastre de pestañas
    const { localTabs, setLocalTabs,
        handleDragEnd, handleDragStart, handleDrop,
        tabActive, setTabActive } = useTabsDrag(tabs, tabId);

    const [mountedTabs, setMountedTabs] = useState<Set<number>>(new Set([tabActive]))
    const tabsRef = useRef<(HTMLButtonElement | null)[]>([])
    const [tabActiveTemp, setTabActiveTemp] = useState(tabActive)

    useEffect(() => {
        setMountedTabs(prev => new Set(prev).add(tabActive))
    }, [tabActive])

    useEffect(() => {
        // Guardamos el tab activo en el localstorage cada vez que cambia
        localStorage.setItem('activeTab', tabActive.toString());
    }, [tabActive]);

    useEffect(() => {
        console.log("Tabs dentro del hook actualizados:", localTabs);
    }, [localTabs]);

    useEffect(() => {
        // Al cargar damos el foco al tab activo.
        const userNavigatedWithTab = document.activeElement === document.body;
        if (userNavigatedWithTab && tabsRef.current[tabActive]) {
            tabsRef.current[tabActive]!.focus();
        }
    }, []);


    // Eliminamos un tab de la lista de tabs si damos click en la X
    const handleCloseTab = (index: number) => {

        const updatedTabs = localTabs.filter((_, i) => i !== index);
        const newMountedTabs = new Set(updatedTabs.map((_, i) => i));
        setLocalTabs(updatedTabs);
        setMountedTabs(newMountedTabs);

        // Si el tab eliminado es el activo, actualizamos el estado del tab activo
        if (index === tabActive) {
            // Si eliminamos el tab activo, retrocede uno o ve al 0
            const newIndex = index > 0 ? index - 1 : 0;
            setTabActive(newIndex);
        } else if (index < tabActive) {
            // Si eliminamos uno anterior al actual, el índice del activo se reduce
            setTabActive(prev => prev - 1);
        }
    }

    // Funcion para capturar las teclas que se oprimen para implementar navegación por teclado
    const handleKeyDownTab = (e: KeyboardEvent) => {
        switch (e.key) {
            case 'ArrowRight':
                const newIndexTab = tabActiveTemp === localTabs.length - 1 ? 0 : tabActiveTemp + 1
                setTabActiveTemp(newIndexTab);
                if (tabsRef.current[tabActiveTemp]) {
                    tabsRef.current[tabActiveTemp]!.focus();
                }
                break;
            case 'ArrowLeft':
                const newIndexTab1 = tabActiveTemp === 0 ? localTabs.length - 1 : tabActiveTemp - 1
                setTabActiveTemp(newIndexTab1);
                if (tabsRef.current[tabActiveTemp]) {
                    tabsRef.current[tabActiveTemp]!.focus();
                }
                break;
            case 'Enter':
            case ' ': // Space
                setTabActive(tabActiveTemp)
                if (tabsRef.current[tabActiveTemp]) {
                    tabsRef.current[tabActiveTemp]!.focus();
                }
                break;
            case 'Home':
                setTabActiveTemp(0);
                if (tabsRef.current[tabActiveTemp]) {
                    tabsRef.current[tabActiveTemp]!.focus();
                }
                break;
            case 'End':
                setTabActiveTemp(localTabs.length - 1);
                if (tabsRef.current[tabActiveTemp]) {
                    tabsRef.current[tabActiveTemp]!.focus();
                }
                break;
            case 'Escape':
                setTabActiveTemp(tabActive)
                if (tabsRef.current[tabActiveTemp]) {
                    tabsRef.current[tabActiveTemp]!.focus();
                }
                break;
            default:
                break;
        }
    }

    return (
        <section
            class="tabs-container">
            {/* Aqui van los labels del tab */}
            <div
                class="tabs-label"
                role={'tablist'}>
                {localTabs.map((tab, index) => (
                    <button
                        // class={`tab-label ${tab.isActive ? 'active' : ''}`}
                        class={`tab-label 
                            ${(index === tabActive || index === tabActiveTemp) ? 'active' : ''} `}
                        tabIndex={index === tabActive ? 0 : -1}
                        id={`tab-${tab.id}`}
                        key={tab.id}
                        role={'tab'}
                        onClick={() => {
                            // Aquí puedes manejar el cambio de pestaña
                            setTabActive(index)
                            setTabActiveTemp(index)
                        }}
                        // onFocus={() => {
                        //     tabsRef
                        // }}
                        onKeyDown={handleKeyDownTab}
                        ref={(el) => tabsRef.current[index] = el}
                        aria-selected={index === tabActive}
                        aria-controls={`panel-${tab.id}`}
                        // tabIndex={index === tabActive ? 0 : -1}
                        draggable={true}
                        onDragStart={(e) => handleDragStart(e as DragEvent, index)}
                        onDragOver={(e) => handleDragEnd(e)}
                        onDrop={(e) => handleDrop(e as DragEvent, index)}
                    >
                        {tab.label}
                        {closeTabs && (
                            <span onClick={(event) => {
                                event.stopPropagation();
                                handleCloseTab(index);
                            }}>X</span>)}
                    </button>
                ))}
            </div>
            {/* Aqui van los contenidos del tab */}
            <div class="tabs-content">
                {localTabs.map((tab, index) => {
                    if (!mountedTabs.has(index)) return null;
                    return (
                        <div
                            key={tab.id}
                            class={`tab-content ${index === tabActive ? 'active' : 'inactive'}`}
                            role="tabpanel"
                            id={`panel-${tab.id}`}
                            aria-labelledby={`tab-${tab.id}`}
                        >
                            {tab.content}
                        </div>
                    );
                })}
            </div>
            {localTabs.length !== 0 && (
                <strong>Tab Activo: {tabActive} - {localTabs[tabActive].label}</strong>
            )}
        </section>
    )
}

export default Tabs