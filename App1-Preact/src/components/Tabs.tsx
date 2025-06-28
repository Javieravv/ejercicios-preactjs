// Componente de tabs o pestañas personalizado en Preact

import type { JSX } from "preact/jsx-runtime";
import './css/tabs-css.css'
import { useEffect, useState } from "preact/hooks";

interface Tab {
    id: string;
    label: string;
    content: string | JSX.Element;
    isActive?: boolean;
}

interface TabsProps {
    tabs: Tab[];
    closeTabs?: boolean;
}

const Tabs = (
    { tabs,
        closeTabs = false // Prop opcional para cerrar pestañas 
    }: TabsProps
) => {
    const [tabActive, setTabActive] = useState(() => {
        // Recuperamos el tab activo desde el localstorage o usamos el primero por defecto
        const savedTab = localStorage.getItem('activeTab');
        return savedTab ? parseInt(savedTab, 10) : 0;
    })
    const [mountedTabs, setMountedTabs] = useState<Set<number>>(new Set([tabActive]))
    const [localTabs, setLocalTabs] = useState(tabs)

    useEffect(() => {
        setMountedTabs(prev => new Set(prev).add(tabActive))
    }, [tabActive])

    useEffect(() => {
        // Guardamos el tab activo en el localstorage cada vez que cambia
        localStorage.setItem('activeTab', tabActive.toString());
    }, [tabActive]);

    // Eliminamos un tab de la lista de tabs si damos click en la X
    const handleCloseTab = (index: number) => {
        setLocalTabs(prevTabs => prevTabs.filter((_, i) => i !== index));
        setMountedTabs(new Set(localTabs.map((_, i) => i)));
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

    return (
        <section
            class="tabs-container">
            {/* Aqui van los labels del tab */}
            <div class="tabs-label" role={'tablist'}>
                {localTabs.map((tab, index) => (
                    <button
                        // class={`tab-label ${tab.isActive ? 'active' : ''}`}
                        class={`tab-label ${index === tabActive ? 'active' : ''}`}
                        id={`tab-${tab.id}`}
                        key={tab.id}
                        role={'tab'}
                        onClick={() => {
                            // Aquí puedes manejar el cambio de pestaña
                            setTabActive(index)
                        }}
                        aria-selected={index === tabActive}
                        aria-controls={`panel-${tab.id}`}
                        tabIndex={index === tabActive ? 0 : -1}
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
                            id={`panel-${tabs[tabActive].id}`}
                            aria-labelledby={`tab-${tabs[tabActive].id}`}
                        >
                            {tab.content}
                        </div>
                    );
                })}
            </div>
            <strong>Tab Activo: {tabActive} - {localTabs[tabActive].label}</strong>
        </section>
    )
}

export default Tabs