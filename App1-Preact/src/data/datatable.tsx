// DAta para el componente Table

import type { JSX } from "preact/jsx-runtime";
// import { h } from 'preact';

export interface Column {
    label: string;
    key: string;
    width?: string;
    sortable: boolean;
    visible: boolean;
    filtered?: boolean;
    textAlignItem?: React.CSSProperties;
    resizable?: boolean;
    render?: (row: any) => JSX.Element;
}

export const columnsTable: Column[] = [
    {
        label: "ID",
        key: "id",
        width: "100px",
        sortable: true,
        visible: false,
        textAlignItem: { justifyContent: 'flex-start'  }
    },
    {
        label: "Apellidos",
        key: "apellidos",
        width: "280px",
        sortable: true,
        visible: true,
        filtered: true,
        textAlignItem: { justifyContent: 'flex-start'  },
        resizable: true
    },
    {
        label: "Nombres",
        key: "nombres",
        width: "280px",
        sortable: true,
        visible: true,
        filtered: true,
        textAlignItem: { justifyContent: 'flex-start'  },
        resizable: true
    },
    {
        label: "Nombres Completos",
        key: "nombrescompletos",
        width: "400px",
        sortable: false,
        visible: true,
        filtered: false,
        render: (row) => <span>{row.apellidos} {row.nombres}</span>,
        textAlignItem: { justifyContent: 'flex-start'  },
        resizable: true
    },
    {
        label: "Fecha de Nacimiento",
        key: "fechaNacimiento",
        width: "250px",
        sortable: true,
        visible: true,
        textAlignItem: { justifyContent: 'center'},
        filtered: true,
        render: (row) => {
            const [year, month, day] = row.fechaNacimiento.split('-').map(Number);
            const dateRow = new Date(year, month - 1, day);
            const optionsFormat = {
                month: 'short',
                day: '2-digit',
                year: 'numeric'
            }
            const dateFormated = new Intl.DateTimeFormat('en-US', optionsFormat)
            let dateOk = dateFormated.format(dateRow)
            dateOk = dateOk.replace(/,?\s/g, '-');
            return <>{dateOk}</>;
        },
        resizable: true
    },
    {
        label: "Edad",
        key: "edad",
        width: "120px",
        sortable: true,
        visible: true,
        filtered: true,
        textAlignItem: { justifyContent: 'center'  },
        resizable: true,
    },
    {
        label: "Salario devengado",
        key: "salario",
        width: "300px",
        sortable: true,
        visible: true,
        textAlignItem: { justifyContent: 'flex-end' },
        filtered: true,
        render: (row) => {
            const numberFormat = new Intl.NumberFormat('es-CO', { minimumFractionDigits: 2, maximumFractionDigits: 2, useGrouping: true }).format(row.salario);
            return <>{numberFormat}</>;
        },
        resizable: true
    },
    {
        label: "Dirección",
        key: "direccion",
        width: "450px",
        sortable: true,
        visible: true,
        filtered: true,
        textAlignItem: { justifyContent: 'flex-start'  },
        resizable: true
    },
    {
        label: "Teléfono",
        key: "telefono",
        width: "200px",
        sortable: true,
        visible: true,
        filtered: true,
        textAlignItem: { justifyContent: 'flex-end'  },
        resizable: true,
    },
    {
        label: "Acciones",
        key: "acciones",
        width: "180px",
        sortable: false,
        visible: true,
        textAlignItem: { justifyContent: 'auto'  },
        render: (row) =>
            <div
                style={{ display: 'flex', justifyContent: 'center' }}
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
        "id": "7986152549272788",
        "apellidos": "Hill Walker",
        "nombres": "Danielle Angel",
        "fechaNacimiento": "1966-06-09",
        "edad": 59,
        "salario": 9090031,
        "direccion": "600 Jeffery Parkways, New Jamesside, IN 59379",
        "telefono": "0265423511"
    },
    {
        "id": "9639523834605846",
        "apellidos": "Munoz Roman",
        "nombres": "Melanie",
        "fechaNacimiento": "1990-09-23",
        "edad": 34,
        "salario": 7814545,
        "direccion": "84959 Janet Cape Apt. 413, South Joshuastad, MN 47067",
        "telefono": "4192832764"
    },
    {
        "id": "9305197514498526",
        "apellidos": "Parsons Perez",
        "nombres": "Megan",
        "fechaNacimiento": "1961-08-24",
        "edad": 63,
        "salario": 1203426,
        "direccion": "1395 Diana Locks Suite 242, Lake Anna, WA 77123",
        "telefono": "9653287101"
    },
    {
        "id": "4832353645152666",
        "apellidos": "Cruz Carlson",
        "nombres": "Candace",
        "fechaNacimiento": "1991-04-25",
        "edad": 34,
        "salario": 8561051,
        "direccion": "184 Rodriguez Mews, South Aaron, VA 35023",
        "telefono": "8148932528"
    },
    {
        "id": "6871416299099176",
        "apellidos": "Hickman Koch",
        "nombres": "Mario Andrew",
        "fechaNacimiento": "1980-05-22",
        "edad": 45,
        "salario": 1809757,
        "direccion": "117 Tiffany Place, East Donna, GA 35242",
        "telefono": "3834657871"
    },
    {
        "id": "2627044521170719",
        "apellidos": "Hall",
        "nombres": "Matthew Brianna",
        "fechaNacimiento": "1974-06-13",
        "edad": 51,
        "salario": 9120622,
        "direccion": "10518 Joshua Oval, New David, OK 76026",
        "telefono": "3763116566"
    },
    {
        "id": "8736080715866600",
        "apellidos": "Mcbride Rodriguez",
        "nombres": "Bruce Jessica",
        "fechaNacimiento": "1972-07-01",
        "edad": 52,
        "salario": 8202993,
        "direccion": "62473 Scott Wall Apt. 080, Port Melindaburgh, NM 63593",
        "telefono": "6026064746"
    },
    {
        "id": "9404296021447062",
        "apellidos": "Brown",
        "nombres": "James Jeff",
        "fechaNacimiento": "1996-05-11",
        "edad": 29,
        "salario": 7304891,
        "direccion": "09788 Brian Pass Apt. 219, Lake Michellefurt, OK 32772",
        "telefono": "9169985435"
    },
    {
        "id": "7973232298523694",
        "apellidos": "Bryant",
        "nombres": "David Debbie",
        "fechaNacimiento": "1964-05-26",
        "edad": 61,
        "salario": 5936972,
        "direccion": "83842 Ibarra Gardens, Justinmouth, ND 92715",
        "telefono": "9808412411"
    },
    {
        "id": "8246388963584427",
        "apellidos": "Clark",
        "nombres": "Juan",
        "fechaNacimiento": "1982-10-18",
        "edad": 42,
        "salario": 1816920,
        "direccion": "740 Cynthia Village Suite 005, Lake Tina, WA 58413",
        "telefono": "8011280598"
    },
    {
        "id": "7580438834277529",
        "apellidos": "Fitzpatrick Stanton",
        "nombres": "Bobby Michael",
        "fechaNacimiento": "1962-03-06",
        "edad": 63,
        "salario": 2074591,
        "direccion": "PSC 3315, Box 8692, APO AE 21800",
        "telefono": "6025634216"
    },
    {
        "id": "5511274923532504",
        "apellidos": "Sellers Bailey",
        "nombres": "James",
        "fechaNacimiento": "1974-12-13",
        "edad": 50,
        "salario": 1623980,
        "direccion": "5414 May Locks, Sheilaville, KS 23906",
        "telefono": "0196556981"
    },
    {
        "id": "9180350483724520",
        "apellidos": "Smith",
        "nombres": "Jonathan Jeanne",
        "fechaNacimiento": "1996-02-08",
        "edad": 29,
        "salario": 4584357,
        "direccion": "6159 Alvarado Crossing, Williamchester, MO 91885",
        "telefono": "8236629946"
    },
    {
        "id": "4485525519389490",
        "apellidos": "Carpenter Pena",
        "nombres": "Justin Russell",
        "fechaNacimiento": "1991-02-08",
        "edad": 34,
        "salario": 5222523,
        "direccion": "721 Robertson Roads, Clarencebury, ME 29945",
        "telefono": "2003791769"
    },
    {
        "id": "7729214723016400",
        "apellidos": "Watts",
        "nombres": "Reginald Dylan",
        "fechaNacimiento": "1966-09-19",
        "edad": 58,
        "salario": 6210542,
        "direccion": "87083 Stephen Unions, Contrerasside, MD 99493",
        "telefono": "9868727743"
    },
    {
        "id": "1880265456409572",
        "apellidos": "Jones Mitchell",
        "nombres": "Courtney Joshua",
        "fechaNacimiento": "1977-12-14",
        "edad": 47,
        "salario": 5806717,
        "direccion": "23623 Robert Isle, Perryborough, MT 51550",
        "telefono": "9670546688"
    },
    {
        "id": "7178960764818131",
        "apellidos": "Graham",
        "nombres": "Jeffrey",
        "fechaNacimiento": "1961-06-09",
        "edad": 64,
        "salario": 2926873,
        "direccion": "272 Rebecca Ramp Apt. 162, Whiteview, MD 28243",
        "telefono": "5564641708"
    },
    {
        "id": "3398931694761950",
        "apellidos": "Harrington Pearson",
        "nombres": "Debra",
        "fechaNacimiento": "1961-07-29",
        "edad": 63,
        "salario": 8989538,
        "direccion": "USNS Combs, FPO AP 20474",
        "telefono": "2719374529"
    },
    {
        "id": "2207454314440946",
        "apellidos": "Rodriguez",
        "nombres": "Tami",
        "fechaNacimiento": "1961-03-18",
        "edad": 64,
        "salario": 3243100,
        "direccion": "USCGC Sanders, FPO AP 26496",
        "telefono": "9314919058"
    },
    {
        "id": "2554747200915703",
        "apellidos": "Atkinson Short",
        "nombres": "William Matthew",
        "fechaNacimiento": "1966-08-24",
        "edad": 58,
        "salario": 3580341,
        "direccion": "726 Jessica Run Suite 987, Grahamshire, MD 32678",
        "telefono": "4737996507"
    },
    {
        "id": "8642058750607292",
        "apellidos": "Peterson Beard",
        "nombres": "Jason Lauren",
        "fechaNacimiento": "2007-03-07",
        "edad": 18,
        "salario": 2334678,
        "direccion": "313 Freeman Trace, Lake Thomas, NM 59244",
        "telefono": "1436349578"
    },
    {
        "id": "9305434158571240",
        "apellidos": "Bell Chavez",
        "nombres": "Wendy Andrea",
        "fechaNacimiento": "1980-04-30",
        "edad": 45,
        "salario": 6245113,
        "direccion": "351 James Streets, Hillshire, NC 78723",
        "telefono": "1343524082"
    },
    {
        "id": "3600713089417461",
        "apellidos": "Terry",
        "nombres": "Angela",
        "fechaNacimiento": "1968-01-21",
        "edad": 57,
        "salario": 6245599,
        "direccion": "09477 Peterson Center Suite 711, Vasquezshire, TX 07527",
        "telefono": "2941318699"
    },
    {
        "id": "6864890289283205",
        "apellidos": "Evans Chapman",
        "nombres": "Omar Rebekah",
        "fechaNacimiento": "1988-08-23",
        "edad": 36,
        "salario": 3494155,
        "direccion": "133 Guerrero Estate, East Andrea, AL 54046",
        "telefono": "9740344713"
    },
    {
        "id": "4789856820310254",
        "apellidos": "Holland Kerr",
        "nombres": "Ronald Amy",
        "fechaNacimiento": "1969-02-21",
        "edad": 56,
        "salario": 4361504,
        "direccion": "9947 Taylor Hollow, Benderhaven, NM 57878",
        "telefono": "9065940139"
    },
    {
        "id": "9241837975481738",
        "apellidos": "Hines Thompson",
        "nombres": "Barbara",
        "fechaNacimiento": "1994-10-11",
        "edad": 30,
        "salario": 9299222,
        "direccion": "96717 Ortiz Islands Apt. 256, Robertsfurt, WV 72603",
        "telefono": "7154516808"
    },
    {
        "id": "6261668005241749",
        "apellidos": "Cox",
        "nombres": "Jacob",
        "fechaNacimiento": "1993-05-21",
        "edad": 32,
        "salario": 2330569,
        "direccion": "48247 Martinez Roads, Lake Eric, AL 72885",
        "telefono": "1317127484"
    },
    {
        "id": "9070230249637549",
        "apellidos": "Reyes Weeks",
        "nombres": "John Andrea",
        "fechaNacimiento": "1994-01-18",
        "edad": 31,
        "salario": 1824349,
        "direccion": "46584 Justin Hills, Grimesmouth, NJ 45737",
        "telefono": "8867533963"
    },
    {
        "id": "8822945665413495",
        "apellidos": "Thornton",
        "nombres": "Julie",
        "fechaNacimiento": "1985-05-28",
        "edad": 40,
        "salario": 4683319,
        "direccion": "0289 Kane Well, Garciamouth, VA 19395",
        "telefono": "2174596158"
    },
    {
        "id": "2257786818728396",
        "apellidos": "Jones Welch",
        "nombres": "Monique Barry",
        "fechaNacimiento": "1979-01-07",
        "edad": 46,
        "salario": 4276063,
        "direccion": "Unit 1611 Box 7240, DPO AE 43017",
        "telefono": "4556238692"
    },
    {
        "id": "0216824377206586",
        "apellidos": "Vega Jimenez",
        "nombres": "Chelsea Patrick",
        "fechaNacimiento": "1999-02-23",
        "edad": 26,
        "salario": 8549447,
        "direccion": "474 Rachel Mountain Suite 821, Landryshire, SC 56116",
        "telefono": "7436713695"
    },
    {
        "id": "7103882204447611",
        "apellidos": "Foster Smith",
        "nombres": "Andrew Maria",
        "fechaNacimiento": "2006-02-17",
        "edad": 19,
        "salario": 4734232,
        "direccion": "743 Robinson Field, Ericaberg, CT 82743",
        "telefono": "4709521456"
    },
    {
        "id": "9367232768792770",
        "apellidos": "Walter",
        "nombres": "Kristin",
        "fechaNacimiento": "1984-05-11",
        "edad": 41,
        "salario": 8831523,
        "direccion": "47451 Mccarty Divide Apt. 685, Port Ralphview, DE 60110",
        "telefono": "4965137098"
    },
    {
        "id": "0878509785730330",
        "apellidos": "Reid Marshall",
        "nombres": "Deborah",
        "fechaNacimiento": "2007-03-04",
        "edad": 18,
        "salario": 4354469,
        "direccion": "20047 Colton Plain Apt. 675, Matthewsberg, MT 86342",
        "telefono": "7964053773"
    },
    {
        "id": "0911494889190830",
        "apellidos": "Levine",
        "nombres": "Amy",
        "fechaNacimiento": "1983-11-14",
        "edad": 41,
        "salario": 5060673,
        "direccion": "17139 Brent Isle Apt. 293, Port Kathyborough, IL 31040",
        "telefono": "2904228421"
    },
    {
        "id": "6646437500306244",
        "apellidos": "Chapman Smith",
        "nombres": "Michael Kristina",
        "fechaNacimiento": "1977-07-09",
        "edad": 47,
        "salario": 6571151,
        "direccion": "117 Strickland Passage Apt. 783, Lake Kristahaven, NH 84824",
        "telefono": "0766177115"
    },
    {
        "id": "2249600229011331",
        "apellidos": "Richards Joseph",
        "nombres": "David Claudia",
        "fechaNacimiento": "1985-05-20",
        "edad": 40,
        "salario": 1839952,
        "direccion": "Unit 8478 Box 9611, DPO AP 85817",
        "telefono": "6736576615"
    },
    {
        "id": "3451159924784448",
        "apellidos": "Hernandez Leblanc",
        "nombres": "Nicholas",
        "fechaNacimiento": "1964-01-12",
        "edad": 61,
        "salario": 8278158,
        "direccion": "61528 Brenda Points, Elizabethchester, TN 98842",
        "telefono": "0494519832"
    },
    {
        "id": "2726390848250514",
        "apellidos": "Hawkins Wilson",
        "nombres": "Michael",
        "fechaNacimiento": "1978-06-02",
        "edad": 47,
        "salario": 8090057,
        "direccion": "998 Chelsea Shoals Suite 024, Sandrastad, HI 19277",
        "telefono": "1201836675"
    },
    {
        "id": "3145088595732961",
        "apellidos": "Bradley Miller",
        "nombres": "Jennifer Kimberly",
        "fechaNacimiento": "1963-01-16",
        "edad": 62,
        "salario": 6571067,
        "direccion": "147 Tucker Mills, Nelsonhaven, MI 56850",
        "telefono": "4978403690"
    },
    {
        "id": "5432493341707930",
        "apellidos": "Duran",
        "nombres": "Sierra Katrina",
        "fechaNacimiento": "1979-02-28",
        "edad": 46,
        "salario": 4119716,
        "direccion": "6226 Vincent Village, Charleston, AK 60761",
        "telefono": "5969664160"
    },
    {
        "id": "8676376254706361",
        "apellidos": "Norris",
        "nombres": "Steve",
        "fechaNacimiento": "1984-02-01",
        "edad": 41,
        "salario": 6776202,
        "direccion": "69681 Harrell Summit, Jeffreyburgh, NY 83499",
        "telefono": "8835523124"
    },
    {
        "id": "4476070862828646",
        "apellidos": "Jones Bean",
        "nombres": "Eric Katherine",
        "fechaNacimiento": "2002-03-12",
        "edad": 23,
        "salario": 8772822,
        "direccion": "995 Hernandez Cliff Suite 744, West Williamport, NV 05430",
        "telefono": "5411998679"
    },
    {
        "id": "1979237183781395",
        "apellidos": "Armstrong Lopez",
        "nombres": "Regina",
        "fechaNacimiento": "2000-08-19",
        "edad": 24,
        "salario": 1069415,
        "direccion": "71518 Benjamin Station, Ritterhaven, RI 21308",
        "telefono": "5466590515"
    },
    {
        "id": "4558276581506525",
        "apellidos": "Cummings",
        "nombres": "Justin",
        "fechaNacimiento": "2004-02-21",
        "edad": 21,
        "salario": 9617459,
        "direccion": "Unit 9251 Box 9254, DPO AP 92052",
        "telefono": "2914865281"
    },
    {
        "id": "3041520627316729",
        "apellidos": "Bean Peterson",
        "nombres": "Andrew Kyle",
        "fechaNacimiento": "1992-07-21",
        "edad": 32,
        "salario": 4126210,
        "direccion": "14188 Ebony Wells, New Nicholas, HI 91313",
        "telefono": "7065379473"
    },
    {
        "id": "5619144332311075",
        "apellidos": "Mckee",
        "nombres": "Tammy Kristen",
        "fechaNacimiento": "1972-08-31",
        "edad": 52,
        "salario": 8073983,
        "direccion": "4688 Burch Viaduct Apt. 924, Lake Timothystad, CT 93745",
        "telefono": "4124782613"
    },
    {
        "id": "1837581515787640",
        "apellidos": "Sanders Brooks",
        "nombres": "Robert",
        "fechaNacimiento": "1985-09-28",
        "edad": 39,
        "salario": 5942736,
        "direccion": "Unit 5305 Box 1522, DPO AE 38102",
        "telefono": "2779010432"
    },
    {
        "id": "4876736848275211",
        "apellidos": "Young Martinez",
        "nombres": "Rodney Kimberly",
        "fechaNacimiento": "1975-09-09",
        "edad": 49,
        "salario": 1025007,
        "direccion": "17980 Jennifer Highway Suite 095, New Robert, TN 11722",
        "telefono": "1888880670"
    },
    {
        "id": "0528095368077878",
        "apellidos": "Jones Allen",
        "nombres": "Julie Michael",
        "fechaNacimiento": "2004-03-06",
        "edad": 21,
        "salario": 4855626,
        "direccion": "05852 Pollard Neck Apt. 217, West Jamesborough, AZ 41866",
        "telefono": "8687403450"
    },
    {
        "id": "4747270560839895",
        "apellidos": "Ross Gonzales",
        "nombres": "Lauren Samuel",
        "fechaNacimiento": "1985-10-10",
        "edad": 39,
        "salario": 1282534,
        "direccion": "7584 Jessica Common, Morrisonburgh, LA 42602",
        "telefono": "1544796275"
    },
    {
        "id": "4278157562159114",
        "apellidos": "Fowler Moody",
        "nombres": "Christina Ryan",
        "fechaNacimiento": "1963-05-14",
        "edad": 62,
        "salario": 6096980,
        "direccion": "8202 Johnson Cliff Apt. 556, New Ericmouth, MN 58689",
        "telefono": "9285654310"
    },
    {
        "id": "4643352909520525",
        "apellidos": "Hoffman Green",
        "nombres": "Paul",
        "fechaNacimiento": "1977-03-05",
        "edad": 48,
        "salario": 6636528,
        "direccion": "473 Derek Cliffs, Thompsonmouth, TX 42390",
        "telefono": "1884422583"
    },
    {
        "id": "3388374081744765",
        "apellidos": "Snyder",
        "nombres": "Joel",
        "fechaNacimiento": "1984-01-09",
        "edad": 41,
        "salario": 6536908,
        "direccion": "8291 Kyle Stravenue Suite 866, East Teresaland, NH 89644",
        "telefono": "2892268018"
    },
    {
        "id": "8122422123296059",
        "apellidos": "Perez Meza",
        "nombres": "Fernando Sarah",
        "fechaNacimiento": "1994-10-10",
        "edad": 30,
        "salario": 1466552,
        "direccion": "PSC 1438, Box 4249, APO AP 12746",
        "telefono": "9922995900"
    },
    {
        "id": "0743877668352105",
        "apellidos": "Armstrong Montgomery",
        "nombres": "Joseph Jason",
        "fechaNacimiento": "1961-07-10",
        "edad": 63,
        "salario": 1077023,
        "direccion": "473 Evans Cliffs Apt. 276, Marshallmouth, FL 41471",
        "telefono": "5625881537"
    },
    {
        "id": "9700135928391120",
        "apellidos": "Roberts Cruz",
        "nombres": "John Colin",
        "fechaNacimiento": "2001-05-04",
        "edad": 24,
        "salario": 8035513,
        "direccion": "9532 Ferrell Mountain, Kochfort, CO 52044",
        "telefono": "3395004797"
    },
    {
        "id": "2667443297056887",
        "apellidos": "Jordan",
        "nombres": "Melanie",
        "fechaNacimiento": "1977-06-17",
        "edad": 48,
        "salario": 2035863,
        "direccion": "0609 Michael Heights Apt. 687, Marciaville, CT 52130",
        "telefono": "5852398680"
    },
    {
        "id": "7042707029256219",
        "apellidos": "Stone Hernandez",
        "nombres": "Jennifer Linda",
        "fechaNacimiento": "1994-07-17",
        "edad": 30,
        "salario": 3949890,
        "direccion": "69495 Erickson Hills Suite 055, South Brandytown, NJ 35304",
        "telefono": "0972896230"
    },
    {
        "id": "5642152583588142",
        "apellidos": "Hernandez Vaughn",
        "nombres": "Andrew Lee",
        "fechaNacimiento": "1987-05-22",
        "edad": 38,
        "salario": 1384596,
        "direccion": "028 Ann Shore Suite 865, South Rhonda, ND 46938",
        "telefono": "9733484344"
    },
    {
        "id": "1867465272512522",
        "apellidos": "Castro Michael",
        "nombres": "Timothy",
        "fechaNacimiento": "1978-01-26",
        "edad": 47,
        "salario": 2074103,
        "direccion": "5240 Moses Common Suite 747, East Maria, OH 91749",
        "telefono": "2199330833"
    },
    {
        "id": "2137261592114394",
        "apellidos": "Kennedy Maldonado",
        "nombres": "Mark",
        "fechaNacimiento": "1968-10-25",
        "edad": 56,
        "salario": 8377483,
        "direccion": "7734 Mitchell Circle, Lake Audreyside, VA 05389",
        "telefono": "6206724004"
    },
    {
        "id": "2384309402817661",
        "apellidos": "Rogers",
        "nombres": "Sarah",
        "fechaNacimiento": "1990-05-19",
        "edad": 35,
        "salario": 4375207,
        "direccion": "Unit 8872 Box 8743, DPO AE 43844",
        "telefono": "7420549329"
    },
    {
        "id": "5453987512248442",
        "apellidos": "Morales",
        "nombres": "Mark",
        "fechaNacimiento": "1965-12-14",
        "edad": 59,
        "salario": 2422130,
        "direccion": "5304 Young Terrace, Stephanieport, VA 75589",
        "telefono": "4530174268"
    },
    {
        "id": "9127893707616413",
        "apellidos": "Bernard Mendoza",
        "nombres": "Michael Jeffrey",
        "fechaNacimiento": "1990-06-04",
        "edad": 35,
        "salario": 4348525,
        "direccion": "8783 Erin Ranch Apt. 878, Christianshire, AR 72282",
        "telefono": "9822587139"
    },
    {
        "id": "6312677666845499",
        "apellidos": "Anderson Perry",
        "nombres": "Sean Brian",
        "fechaNacimiento": "1997-11-02",
        "edad": 27,
        "salario": 9576264,
        "direccion": "406 Velasquez Summit Apt. 910, Cooperland, AR 09547",
        "telefono": "0462265676"
    },
    {
        "id": "9982668157625169",
        "apellidos": "Wilson Haney",
        "nombres": "Dean Michelle",
        "fechaNacimiento": "1986-03-18",
        "edad": 39,
        "salario": 7779893,
        "direccion": "04786 Morrow Gateway, Reedview, VA 15291",
        "telefono": "6903311907"
    },
    {
        "id": "1739268797239062",
        "apellidos": "Young",
        "nombres": "Joy Richard",
        "fechaNacimiento": "1974-04-01",
        "edad": 51,
        "salario": 7948518,
        "direccion": "84395 Young Wells, Lake Adriana, ME 36565",
        "telefono": "8926870568"
    },
    {
        "id": "8650989639744026",
        "apellidos": "Bennett Webster",
        "nombres": "Edward",
        "fechaNacimiento": "1991-09-08",
        "edad": 33,
        "salario": 4075823,
        "direccion": "2708 Faulkner Point, South John, MA 85266",
        "telefono": "7518304699"
    },
    {
        "id": "1012842127691853",
        "apellidos": "Powers Robinson",
        "nombres": "Linda Briana",
        "fechaNacimiento": "1973-09-04",
        "edad": 51,
        "salario": 4328582,
        "direccion": "0331 Rocha Square Apt. 638, Kimberlyfurt, ND 85530",
        "telefono": "4458771753"
    },
    {
        "id": "2511152695298170",
        "apellidos": "Figueroa Smith",
        "nombres": "Brandon Michelle",
        "fechaNacimiento": "1997-02-11",
        "edad": 28,
        "salario": 8839754,
        "direccion": "USCGC Phillips, FPO AE 43737",
        "telefono": "6937854777"
    },
    {
        "id": "8919839993694111",
        "apellidos": "Payne",
        "nombres": "Donald",
        "fechaNacimiento": "1971-12-27",
        "edad": 53,
        "salario": 3067221,
        "direccion": "PSC 8080, Box 1006, APO AE 83168",
        "telefono": "1203875099"
    },
    {
        "id": "2453798436933988",
        "apellidos": "Smith",
        "nombres": "Adam Andrea",
        "fechaNacimiento": "1995-06-28",
        "edad": 29,
        "salario": 5479285,
        "direccion": "86211 John River Suite 546, West Susanmouth, IA 91889",
        "telefono": "4101666870"
    },
    {
        "id": "1798610169169639",
        "apellidos": "Mueller Knight",
        "nombres": "Vincent Ryan",
        "fechaNacimiento": "1965-12-14",
        "edad": 59,
        "salario": 6991048,
        "direccion": "PSC 0339, Box 7401, APO AP 37250",
        "telefono": "2503926142"
    },
    {
        "id": "2694649579338131",
        "apellidos": "Price Mosley",
        "nombres": "Mary",
        "fechaNacimiento": "1982-01-14",
        "edad": 43,
        "salario": 2870163,
        "direccion": "185 Connor Fort, West Cassiefurt, MD 04384",
        "telefono": "7735866296"
    },
    {
        "id": "2250687518115222",
        "apellidos": "Miller Moore",
        "nombres": "Lauren Jennifer",
        "fechaNacimiento": "2002-08-07",
        "edad": 22,
        "salario": 9283143,
        "direccion": "5110 Wallace Trace Suite 121, South Shane, NY 53984",
        "telefono": "0158199560"
    },
    {
        "id": "1863212363286557",
        "apellidos": "Hansen Haney",
        "nombres": "Kimberly Jenny",
        "fechaNacimiento": "1975-12-25",
        "edad": 49,
        "salario": 8341951,
        "direccion": "622 Turner Park, North Gary, MT 39790",
        "telefono": "1543799371"
    },
    {
        "id": "1411623092054734",
        "apellidos": "Oliver Brock",
        "nombres": "Stacy Martin",
        "fechaNacimiento": "1981-11-20",
        "edad": 43,
        "salario": 2438550,
        "direccion": "924 Morrison Square Apt. 752, Novakport, UT 83456",
        "telefono": "9356465193"
    },
    {
        "id": "5536605074713297",
        "apellidos": "Benton Murray",
        "nombres": "Erin Andrea",
        "fechaNacimiento": "1973-09-23",
        "edad": 51,
        "salario": 3134338,
        "direccion": "167 Cynthia Garden Suite 266, South Vickifort, MO 70541",
        "telefono": "8058911352"
    },
    {
        "id": "3728961224972069",
        "apellidos": "Ross Goodwin",
        "nombres": "Tonya Erica",
        "fechaNacimiento": "1988-10-03",
        "edad": 36,
        "salario": 7374220,
        "direccion": "3888 Sean Lock, Bartonshire, NY 20259",
        "telefono": "0714611254"
    },
    {
        "id": "7256960915969052",
        "apellidos": "Davis",
        "nombres": "Adriana Michael",
        "fechaNacimiento": "2006-11-17",
        "edad": 18,
        "salario": 6667795,
        "direccion": "0105 Erica Expressway, New Greg, MA 73881",
        "telefono": "7362266093"
    },
    {
        "id": "1295586307629722",
        "apellidos": "Harris",
        "nombres": "Paul Janet",
        "fechaNacimiento": "2007-05-10",
        "edad": 18,
        "salario": 4202382,
        "direccion": "182 Nguyen Mount, West Emilyfort, SC 41579",
        "telefono": "9691557924"
    },
    {
        "id": "8187675189299746",
        "apellidos": "Allen",
        "nombres": "Emily Lawrence",
        "fechaNacimiento": "1967-06-03",
        "edad": 58,
        "salario": 9651003,
        "direccion": "669 Bailey Manors, South Cynthia, SD 23207",
        "telefono": "7422579050"
    },
    {
        "id": "6023055752767500",
        "apellidos": "Wagner Simpson",
        "nombres": "Lisa Tamara",
        "fechaNacimiento": "2006-01-21",
        "edad": 19,
        "salario": 2411232,
        "direccion": "2190 Kelly Harbor Apt. 842, Cunninghamfort, NY 15339",
        "telefono": "4858078361"
    },
    {
        "id": "2788743310649902",
        "apellidos": "Bailey Montoya",
        "nombres": "Shannon",
        "fechaNacimiento": "1989-05-05",
        "edad": 36,
        "salario": 2824078,
        "direccion": "39596 Christina Tunnel, Port Jamie, OK 46483",
        "telefono": "9825449481"
    },
    {
        "id": "0066047733337879",
        "apellidos": "Camacho Martinez",
        "nombres": "Victoria",
        "fechaNacimiento": "1968-06-29",
        "edad": 56,
        "salario": 9269106,
        "direccion": "67294 Brooks Club Apt. 684, Shawnfort, OR 00825",
        "telefono": "7518636374"
    },
    {
        "id": "2652003090548302",
        "apellidos": "Phelps Kramer",
        "nombres": "Amy David",
        "fechaNacimiento": "2005-11-28",
        "edad": 19,
        "salario": 5409579,
        "direccion": "70127 Smith Meadow, Lake Regina, SD 40067",
        "telefono": "4154152064"
    },
    {
        "id": "9026067252949213",
        "apellidos": "Woods Anderson",
        "nombres": "Jane Aaron",
        "fechaNacimiento": "1974-11-09",
        "edad": 50,
        "salario": 4294633,
        "direccion": "05162 Jones Lights Apt. 115, Nicoleberg, WI 99218",
        "telefono": "2189092753"
    },
    {
        "id": "3064575583746684",
        "apellidos": "Miller",
        "nombres": "Glenda Michelle",
        "fechaNacimiento": "1966-04-20",
        "edad": 59,
        "salario": 5177824,
        "direccion": "656 Moody Gateway, Deannabury, PA 79145",
        "telefono": "0438983640"
    },
    {
        "id": "4252169859840140",
        "apellidos": "Wheeler Rice",
        "nombres": "Daniel Victor",
        "fechaNacimiento": "1960-04-13",
        "edad": 65,
        "salario": 4458435,
        "direccion": "Unit 5269 Box 6582, DPO AA 10068",
        "telefono": "9104300684"
    },
    {
        "id": "8359102152992215",
        "apellidos": "Miller Herrera",
        "nombres": "Jacqueline",
        "fechaNacimiento": "2001-05-20",
        "edad": 24,
        "salario": 3230847,
        "direccion": "1832 Myers Roads, West Hollybury, IA 11801",
        "telefono": "1799042102"
    },
    {
        "id": "7690823708332884",
        "apellidos": "Logan Le",
        "nombres": "Stephanie Alexandra",
        "fechaNacimiento": "1970-10-28",
        "edad": 54,
        "salario": 6668564,
        "direccion": "105 Nelson Circles Suite 917, Dixonton, OK 22374",
        "telefono": "2419138000"
    },
    {
        "id": "9441407873698602",
        "apellidos": "White Horne",
        "nombres": "Michael Samantha",
        "fechaNacimiento": "1961-11-13",
        "edad": 63,
        "salario": 4532553,
        "direccion": "53654 Ashley Crest Apt. 238, South Caseymouth, LA 41224",
        "telefono": "1870534949"
    },
    {
        "id": "7585847703339588",
        "apellidos": "Snyder",
        "nombres": "Brittany",
        "fechaNacimiento": "1972-10-05",
        "edad": 52,
        "salario": 8920112,
        "direccion": "06038 Fields Square, West Aaronfurt, WA 95818",
        "telefono": "1383670241"
    },
    {
        "id": "6959394172665099",
        "apellidos": "Huang Ellis",
        "nombres": "Robert",
        "fechaNacimiento": "1965-03-29",
        "edad": 60,
        "salario": 9650791,
        "direccion": "619 Ryan Curve, West Jose, MO 92346",
        "telefono": "5743132912"
    },
    {
        "id": "1469752215389440",
        "apellidos": "Herrera",
        "nombres": "Steven Richard",
        "fechaNacimiento": "1973-08-04",
        "edad": 51,
        "salario": 1749914,
        "direccion": "1124 Jason Walks Suite 213, Randyton, ME 34601",
        "telefono": "0678831712"
    },
    {
        "id": "8169624270372404",
        "apellidos": "Anderson",
        "nombres": "Maria Toni",
        "fechaNacimiento": "1986-09-21",
        "edad": 38,
        "salario": 5062081,
        "direccion": "941 Wendy Flat, Lambland, MA 16560",
        "telefono": "7029667066"
    },
    {
        "id": "6579116154543174",
        "apellidos": "Hill",
        "nombres": "Rebekah",
        "fechaNacimiento": "1989-10-24",
        "edad": 35,
        "salario": 3188137,
        "direccion": "993 Porter Plaza, Brownview, DC 55450",
        "telefono": "8380657875"
    },
    {
        "id": "6483514082941575",
        "apellidos": "White",
        "nombres": "Paul",
        "fechaNacimiento": "1981-02-28",
        "edad": 44,
        "salario": 9809474,
        "direccion": "0785 Terri Courts, Lake John, WY 97108",
        "telefono": "3965223955"
    },
    {
        "id": "2781584823242350",
        "apellidos": "Hart",
        "nombres": "Stacey Anne",
        "fechaNacimiento": "1972-04-09",
        "edad": 53,
        "salario": 2126093,
        "direccion": "427 Christopher Fort Apt. 087, West Samanthaborough, DC 45164",
        "telefono": "5002921851"
    },
    {
        "id": "5236489401480734",
        "apellidos": "Turner",
        "nombres": "Craig",
        "fechaNacimiento": "1968-09-30",
        "edad": 56,
        "salario": 6765368,
        "direccion": "Unit 6752 Box 8953, DPO AP 77695",
        "telefono": "6442209690"
    },
    {
        "id": "3111124214059821",
        "apellidos": "Walker Cunningham",
        "nombres": "Samantha Tammy",
        "fechaNacimiento": "1993-03-24",
        "edad": 32,
        "salario": 7623297,
        "direccion": "55215 Smith Fords, Lake Carlos, WY 14661",
        "telefono": "0676267658"
    },
    {
        "id": "7886539261683747",
        "apellidos": "Lane",
        "nombres": "Kristina",
        "fechaNacimiento": "2006-03-23",
        "edad": 19,
        "salario": 9531833,
        "direccion": "04054 Charles Extension Suite 218, West Brookefort, AK 57035",
        "telefono": "9620153368"
    },
    {
        "id": "0678695601683425",
        "apellidos": "Davis Long",
        "nombres": "Kenneth",
        "fechaNacimiento": "1996-11-12",
        "edad": 28,
        "salario": 2398961,
        "direccion": "50614 Gonzalez Burg, East Danielle, NJ 15640",
        "telefono": "6774186256"
    },
    {
        "id": "6720650346770788",
        "apellidos": "Baker Hood",
        "nombres": "Bradley Scott",
        "fechaNacimiento": "1997-11-10",
        "edad": 27,
        "salario": 9597686,
        "direccion": "58693 Mary Viaduct, Sheppardfort, IA 62925",
        "telefono": "1608989921"
    },
    {
        "id": "6353309213383684",
        "apellidos": "Martinez",
        "nombres": "Teresa Lindsey",
        "fechaNacimiento": "1988-04-10",
        "edad": 37,
        "salario": 1325893,
        "direccion": "29451 Paul Locks Suite 487, Port Isabellashire, WY 55498",
        "telefono": "6229991191"
    },
    {
        "id": "7373879765849162",
        "apellidos": "Pena",
        "nombres": "Natalie Joseph",
        "fechaNacimiento": "1998-05-22",
        "edad": 27,
        "salario": 3649628,
        "direccion": "46299 Williams Isle, North Julie, KY 49317",
        "telefono": "5444713247"
    },
    {
        "id": "2439090578509982",
        "apellidos": "Davis Alexander",
        "nombres": "Cassidy",
        "fechaNacimiento": "1987-03-04",
        "edad": 38,
        "salario": 3273363,
        "direccion": "82148 Taylor Vista Apt. 233, East Antonioton, MN 92858",
        "telefono": "4578610357"
    },
    {
        "id": "2197254629911437",
        "apellidos": "Arnold Cooper",
        "nombres": "Susan Thomas",
        "fechaNacimiento": "1977-01-24",
        "edad": 48,
        "salario": 7254985,
        "direccion": "0602 Mercedes Rue, Lake Jamie, MT 67777",
        "telefono": "0722903494"
    },
    {
        "id": "2169277507278586",
        "apellidos": "Stevens",
        "nombres": "Melissa",
        "fechaNacimiento": "1974-04-24",
        "edad": 51,
        "salario": 5164178,
        "direccion": "108 Hoffman Ranch Suite 417, West Vanessamouth, KY 34730",
        "telefono": "3283096520"
    },
    {
        "id": "6202708809580450",
        "apellidos": "Doyle Aguilar",
        "nombres": "Rebecca Richard",
        "fechaNacimiento": "1998-05-23",
        "edad": 27,
        "salario": 1087653,
        "direccion": "387 Romero Vista Apt. 824, South Davidview, OH 24496",
        "telefono": "1353465549"
    },
    {
        "id": "9413383229334813",
        "apellidos": "Delacruz",
        "nombres": "Thomas",
        "fechaNacimiento": "1999-03-05",
        "edad": 26,
        "salario": 7762009,
        "direccion": "3816 Gutierrez Ways, East Victoria, MT 75133",
        "telefono": "2521752500"
    },
    {
        "id": "6073676387946715",
        "apellidos": "Jackson Duran",
        "nombres": "Kathleen",
        "fechaNacimiento": "1992-10-11",
        "edad": 32,
        "salario": 3066649,
        "direccion": "96666 Reyes Camp, Lake Nathan, MD 99702",
        "telefono": "0033542168"
    },
    {
        "id": "1214875171316797",
        "apellidos": "Fry Bryant",
        "nombres": "Cameron Brandon",
        "fechaNacimiento": "1994-11-13",
        "edad": 30,
        "salario": 4999453,
        "direccion": "2575 Frederick Valleys Suite 033, East Jessica, NY 22650",
        "telefono": "5064890901"
    },
    {
        "id": "9542546958212930",
        "apellidos": "Kelley Wells",
        "nombres": "Robert Omar",
        "fechaNacimiento": "1969-11-18",
        "edad": 55,
        "salario": 9152143,
        "direccion": "6184 Robert Cove, West Danielville, ID 80324",
        "telefono": "4835642087"
    },
    {
        "id": "6498492039906622",
        "apellidos": "Davis",
        "nombres": "Jimmy Alexander",
        "fechaNacimiento": "1966-12-23",
        "edad": 58,
        "salario": 6727774,
        "direccion": "18114 Stephen Hill Suite 701, Port Benjamin, MN 89206",
        "telefono": "6110022557"
    },
    {
        "id": "2108592918386995",
        "apellidos": "Cooper",
        "nombres": "Nathan",
        "fechaNacimiento": "1967-03-18",
        "edad": 58,
        "salario": 4077191,
        "direccion": "6762 David Stream Apt. 216, Phammouth, RI 50275",
        "telefono": "9027716701"
    },
    {
        "id": "9416212770717167",
        "apellidos": "Saunders",
        "nombres": "Janet Erica",
        "fechaNacimiento": "1998-09-14",
        "edad": 26,
        "salario": 2517138,
        "direccion": "588 Ryan Stream, South Michael, SD 50947",
        "telefono": "8900287721"
    },
    {
        "id": "8637748335108755",
        "apellidos": "Hunter Pierce",
        "nombres": "Mark Joshua",
        "fechaNacimiento": "1985-03-25",
        "edad": 40,
        "salario": 7374667,
        "direccion": "77971 West Crest, Mcgeetown, MO 54547",
        "telefono": "8801994883"
    },
    {
        "id": "5225369264180515",
        "apellidos": "Velasquez Richard",
        "nombres": "Marcia",
        "fechaNacimiento": "1982-01-20",
        "edad": 43,
        "salario": 4306063,
        "direccion": "571 Katherine Forges Apt. 554, Jacquelineton, GA 65043",
        "telefono": "6149331637"
    },
    {
        "id": "aa25369264180515",
        "apellidos": "Vargas Vega",
        "nombres": "Javier Armando",
        "fechaNacimiento": "1973-11-16",
        "edad": 51,
        "salario": 9875000,
        "direccion": "Calle 15 2 83 E",
        "telefono": "3174344497"
    }
]
