import { Table } from "./components/Table"
import { columnsTable, dataTable } from "./data/datatable"


const CustomTable = () => {
    return (
        <>
            <Table
                columns={columnsTable}
                data={dataTable}
            />
        </>
    )
}

export default CustomTable