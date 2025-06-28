// Hook utilizado para manejar el arrastre de pestañas en un componente de pestañas

import { useState } from "preact/hooks";
import type { Tab } from "../Tabs";

export interface TabDraggedControls {
    localTabs: Tab[];
    setLocalTabs: React.Dispatch<React.SetStateAction<Tab[]>>;
    handleDragStart: (e: DragEvent, tabIndex: number) => void;
    handleDragEnd: (e: DragEvent) => void;
    handleDrop: (e: DragEvent, tabIndex: number) => void;
    draggedTabIndex: number | null;
    setDraggedTabIndex: React.Dispatch<React.SetStateAction<number | null>>;
    saveTabOrder: (tabs: Tab[]) => void;
    tabActive: number;
    setTabActive: React.Dispatch<React.SetStateAction<number>>;
}

export const useTabsDrag = (
    tabs: Tab[],
    tabId: string
): TabDraggedControls => {
    const [localTabs, setLocalTabs] = useState<Tab[]>(() => {
        const savedOrder = localStorage.getItem(`tabsOrder-${tabId}`);
        // Si no hay orden de tabs guardadas, retornamos los tabs originales
        if (!savedOrder) {
            return tabs;
        }
        // Si hay columnas guardadas, entonces devolvemos el arreglo conforme con el orden guardado.
        const orderedTabs: Tab[] = JSON.parse(savedOrder)
            .map((key: string) => tabs.find(tab => tab.id === key))
            .filter(Boolean)
        console.log('ESTE ES EL ORDEN DE TABS', orderedTabs)
        return orderedTabs;
    });
    const [tabActive, setTabActive] = useState(() => {
        // Recuperamos el tab activo desde el localstorage o usamos el primero por defecto
        const savedTab = localStorage.getItem('activeTab');
        return savedTab ? parseInt(savedTab, 10) : 0;
    })

    const [draggedTabIndex, setDraggedTabIndex] = useState<number | null>(null);

    const handleDragStart = (e: DragEvent, index: number) => {
        setDraggedTabIndex(index)
    }

    const handleDragEnd = (e: DragEvent) => {
        e.preventDefault(); // Necesario para permitir el drop
    }

    const saveTabOrder = (tabs: Tab[]) => {
        localStorage.setItem(`tabsOrder-${tabId}`, JSON.stringify(tabs.map(tab => tab.id)));
    };

    const handleDrop = (e: DragEvent, index: number) => {
        e.preventDefault();
        const draggedIndex = draggedTabIndex;
        if (draggedIndex === null || draggedIndex === index) return;

        // Reordenar las columnas
        const newTabs = [...localTabs];
        const [removed] = newTabs.splice(draggedIndex, 1);
        newTabs.splice(index, 0, removed);

        setLocalTabs(newTabs);
        setDraggedTabIndex(null); // Resetear el índice arrastrado
        saveTabOrder(newTabs);
    }

    return {
        localTabs,
        setLocalTabs,
        handleDragStart,
        handleDragEnd,
        handleDrop,
        draggedTabIndex,
        setDraggedTabIndex,
        saveTabOrder,
        tabActive,
        setTabActive
    }
}