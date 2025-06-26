// Utilidades

import type { Column } from "../../data/datatable";

// Ayuda con un arreglo para saber las páginas a mostrar
export const getVisiblePages = (
    current: number,
    total: number,
    maxButtons: number = 5): (number | string)[] => {
    const pages: (number | string)[] = [];

    if (total <= maxButtons) {
        for (let i = 1; i <= total; i++) pages.push(i);
        return pages;
    }

    const half = Math.floor(maxButtons / 2);
    let start = Math.max(current - half, 1);
    let end = Math.min(start + maxButtons - 1, total);

    if (end - start < maxButtons - 1) {
        start = Math.max(end - maxButtons + 1, 1);
    }

    if (start > 1) {
        pages.push(1);
        if (start > 2) pages.push('...');
    }

    for (let i = start; i <= end; i++) {
        pages.push(i);
    }

    if (end < total) {
        if (end < total - 1) pages.push('...');
        pages.push(total);
    }

    return pages;
}

// Esta funcion me devuelve un record de las columnas y su ancho
// Primero buscaremos anchos de columna guardados en localStorage
export const getColumnWidths = (columns: Column[], tableId: string): Record<string, string> => {
    const savedWidths = localStorage.getItem(`columnWidths-${tableId}`);
    if (savedWidths) {
        return JSON.parse(savedWidths);
    }

    const columnWidths: Record<string, string> = {};
    columns.forEach((col) => {
        columnWidths[col.key] = col.width || '150px'; // Valor por defecto de 150 si no se especifica
    })
    return columnWidths;
}

// Esta función devuelve el orden de las columnas que están almacenadas.
export const getColumnOrder = (columns: Column[], tableId: string): Column[] => {
    const savedOrder = localStorage.getItem(`columnsOrder-${tableId}`);
    // Si no hay orden de columnas guardadas, retornamos las columnas originales
    if (!savedOrder) {
        return columns;
    }
    // Si hay columnas guardadas, entonces devolvemos el arreglo conforme con el orden guardado.
    const orderedColumns: Column[] = JSON.parse(savedOrder)
        .map((key:string) => columns.find(col => col.key === key))
        .filter(Boolean)
    return orderedColumns;
}