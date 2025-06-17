// DAta para el componente Table

import type { JSX } from "preact/jsx-runtime";
// import { h } from 'preact';

export interface Column {
    label: string;
    key: string;
    width?: string;
    sortable: boolean;
    visible: boolean;
    render?: (row: any) => JSX.Element;
}

export const columnsTable: Column[] = [
    {
        label: "ID",
        key: "id",
        width: "100px",
        sortable: true,
        visible: false
    },
    {
        label: "Apellidos",
        key: "apellidos",
        width: "280px",
        sortable: true,
        visible: true
    },
    {
        label: "Nombres",
        key: "nombres",
        width: "280px",
        sortable: true,
        visible: true
    },
    {
        label: "Nombres Completos",
        key: "nombrescompletos",
        width: "400px",
        sortable: false,
        visible: true,
        render: (row) => <span>{row.apellidos} {row.nombres}</span>
    },
    {
        label: "Fecha de Nacimiento",
        key: "fechaNacimiento",
        width: "180px",
        sortable: true,
        visible: true
    },
    {
        label: "Dirección",
        key: "direccion",
        width: "380px",
        sortable: true,
        visible: true
    },
    {
        label: "Teléfono",
        key: "telefono",
        width: "200px",
        sortable: true,
        visible: true
    },
    {
        label: "Acciones",
        key: "acciones",
        width: "180px",
        sortable: false,
        visible: true,
        render: (row) =>
            <div
            style={{display: 'flex', justifyContent: 'center'}}
            >
                <button
                    class="button-row"
                    onClick={() => alert(`${row.apellidos} ${row.nombres} ${row.direccion} ${row.telefono}`)}
                >Información</button>
            </div>
    },
]


