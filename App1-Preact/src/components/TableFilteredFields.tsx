// Componente para mostrar los campos filtrados de la tabla

interface TableFilteredFieldsProps {
    columnFilters: Record<string, string>;
    setColumnFilters: React.Dispatch<React.SetStateAction<Record<string, string>>>;
}

const TableFilteredFields = ({
    columnFilters,
    setColumnFilters,
}: TableFilteredFieldsProps) => {
    return (
        <>
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
        </>
    )
}

export default TableFilteredFields