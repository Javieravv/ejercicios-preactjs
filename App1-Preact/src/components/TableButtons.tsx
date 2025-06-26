// Subcomponente que muestra los botones de la tabla.
interface TableButtonsProps {
    columnFilters: Record<string, string>;
    setColumnFilters: React.Dispatch<React.SetStateAction<Record<string, string>>>;
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
    btnsPagesVisibles: (number | string)[];
    currentPage: number;
    totalPage: number;
}

const TableButtons = ({
    columnFilters,
    setColumnFilters,
    setCurrentPage,
    btnsPagesVisibles,
    currentPage,
    totalPage
}: TableButtonsProps) => {
    return (
        <>
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

export default TableButtons