export const dataTable = [
    {
        "id": "7806486367590492",
        "apellidos": "García",
        "nombres": "María",
        "fechaNacimiento": "1988-09-15",
        "direccion": "Calle 84 # 93-35, Cali",
        "telefono": "3238722232"
    },
    {
        "id": "8564628246929829",
        "apellidos": "Rodríguez",
        "nombres": "José",
        "fechaNacimiento": "1962-05-20",
        "direccion": "Calle 123 # 50-96, Montería",
        "telefono": "3613683942"
    },
    {
        "id": "2958173601948265",
        "apellidos": "Martínez",
        "nombres": "Juan",
        "fechaNacimiento": "1975-11-02",
        "direccion": "Calle 47 # 12-14, Bogotá",
        "telefono": "3789567123"
    },
    {
        "id": "0419273856014728",
        "apellidos": "López",
        "nombres": "Luis",
        "fechaNacimiento": "1992-03-18",
        "direccion": "Calle 5 # 23-45, Medellín",
        "telefono": "3012345678"
    },
    {
        "id": "1938462750193846",
        "apellidos": "González",
        "nombres": "Carmen",
        "fechaNacimiento": "1980-07-25",
        "direccion": "Calle 200 # 34-56, Barranquilla",
        "telefono": "3159876543"
    },
    {
        "id": "5820193746502917",
        "apellidos": "Pérez",
        "nombres": "Ana",
        "fechaNacimiento": "1970-12-11",
        "direccion": "Calle 18 # 78-90, Bucaramanga",
        "telefono": "3187654321"
    },
    {
        "id": "3746591827364501",
        "apellidos": "Sánchez",
        "nombres": "Julio",
        "fechaNacimiento": "1965-06-30",
        "direccion": "Calle 90 # 10-20, Pereira",
        "telefono": "3223456789"
    },
    {
        "id": "9081726354982173",
        "apellidos": "Ramírez",
        "nombres": "Marta",
        "fechaNacimiento": "1995-01-05",
        "direccion": "Calle 60 # 15-25, Manizales",
        "telefono": "3009876543"
    },
    {
        "id": "1273649501827364",
        "apellidos": "Torres",
        "nombres": "Pedro",
        "fechaNacimiento": "1983-08-14",
        "direccion": "Calle 33 # 44-55, Villavicencio",
        "telefono": "3124567890"
    },
    {
        "id": "5647382910563748",
        "apellidos": "Flores",
        "nombres": "Laura",
        "fechaNacimiento": "1978-04-22",
        "direccion": "Calle 77 # 11-22, Cúcuta",
        "telefono": "3191234567"
    },
    {
        "id": "8493021756382910",
        "apellidos": "Rivera",
        "nombres": "Carlos",
        "fechaNacimiento": "1990-09-09",
        "direccion": "Calle 12 # 34-56, Santa Marta",
        "telefono": "3058765432"
    },
    {
        "id": "2039485761029384",
        "apellidos": "Díaz",
        "nombres": "Sofía",
        "fechaNacimiento": "1987-02-28",
        "direccion": "Calle 150 # 20-30, Ibagué",
        "telefono": "3145678901"
    },
    {
        "id": "6473829105647382",
        "apellidos": "Hernández",
        "nombres": "Ricardo",
        "fechaNacimiento": "1972-10-19",
        "direccion": "Calle 40 # 50-70, Pasto",
        "telefono": "3176543210"
    },
    {
        "id": "9182736455463728",
        "apellidos": "Moreno",
        "nombres": "Paula",
        "fechaNacimiento": "1998-05-07",
        "direccion": "Calle 85 # 22-33, Montería",
        "telefono": "3071234987"
    },
    {
        "id": "3746501928374650",
        "apellidos": "Álvarez",
        "nombres": "Andrés",
        "fechaNacimiento": "1985-11-11",
        "direccion": "Calle 65 # 30-40, Neiva",
        "telefono": "3209876543"
    },
    {
        "id": "0918273645567382",
        "apellidos": "Jiménez",
        "nombres": "Elena",
        "fechaNacimiento": "1979-03-03",
        "direccion": "Calle 29 # 16-26, Armenia",
        "telefono": "3221098765"
    },
    {
        "id": "5647382910273645",
        "apellidos": "Romero",
        "nombres": "Diego",
        "fechaNacimiento": "1993-07-21",
        "direccion": "Calle 96 # 45-65, Popayán",
        "telefono": "3189012345"
    },
    {
        "id": "8374650918273645",
        "apellidos": "Herrera",
        "nombres": "Patricia",
        "fechaNacimiento": "1968-12-01",
        "direccion": "Calle 54 # 12-32, Sincelejo",
        "telefono": "3154321098"
    },
    {
        "id": "1203948576102938",
        "apellidos": "Castro",
        "nombres": "Jorge",
        "fechaNacimiento": "1982-08-08",
        "direccion": "Calle 18 # 60-80, Tunja",
        "telefono": "3056789123"
    },
    {
        "id": "2938475610293847",
        "apellidos": "Ruiz",
        "nombres": "Andrea",
        "fechaNacimiento": "1991-01-17",
        "direccion": "Calle 72 # 24-44, Valledupar",
        "telefono": "3135678902"
    },
    {
        "id": "6758493021564837",
        "apellidos": "Ortiz",
        "nombres": "Fernando",
        "fechaNacimiento": "1976-06-13",
        "direccion": "Calle 38 # 18-28, Palmira",
        "telefono": "3146789012"
    },
    {
        "id": "3829105647382910",
        "apellidos": "Mendoza",
        "nombres": "Isabel",
        "fechaNacimiento": "1989-09-23",
        "direccion": "Calle 99 # 42-62, Sogamoso",
        "telefono": "3178901234"
    },
    {
        "id": "4567382910273948",
        "apellidos": "Delgado",
        "nombres": "Francisco",
        "fechaNacimiento": "1969-11-29",
        "direccion": "Calle 27 # 14-34, Ipiales",
        "telefono": "3102345678"
    },
    {
        "id": "1029384756102938",
        "apellidos": "Silva",
        "nombres": "Teresa",
        "fechaNacimiento": "1964-10-06",
        "direccion": "Calle 172 # 27-80, Bogotá",
        "telefono": "3502703448"
    },
    {
        "id": "2146972828272241",
        "apellidos": "Cruz",
        "nombres": "Manuel",
        "fechaNacimiento": "1985-07-09",
        "direccion": "Calle 120 # 19-79, Santa Marta",
        "telefono": "3348345186"
    }
]
