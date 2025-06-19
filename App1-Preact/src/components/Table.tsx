// Componente table personalizado
import './css/table-css.css'
import type { Column } from '../data/datatable';
import { useMemo, useState } from 'preact/hooks';
import { getVisiblePages } from './utils/utils';
import { ChevronUpIcon } from '@heroicons/react/solid';

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

    const totalPage = Math.ceil(data.length / pageSize)
    const btnsPagesVisibles = getVisiblePages(currentPage, totalPage, 4)

    // ordenamos los datos, si hay columna de ordenación.
    const sortedData = useMemo(() => {
        if (!sortColumn) return data
        return [...data].sort((a, b) => {
            const aVal = a[sortColumn]
            const bVal = b[sortColumn]
            if (aVal < bVal) return sortDirection === 'asc' ? -1 : 1
            if (aVal > bVal) return sortDirection === 'asc' ? 1 : -1
            return 0
        })
    }, [data, sortColumn, sortDirection])

    // Paginamos
    const currentData = useMemo(() => {
        const startIndex = (currentPage - 1) * pageSize
        const endIndex = startIndex + pageSize
        return sortedData.slice(startIndex, endIndex)
    }, [sortedData, currentPage, pageSize])

    // const currentData = data.slice(startIndex, endIndex)

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
                                        onClick={() => {
                                            if (sortColumn !== column.key && column.sortable) {
                                                setSortColumn(column.key)
                                                setSortDirection('asc')
                                            }

                                            if (sortColumn === column.key && column.sortable) {
                                                setSortDirection(prev => prev === 'asc' ? 'desc' : 'asc')
                                            }
                                        }}
                                    >
                                        <div class="th-head">
                                            <span>{column.label}</span>
                                            {/* Flecha hacia abajo del select */}
                                            {sortColumn === column.key && (
                                                <ChevronUpIcon class={`order-arrow ${sortDirection === 'asc' ? 'arrow-sorted-up' : 'arrow-sorted-down'} `} />
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
