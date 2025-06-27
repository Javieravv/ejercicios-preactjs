import { Table } from "./components/Table"
import { columnsTable, dataTable } from "./data/datatable"


const CustomTable = () => {
    return (
        <>
            <Table
                columns={columnsTable}
                data={dataTable}
                pageSize={50}
                tableId="custom-table-persons"
            />
            <div>
                <p>Tabla personalizada con Preact</p>
                <p>Esta tabla muestra datos de forma personalizada utilizando Preact.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod eaque quam, enim numquam iure quas recusandae, odit corrupti animi expedita obcaecati? Magni eos, omnis quo sapiente quas neque modi velit fuga, dolores, cum fugiat tempore aperiam laudantium minus excepturi explicabo dolor facere unde perspiciatis. Suscipit ab pariatur sequi commodi iusto, ad tempora ipsa maiores possimus perspiciatis voluptas nam, numquam cum consectetur voluptatem? Iure sapiente eos at, nulla ducimus assumenda pariatur praesentium. Harum assumenda quam fuga, dignissimos facilis quaerat nisi ex, unde deserunt, debitis error numquam consequuntur iure dolor obcaecati? Id explicabo totam nobis harum? Consectetur natus laboriosam a repellat qui fugit minus exercitationem reprehenderit animi recusandae illum ex maxime pariatur provident ab fugiat repellendus, facilis harum? Veritatis fugit doloribus provident omnis esse. Numquam aliquam dolor provident quidem nobis explicabo obcaecati rerum aut consequatur deleniti, iste recusandae, similique nihil! Excepturi culpa quibusdam enim vel quia blanditiis nesciunt deserunt architecto possimus iusto. Provident distinctio quis iure autem dolorem.</p>
            </div>
        </>
    )
}

export default CustomTable