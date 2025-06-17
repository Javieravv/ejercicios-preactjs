// Componente table personalizado
import './css/table-css.css'
import type { Column } from '../data/datatable';

interface TableProps {
    data: any[];
    columns: Column[];
}

export const Table = ({
    data,
    columns
}: TableProps) => {
    return (
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
                    {data.map((item, index) => (
                        <tr key={item.id}>
                            {columns.map((column) => {
                                console.log(column.visible, index)
                                if (!column.visible) return null
                                return (
                                    <td key={column.key} style={{ width: column.width || 'auto' }}>
                                        { column.render ? column.render(item) : item[column.key]}
                                    </td>
                                )
                            })}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
