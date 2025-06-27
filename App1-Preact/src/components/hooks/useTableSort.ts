// Contiene hooks para manejar el ordenamiento de tablas

import { useState } from 'react';

export interface SortedControls {
    sortColumn: string | null;
    setSortColumn: React.Dispatch<React.SetStateAction<string | null>>;
    sortDirection: 'asc' | 'desc';
    setSortDirection: React.Dispatch<React.SetStateAction<'asc' | 'desc'>>;
    toggleSortColumn: (columnKey: string, columnSortable: boolean) => void;
}

export const useTableSort = (): SortedControls => {
    const [sortColumn, setSortColumn] = useState<string | null>(null)
    const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc')

    const toggleSortColumn = (columnKey: string, columnSortable: boolean) => {
        if (sortColumn !== columnKey && columnSortable) {
            setSortColumn(columnKey)
            setSortDirection('asc')
            // setFilterActiveColumn('')
        }

        if (sortColumn === columnKey && columnSortable) {
            setSortDirection(prev => prev === 'asc' ? 'desc' : 'asc')
        }
    }

    return {
        sortColumn,
        setSortColumn,
        sortDirection,
        setSortDirection,
        toggleSortColumn
    };
};
