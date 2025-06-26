import type { Column } from "../data/datatable";

// Componente para mostrar el Body o cuperpo de la tabla.
interface TableBodyProps {
    currentData: any[];
    columnsLocal: Column[];
    columnsWitch: Record<string, string>;
}

const TableBody = ({ 
    currentData, 
    columnsLocal, 
    columnsWitch 
}: TableBodyProps) => {
    return (
        <>
            <tbody>
                {currentData.map((item) => (
                    <tr key={item.id}>
                        {columnsLocal.map((column) => {
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
        </>
    )
}

export default TableBody