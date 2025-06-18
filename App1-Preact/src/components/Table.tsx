// Componente table personalizado
import './css/table-css.css'
import type { Column } from '../data/datatable';
import { useState } from 'preact/hooks';
import { getVisiblePages } from './utils/utils';

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
    const totalPage = Math.ceil(data.length / pageSize)
    const startIndex = (currentPage - 1) * pageSize
    const endIndex = startIndex + pageSize
    const currentData = data.slice(startIndex, endIndex)
    const btnsPagesVisibles = getVisiblePages(currentPage, totalPage, 5)
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
                                    <th key={column.key} style={{ width: column.width || 'auto' }}>
                                        {column.label}
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
                                        <td key={column.key} style={{ width: column.width || 'auto' }}>
                                            {column.render ? column.render(item) : item[column.key]}
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
                        class={`btn-navigation-page ${ itembtn === currentPage ? 'btn-activepage' : '' }`}
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
