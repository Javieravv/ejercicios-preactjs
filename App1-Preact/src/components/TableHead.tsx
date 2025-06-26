// Componente que muestra el encabezado de la tabla
import type { Column } from "../data/datatable";
import { ChevronUpIcon, FilterIcon } from '@heroicons/react/solid';

interface TableHeadProps {
    columnFilters: Record<string, string>;
    columnsLocal: Column[];
    columnsWitch: Record<string, string>;
    filterActiveColumn: string | null;
    handleDragOver: (e: DragEvent) => void;
    handleDragStart: (e: DragEvent, index: number) => void;
    handleDrop: (e: DragEvent, index: number) => void;
    isResizing: Boolean;
    setColumnFilters: React.Dispatch<React.SetStateAction<Record<string, string>>>;
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
    setFilterActiveColumn: React.Dispatch<React.SetStateAction<string | null>>;
    setSortColumn: React.Dispatch<React.SetStateAction<string | null>>;
    setSortDirection: React.Dispatch<React.SetStateAction<'asc' | 'desc'>>;
    setValueColumnFilter: React.Dispatch<React.SetStateAction<string>>;
    sortColumn: string | null;
    sortDirection: 'asc' | 'desc';
    startResizing: (key: string, index: number) => (e: MouseEvent) => void;
    thRefs: React.MutableRefObject<(HTMLTableCellElement | null)[]>;
    valueColumnFilter: string;
}

interface TableHeadFilterProps {
    keyfilter: string;
    label: string;
    setColumnFilters: React.Dispatch<React.SetStateAction<Record<string, string>>>;
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
    setFilterActiveColumn: React.Dispatch<React.SetStateAction<string | null>>;
    setValueColumnFilter: React.Dispatch<React.SetStateAction<string>>;
    valueColumnFilter: string;
}

interface TableHeadResizableProps {
    startResizing: (key: string, index: number) => (e: MouseEvent) => void;
    columnkey: string;
    index: number;
}

// =============================================================
// Subcomponenes utilizados dentro de este componente
// =============================================================
// Componente que muestra el filtro en el encabezado de la tabla.
// Este componente se activa al hacer clic en el icono de filtro y permite al usuario ingresar
// un valor para filtrar los datos de la columna correspondiente.
// Este componente se renderiza solo cuando el usuario hace clic en el icono de filtro de una columna.
// El filtro se aplica al hacer clic en el botón "Filtrar" y se cierra al hacer clic en "Cancelar" o al aplicar el filtro.
// El filtro se aplica a la columna correspondiente y se guarda en el estado `columnFilters`
const TableHeadFilter = ({
    label,
    valueColumnFilter,
    setValueColumnFilter,
    setColumnFilters,
    setFilterActiveColumn,
    setCurrentPage,
    keyfilter
}: TableHeadFilterProps
) => {
    return (
        <>
            <div class='th-filter'>
                <input
                    type="text"
                    placeholder={`Filtrar por ${label}`}
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
                            setColumnFilters(prev => ({ ...prev, [keyfilter]: valueColumnFilter }))
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
        </>
    )
}


const TableHeadResizable = ({
    startResizing,
    columnkey,
    index
}: TableHeadResizableProps) => {
    return (
        <div
            class='th-resizer'
            // onMouseDown={startResizing(column.key, index)}
            onPointerDown={(e) => {
                e.stopPropagation(); // Evitar que el evento se propague al th
                startResizing(columnkey, index)(e)
            }}
            // onDragStart={(e) => e.stopPropagation()}
            // onClick={(e) => e.stopPropagation()}
            draggable={false}
        ></div>
    )
}

// Componente principal que muestra el encabezado de la tabla.

const TableHead = ({
    columnFilters,
    columnsLocal,
    columnsWitch,
    filterActiveColumn,
    handleDragOver,
    handleDragStart,
    handleDrop,
    isResizing,
    setColumnFilters,
    setCurrentPage,
    setFilterActiveColumn,
    setSortColumn,
    setSortDirection,
    setValueColumnFilter,
    sortColumn,
    sortDirection,
    startResizing,
    thRefs,
    valueColumnFilter,
}: TableHeadProps) => {
    return (
        <>
            <thead>
                <tr>
                    {columnsLocal.map((column, index) => {
                        if (!column.visible) return
                        return (
                            <th
                                draggable={!isResizing}
                                key={column.key}
                                style={{ width: `${columnsWitch[column.key]}` || '160px' }}
                                ref={el => thRefs.current[index] = el}
                                onDragStart={(e) => handleDragStart(e as DragEvent, index)}
                                onDragOver={(e) => handleDragOver(e)}
                                onDrop={(e) => handleDrop(e as DragEvent, index)}
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
                                        <TableHeadFilter
                                            label={column.label}
                                            valueColumnFilter={valueColumnFilter}
                                            setValueColumnFilter={setValueColumnFilter}
                                            setColumnFilters={setColumnFilters}
                                            setFilterActiveColumn={setFilterActiveColumn}
                                            setCurrentPage={setCurrentPage}
                                            keyfilter={column.key}
                                        />
                                    )}
                                </div>
                                {/* Botón para cambiar el ancho de la columna */
                                    column.resizable && (
                                        <TableHeadResizable
                                            startResizing={startResizing}
                                            columnkey={column.key}
                                            index={index}
                                        />
                                    )
                                }
                            </th>
                        )
                    })}
                </tr>
            </thead>
        </>
    )
}

export default TableHead