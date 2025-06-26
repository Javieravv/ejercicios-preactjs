// Componente table personalizado
import { useMemo, useRef, useState } from 'preact/hooks';
import './css/table-css.css'
import type { Column } from '../data/datatable';
import { getColumnWidths, getVisiblePages } from './utils/utils';
import { ChevronUpIcon, FilterIcon } from '@heroicons/react/solid';

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
        const th = thRefs.current[index];
        if (!th) return;

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
        localStorage.setItem(`columnWidths-${tableId}`, JSON.stringify(columnsRef.current));
        // setIsResizing(null);
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', stopResizing);
    }

    return (
        <>
            {/* Mostramos información sobre campos filtrados */}
            {Object.entries(columnFilters).length !== 0 && (
                <div className="info-datafilter">
                    <span class='info-datafilter-descrip'>Filtrando por: </span>
                    {Object.entries(columnFilters).map(([key, value]) => (
                        <button
                            key={key}
                            class='info-datafilter-value'
                            onClick={() => {
                                setColumnFilters(prev => {
                                    const updated = { ...prev };
                                    delete updated[key];
                                    return updated;
                                });
                            }}>
                            {key} = "{value}"
                        </button>
                    ))}
                    <button
                        key={'limpiartodo'}
                        class='info-datafilter-value'
                        onClick={() => setColumnFilters({})}>
                        Limpiar Todo
                    </button>
                </div>

            )}
            {/* Inicio de la tabla */}
            <div class={`table-container`}>
                <table>
                    {/* Encabezado de la tabla */}
                    <thead>
                        <tr>
                            {columns.map((column, index) => {
                                if (!column.visible) return
                                return (
                                    <th
                                        key={column.key}
                                        style={{ width: `${columnsWitch[column.key]}` || '160px' }}
                                        ref={el => thRefs.current[index] = el}
                                    >
                                        <div class="th-head">
                                            {/* Aqui ira el boton para eliminar el filtro */}
                                            {columnFilters[column.key] && (
                                                <button
                                                    class="clear-button-filter"
                                                    onClick={() => {
                                                        setColumnFilters(prev => {
                                                            const updated = { ...prev };
                                                            delete updated[column.key];
                                                            return updated;
                                                        });
                                                    }}
                                                >X</button>
                                            )}
                                            <span
                                                onClick={() => {
                                                    if (sortColumn !== column.key && column.sortable) {
                                                        setSortColumn(column.key)
                                                        setSortDirection('asc')
                                                        setFilterActiveColumn('')
                                                    }

                                                    if (sortColumn === column.key && column.sortable) {
                                                        setSortDirection(prev => prev === 'asc' ? 'desc' : 'asc')
                                                    }
                                                }}
                                            >{column.label}</span>
                                            {/* Flecha hacia abajo del select */}
                                            {sortColumn === column.key && (
                                                <ChevronUpIcon
                                                    class={`order-arrow ${sortDirection === 'asc' ? 'arrow-sorted-up' : 'arrow-sorted-down'} `} />
                                            )}
                                            {column.filtered && (
                                                <FilterIcon
                                                    class='th-filter-icon'
                                                    onClick={() => {
                                                        setFilterActiveColumn(prev => prev === column.key ? null : column.key)
                                                    }}
                                                />
                                            )}
                                            {/* Aquí irá el div para el filtro */}
                                            {(filterActiveColumn === column.key) && (
                                                <div class='th-filter'>
                                                    <input
                                                        type="text"
                                                        placeholder={`Filtrar por ${column.label}`}
                                                        value={valueColumnFilter}
                                                        autofocus
                                                        onInput={(e) => {
                                                            const value = (e.target as HTMLInputElement).value
                                                            setValueColumnFilter(value)
                                                        }}
                                                    // onBlur={() => setFilterActiveColumn(null)}
                                                    />
                                                    <div class='th-filter-buttons'>
                                                        <button
                                                            class='btn-filter btn-filter-ok'
                                                            onClick={() => {
                                                                setColumnFilters(prev => ({ ...prev, [column.key]: valueColumnFilter }))
                                                                setValueColumnFilter('')
                                                                setFilterActiveColumn(null)
                                                                setCurrentPage(1)
                                                            }}
                                                        >
                                                            Filtrar</button>
                                                        <button
                                                            class='btn-filter btn-filter-cancel'
                                                            onClick={() => {
                                                                setValueColumnFilter('')
                                                                setFilterActiveColumn(null)
                                                            }}
                                                        >Cancelar</button>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                        {/* Botón para cambiar el ancho de la columna */
                                            column.resizable && (
                                                <div
                                                    class='th-resizer'
                                                    onMouseDown={startResizing(column.key, index)}
                                                ></div>
                                            )
                                        }
                                    </th>
                                )
                            })}
                        </tr>
                    </thead>
                    {/* Cuerpo de la tabla */}
                    <tbody>
                        {currentData.map((item, index) => (
                            <tr key={item.id}>
                                {columns.map((column) => {
                                    if (!column.visible) return null
                                    return (
                                        <td
                                            key={column.key}
                                            style={{ width: `${columnsWitch[column.key]}` || '160px' }}
                                        >
                                            <div
                                                style={{
                                                    padding: '0px 4px',
                                                    display: 'flex',
                                                    ...column.textAlignItem
                                                }}
                                            >
                                                {column.render ? column.render(item) : item[column.key]}
                                            </div>
                                        </td>
                                    )
                                })}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="tablepage-container">
                {/* Colocar boton para resetear todos los filtors */}
                {Object.entries(columnFilters).length !== 0 && (
                    <button
                        class='btn-navigation-table btn-reset-filtros'
                        onClick={() => setColumnFilters({})}>Resetear Filtros</button>
                )}
                <button
                    class='btn-navigation-table'
                    onClick={() => setCurrentPage((prev) => prev > 1 ? prev - 1 : prev)}
                >Ant.</button>
                {
                    btnsPagesVisibles.map(itembtn =>
                        <div
                            class={`btn-navigation-page ${itembtn === currentPage ? 'btn-activepage' : ''}`}
                            onClick={() => {
                                if (typeof itembtn !== 'number') return null
                                setCurrentPage(itembtn)
                            }}
                        >
                            {itembtn}
                        </div>)
                }
                <button
                    class='btn-navigation-table'
                    onClick={() => setCurrentPage((prev) => prev < totalPage ? prev + 1 : prev)}
                >Sig.</button>
            </div>
        </>
    )
}
