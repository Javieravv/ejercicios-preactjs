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
}

const Tabs = (
    { tabs }: TabsProps
) => {
    const [tabActive, setTabActive] = useState(0)
    const [mountedTabs, setMountedTabs] = useState<Set<number>>(new Set([tabActive]))
    const [localTabs] = useState(tabs)

    useEffect(() => {
        setMountedTabs(prev => new Set(prev).add(tabActive))
    }, [tabActive])


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
                            console.log(`Tab ${tab.label} clicked`);
                            setTabActive(index)
                        }}
                        aria-selected={index === tabActive}
                        aria-controls={`panel-${tab.id}`}
                        tabIndex={index === tabActive ? 0 : -1}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>
            {/* Aqui van los contenidos del tab */}
            {/* <div class="tabs-content"
                role="tabpanel"
                id={`panel-${tabs[tabActive].id}`}
                aria-labelledby={`tab-${tabs[tabActive].id}`}
            >
                {localTabs[tabActive].content}
            </div> */}
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