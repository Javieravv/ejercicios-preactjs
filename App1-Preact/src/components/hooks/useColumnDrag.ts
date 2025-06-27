// Hook para manejar el arrastre de columnas en el componente tabla
// Contiene hooks para manejar el ordenamiento de tablas

import { useState } from 'react';
import { getColumnOrder } from '../utils/utils';
import type { Column } from '../../data/datatable';

export interface DraggedControls {
    columnsLocal: Column[];
    setColumnsLocal: React.Dispatch<React.SetStateAction<Column[]>>;
    draggedColIndex: number | null;
    setDraggedColIndex: React.Dispatch<React.SetStateAction<number | null>>;
    handleDragStart: (e: DragEvent, index: number) => void;
    handleDragOver: (e: DragEvent) => void;
    handleDrop: (e: DragEvent, index: number) => void;
    saveColumnOrder: (cols: Column[]) => void;
}

export const useColumnDrag = (
    columns: Column[],
    tableId: string
): DraggedControls => {
    const [columnsLocal, setColumnsLocal] = useState<Column[]>(() => getColumnOrder(columns, tableId)); // Estado local para las columnas
    const [draggedColIndex, setDraggedColIndex] = useState<number | null>(null);

    const handleDragStart = (e: DragEvent, index: number) => {
        setDraggedColIndex(index)
    }

    const handleDragOver = (e: DragEvent) => {
        e.preventDefault(); // Necesario para permitir el drop
    }

    const saveColumnOrder = (cols: Column[]) => {
        localStorage.setItem(`columnsOrder-${tableId}`, JSON.stringify(cols.map(col => col.key)));
    };


    const handleDrop = (e: DragEvent, index: number) => {
        e.preventDefault();
        const draggedIndex = draggedColIndex;
        if (draggedIndex === null || draggedIndex === index) return;

        // Reordenar las columnas
        const newColumns = [...columnsLocal];
        const [removed] = newColumns.splice(draggedIndex, 1);
        newColumns.splice(index, 0, removed);

        setColumnsLocal(newColumns);
        setDraggedColIndex(null); // Resetear el índice arrastrado
        saveColumnOrder(newColumns);
    }

    return {
        columnsLocal,
        setColumnsLocal,
        draggedColIndex,
        setDraggedColIndex,
        handleDragStart,
        handleDragOver,
        handleDrop,
        saveColumnOrder
    };
};
