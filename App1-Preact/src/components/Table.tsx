// Componente table personalizado
import './css/table-css.css'
import type { Column } from '../data/datatable';
import { useMemo, useState } from 'preact/hooks';
import { getVisiblePages } from './utils/utils';
import { ChevronUpIcon, FilterIcon } from '@heroicons/react/solid';

interface TableProps {
    data: any[];
    columns: Column[];
    pageSize?: number;
}

export const Table = ({
    data,
    columns,
    pageSize = 9
}: TableProps) => {
    const [currentPage, setCurrentPage] = useState(1)
    const [sortColumn, setSortColumn] = useState<string | null>(null)
    const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc')
    const [filterActiveColumn, setFilterActiveColumn] = useState<string | null>(null)
    const [columnFilters, setColumnFilters] = useState<Record<string, string>>({})
    const [valueColumnFilter, setValueColumnFilter] = useState<string>('')

    const totalPage = Math.ceil(data.length / pageSize)
    const btnsPagesVisibles = getVisiblePages(currentPage, totalPage, 4)

    // Filtramos datos.
    const filteredData = useMemo(() => {
        return data.filter((item) => {
            return Object.entries(columnFilters).every(([key, value]) => {
                const raw = item[key]
                // console.log('key:', key, '| value:', value, '| item[key]:', raw);
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
        console.log('Calculamos sorted Data!!!')
        // if (!sortColumn) return data
        if (!sortColumn) return filteredData
        // if (Object.entries(columnFilters).length === 0) { console.log('No hay filtros ...') }
        // return [...data].sort((a, b) => {
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
        console.log('calculamos curren Darta ')
        const startIndex = (currentPage - 1) * pageSize
        const endIndex = startIndex + pageSize
        return sortedData.slice(startIndex, endIndex)
    }, [sortedData, currentPage, pageSize])

    console.log('Columnas a filtrar: ', columnFilters)
    console.log('DATOS FILTRADOS....',filteredData)
    console.log('DATOS ORDNADOS....',sortedData)

    // console.log('Valor a filtrar: ', valueColumnFilter)

    return (
        <>
            <div class={`table-container`}>
                <table>
                    {/* Encabezado de la tabla */}
                    <thead>
                        <tr>
                            {columns.map((column) => {
                                if (!column.visible) return
                                return (
                                    <th
                                        key={column.key}
                                        style={{ width: column.width || 'auto' }}
                                    >
                                        <div class="th-head">
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
                                                <ChevronUpIcon class={`order-arrow ${sortDirection === 'asc' ? 'arrow-sorted-up' : 'arrow-sorted-down'} `} />
                                            )}
                                            {column.filtered && (
                                                <FilterIcon
                                                    style={{ width: '16px', height: '16px' }}
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
                                            style={{ width: column.width || 'auto' }}
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
