// Componente table personalizado
import { useMemo, useRef, useState } from 'preact/hooks';
import './css/table-css.css'
import type { Column } from '../data/datatable';
import { getColumnOrder, getColumnWidths, getVisiblePages } from './utils/utils';
import { ChevronUpIcon, FilterIcon } from '@heroicons/react/solid';
import TableFilteredFields from './TableFilteredFields';
import TableHead from './TableHead';
import TableButtons from './TableButtons';
import TableBody from './TableBody';

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
    const [currentPage, setCurrentPage] = useState(1)
    const [sortColumn, setSortColumn] = useState<string | null>(null)
    const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc')
    const [filterActiveColumn, setFilterActiveColumn] = useState<string | null>(null)
    const [columnFilters, setColumnFilters] = useState<Record<string, string>>({})
    const [valueColumnFilter, setValueColumnFilter] = useState<string>('')
    const [columnsWitch, setColumnsWitch] = useState<Record<string, string>>(() => getColumnWidths(columns, tableId)) // para manejar el ancho de las columnas. 
    const [columnsLocal, setColumnsLocal] = useState<Column[]>(() => getColumnOrder(columns, tableId)); // Estado local para las columnas
    const [draggedColIndex, setDraggedColIndex] = useState<number | null>(null);
    const [isResizing, setIsResizing] = useState(false)
    const thRefs = useRef<(HTMLTableCellElement | null)[]>([]) // Referencia para los th de la tabla
    const resizeRef = useRef<{
        columnKey: string;
        startX: number;
        startWidth: number;
    } | null>(null);
    const columnsRef = useRef<Record<string, string>>({});


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
    const currentData = useMemo(() => {
        const startIndex = (currentPage - 1) * pageSize
        const endIndex = startIndex + pageSize
        return sortedData.slice(startIndex, endIndex)
    }, [sortedData, currentPage, pageSize])

    // Calculamos el total de páginas teniendo ya la data filtrada
    const totalPage = Math.ceil(filteredData.length / pageSize)
    const btnsPagesVisibles = getVisiblePages(currentPage, totalPage, 4)

    // Codigo para el redimensionamiento de columnas
    const startResizing = (key: string, index: number) => (e: MouseEvent) => {
        console.log('Iniciando redimensionamiento de columna:', key, index);
        setIsResizing(true);
        const th = thRefs.current[index];
        if (!th) return;
        document.body.classList.add('resizing');

        resizeRef.current = {
            columnKey: key,
            startX: e.clientX,
            startWidth: th.offsetWidth
        }

        // e.preventDefault();
        // setIsResizing(index)
        document.addEventListener('mousemove', handleMouseMove)
        document.addEventListener('mouseup', stopResizing)
    }

    const handleMouseMove = (e: MouseEvent) => {
        const ref = resizeRef.current;
        if (!ref) return;

        const deltaX = e.clientX - ref.startX;
        const newWidth = ref.startWidth + deltaX;

        setColumnsWitch(prev => {
            const updated = {
                ...prev,
                // [ref.columnKey]: Math.max(newWidth, 80).toString().trim() + 'px' // Aseguramos que el ancho mínimo sea de 80px
                [ref.columnKey]: `${newWidth}px` // Nuevo ancho
            }
            columnsRef.current = updated;
            return updated;
        });

    }

    const stopResizing = () => {
        // Guardar
        setIsResizing(false);
        localStorage.setItem(`columnWidths-${tableId}`, JSON.stringify(columnsRef.current));
        document.body.classList.remove('resizing');
        // setIsResizing(null);
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', stopResizing);
    }

    // Código para hacer drag and drop en las columnas
    const handleDragStart = (e: DragEvent, index: number) => {
        console.log('Iniciamos Arrastrando columna:', index);
        setDraggedColIndex(index)
    }

    const handleDragOver = (e: DragEvent) => {
        e.preventDefault(); // Necesario para permitir el drop
        console.log('Arrastrando sobre una columna');
    }

    const handleDrop = (e: DragEvent, index: number) => {
        e.preventDefault();
        const draggedIndex = draggedColIndex;
        console.log('Columna arrastrada desde el índice:', draggedIndex, 'a la posición:', index);
        if (draggedIndex === null || draggedIndex === index) return;

        // Reordenar las columnas
        const newColumns = [...columnsLocal];
        const [removed] = newColumns.splice(draggedIndex, 1);
        newColumns.splice(index, 0, removed);

        setColumnsLocal(newColumns);
        setDraggedColIndex(null); // Resetear el índice arrastrado
        localStorage.setItem(`columnsOrder-${tableId}`, JSON.stringify(newColumns.map(col => col.key))); // Guardar el nuevo orden de las columnas
    }

    console.log('Columnas reordenadas traidas: ', getColumnOrder(columns, tableId));

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
                        columnFilters={columnFilters}
                        setColumnFilters={setColumnFilters}
                        sortColumn={sortColumn}
                        setSortColumn={setSortColumn}
                        sortDirection={sortDirection}
                        setSortDirection={setSortDirection}
                        filterActiveColumn={filterActiveColumn}
                        setFilterActiveColumn={setFilterActiveColumn}
                        valueColumnFilter={valueColumnFilter}
                        setValueColumnFilter={setValueColumnFilter}
                        columnsWitch={columnsWitch}
                        thRefs={thRefs}
                        setCurrentPage={setCurrentPage}
                        startResizing={startResizing}
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
                setCurrentPage={setCurrentPage}
                btnsPagesVisibles={btnsPagesVisibles}
                currentPage={currentPage}
                totalPage={totalPage}
            />
        </>
    )
}
