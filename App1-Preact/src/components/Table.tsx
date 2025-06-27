// Componente table personalizado
import { useMemo, useRef, useState } from 'preact/hooks';
import './css/table-css.css'
import type { Column } from '../data/datatable';
import { getColumnOrder, getColumnWidths, getVisiblePages } from './utils/utils';
import TableFilteredFields from './TableFilteredFields';
import TableHead from './TableHead';
import TableButtons from './TableButtons';
import TableBody from './TableBody';
import { useTableFilters } from './hooks/useTableFilters'
import { useTableSort } from './hooks/useTableSort';
import { usePagination } from './hooks/usePagination';
import { useColumnResize } from './hooks/useColumnResize';

interface TableProps {
    data: any[];
    columns: Column[];
    pageSize?: number;
    tableId: string; // Agregamos un id para la tabla
}

export const Table = ({
    data,
    columns,
    pageSize = 10,
    tableId
}: TableProps) => {
    const [columnsLocal, setColumnsLocal] = useState<Column[]>(() => getColumnOrder(columns, tableId)); // Estado local para las columnas
    const [draggedColIndex, setDraggedColIndex] = useState<number | null>(null);
    const thRefs = useRef<(HTMLTableCellElement | null)[]>([]) // Referencia para los th de la tabla
    const columnsRef = useRef<Record<string, string>>({});
    const filterControls = useTableFilters();
    const sortedControls = useTableSort();
    const { columnFilters, setColumnFilters } = filterControls
    const { sortColumn, sortDirection } = sortedControls

    // Filtramos datos.
    const filteredData = useMemo(() => {
        return data.filter((item) => {
            return Object.entries(columnFilters).every(([key, value]) => {
                const raw = item[key]
                if (!value) return true;
                const cellValue = raw !== undefined && raw !== null
                    ? raw.toString().toLowerCase()
                    : '';
                return cellValue.includes(value.toLowerCase());
            });
        });
    }, [data, columnFilters]);

    // ordenamos los datos, si hay columna de ordenación.
    const sortedData = useMemo(() => {
        if (!sortColumn) return filteredData
        return [...filteredData].sort((a, b) => {
            const aVal = a[sortColumn]
            const bVal = b[sortColumn]
            if (aVal < bVal) return sortDirection === 'asc' ? -1 : 1
            if (aVal > bVal) return sortDirection === 'asc' ? 1 : -1
            return 0
        })
    }, [filteredData, sortColumn, sortDirection])

    // Paginamos
    // Llamamos aquí el hook usePagination porque este hace uso de sortedData. 
    // No se puede llamar antes porque generará un error.
    const { currentPage, setCurrentPage, totalPage, btnsPagesVisibles, currentData} = usePagination(sortedData, pageSize)

    // Codigo para el redimensionamiento de columnas
    // Colocamos aquí el llamado al hook de redimensionamiento de columnas
    // para que se ejecute al inicio del componente.
    const { columnsWitch, isResizing, startResizing } = useColumnResize(columns, tableId, columnsRef, thRefs)

    // Código para hacer drag and drop en las columnas
    const handleDragStart = (e: DragEvent, index: number) => {
        setDraggedColIndex(index)
    }

    const handleDragOver = (e: DragEvent) => {
        e.preventDefault(); // Necesario para permitir el drop
    }

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
        localStorage.setItem(`columnsOrder-${tableId}`, JSON.stringify(newColumns.map(col => col.key))); // Guardar el nuevo orden de las columnas
    }

    return (
        <>
            {/* Mostramos información sobre campos filtrados */}
            <TableFilteredFields
                columnFilters={columnFilters}
                setColumnFilters={setColumnFilters}
            />
            {/* Inicio de la tabla */}
            <div class={`table-container`}>
                <table>
                    {/* Encabezado de la tabla */}
                    <TableHead
                        columnsLocal={columnsLocal}
                        isResizing={isResizing}
                        handleDragStart={handleDragStart}
                        handleDragOver={handleDragOver}
                        handleDrop={handleDrop}
                        columnsWitch={columnsWitch}
                        thRefs={thRefs}
                        setCurrentPage={setCurrentPage}
                        startResizing={startResizing}
                        filterControls={filterControls}
                        sortedControls={sortedControls}
                    />
                    {/* Cuerpo de la tabla */}
                    <TableBody
                        currentData={currentData}
                        columnsLocal={columnsLocal}
                        columnsWitch={columnsWitch}
                    />
                </table>
            </div>
            {/* Mostramos los botones para paginado y reset filtros */}
            <TableButtons
                columnFilters={columnFilters}
                setColumnFilters={setColumnFilters}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                btnsPagesVisibles={btnsPagesVisibles}
                totalPage={totalPage}
            />
        </>
    )
}
