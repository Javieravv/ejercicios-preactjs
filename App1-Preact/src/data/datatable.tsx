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
        width: "250px",
        sortable: true,
        visible: true
    },
    {
        label: "Dirección",
        key: "direccion",
        width: "450px",
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
        "id": "1120738817095106",
        "apellidos": "Hill Walker",
        "nombres": "Danielle Angel",
        "fechaNacimiento": "1966-12-22",
        "direccion": "600 Jeffery Parkways, New Jamesside, IN 59379",
        "telefono": "0265423511"
    },
    {
        "id": "3388869242324289",
        "apellidos": "Roman Blair",
        "nombres": "Melanie Cassandra",
        "fechaNacimiento": "1996-06-28",
        "direccion": "84959 Janet Cape Apt. 413, South Joshuastad, MN 47067",
        "telefono": "4192832764"
    },
    {
        "id": "9510588946797790",
        "apellidos": "Perez Johnson",
        "nombres": "Megan Kimberly",
        "fechaNacimiento": "1981-06-19",
        "direccion": "95376 Thomas Dam, Lake Anna, WA 77123",
        "telefono": "9653287101"
    },
    {
        "id": "6934300000742731",
        "apellidos": "Carlson Mcdonald",
        "nombres": "Candace Paul",
        "fechaNacimiento": "1977-02-08",
        "direccion": "Unit 0184 Box 5146, DPO AE 59971",
        "telefono": "4828148932"
    },
    {
        "id": "7928012349017536",
        "apellidos": "Nielsen Sellers",
        "nombres": "Stephanie",
        "fechaNacimiento": "2000-10-03",
        "direccion": "54303 Christopher Oval, Port Amandaberg, TN 62797",
        "telefono": "4896383465"
    },
    {
        "id": "4314598401403209",
        "apellidos": "Morgan Chapman",
        "nombres": "David Jeffrey",
        "fechaNacimiento": "1975-08-29",
        "direccion": "03105 Willie Harbors, Lewisberg, OK 76026",
        "telefono": "3763116566"
    },
    {
        "id": "2400384725716009",
        "apellidos": "Mcbride",
        "nombres": "Bruce Jessica",
        "fechaNacimiento": "1967-06-08",
        "direccion": "726 Joshua Gateway, South Lindseyside, AR 85978",
        "telefono": "1326773602"
    },
    {
        "id": "5649748150219990",
        "apellidos": "Bowers",
        "nombres": "Joseph",
        "fechaNacimiento": "1990-12-18",
        "direccion": "34309 Julie Centers Apt. 978, North Susan, HI 09482",
        "telefono": "3619399091"
    },
    {
        "id": "9708861301506613",
        "apellidos": "Harris Moran",
        "nombres": "Alexandra Sarah",
        "fechaNacimiento": "1976-03-29",
        "direccion": "475 Albert Road, North Amandahaven, DC 46246",
        "telefono": "3542784980"
    },
    {
        "id": "2403098325744811",
        "apellidos": "Wilson Rodriguez",
        "nombres": "Sheila Dennis",
        "fechaNacimiento": "1997-08-24",
        "direccion": "353 Wagner Glen Apt. 164, North Matthewberg, KS 21679",
        "telefono": "8680112805"
    },
    {
        "id": "9441447054468253",
        "apellidos": "Diaz",
        "nombres": "Russell Bobby",
        "fechaNacimiento": "1962-09-18",
        "direccion": "PSC 3315, Box 8692, APO AE 21800",
        "telefono": "6025634216"
    },
    {
        "id": "3323285656267325",
        "apellidos": "Sellers Bailey",
        "nombres": "James",
        "fechaNacimiento": "1975-06-27",
        "direccion": "5414 May Locks, Sheilaville, KS 23906",
        "telefono": "0196556981"
    },
    {
        "id": "8171765419470283",
        "apellidos": "Smith Frost",
        "nombres": "Jonathan Jeanne",
        "fechaNacimiento": "1996-08-22",
        "direccion": "6159 Alvarado Crossing, Williamchester, MO 91885",
        "telefono": "8236629946"
    },
    {
        "id": "8025891480098836",
        "apellidos": "Jordan Carpenter",
        "nombres": "Justin",
        "fechaNacimiento": "2004-07-20",
        "direccion": "3872 Justin Shore Suite 134, Port James, AZ 32593",
        "telefono": "9176936763"
    },
    {
        "id": "6780701853918757",
        "apellidos": "Brock Dominguez",
        "nombres": "Kimberly Jeffery",
        "fechaNacimiento": "1991-08-12",
        "direccion": "72788 Dodson Mills, Rivasside, GA 97973",
        "telefono": "7434873471"
    },
    {
        "id": "7704578968167366",
        "apellidos": "Orozco",
        "nombres": "Matthew",
        "fechaNacimiento": "1965-06-25",
        "direccion": "2316 Rivera Mountain, Brownchester, WI 77057",
        "telefono": "9670546688"
    },
    {
        "id": "6936924687755195",
        "apellidos": "Johnson Rogers",
        "nombres": "Jeffrey Ryan",
        "fechaNacimiento": "1987-07-07",
        "direccion": "98069 Christopher Meadow Apt. 720, Nicholasborough, MD 44737",
        "telefono": "4641708053"
    },
    {
        "id": "9725737594167685",
        "apellidos": "Gonzalez Smith",
        "nombres": "Stefanie",
        "fechaNacimiento": "1970-05-15",
        "direccion": "193 Lyons Trafficway Suite 299, Port Loriport, OR 03866",
        "telefono": "9663193149"
    },
    {
        "id": "4510597578761511",
        "apellidos": "Patterson Wood",
        "nombres": "Michael",
        "fechaNacimiento": "1994-06-06",
        "direccion": "7165 Zimmerman Mews, Lake Aimee, KY 81229",
        "telefono": "7694531473"
    },
    {
        "id": "1608436903974513",
        "apellidos": "Snyder",
        "nombres": "Elizabeth Matthew",
        "fechaNacimiento": "1982-02-12",
        "direccion": "4549 Peters Path, North John, NM 73269",
        "telefono": "7770143634"
    },
    {
        "id": "0379393434396251",
        "apellidos": "Cooper",
        "nombres": "Angela",
        "fechaNacimiento": "1997-06-14",
        "direccion": "4431 Leslie Summit Apt. 337, Jennyhaven, LA 13677",
        "telefono": "4352408240"
    },
    {
        "id": "9731992789833626",
        "apellidos": "Oneill Henry",
        "nombres": "Heidi David",
        "fechaNacimiento": "1960-10-31",
        "direccion": "7520 Everett Neck Apt. 167, New Crystalton, FL 74273",
        "telefono": "1318699938"
    },
    {
        "id": "8996710016345663",
        "apellidos": "Chapman",
        "nombres": "Kenneth",
        "fechaNacimiento": "1989-03-07",
        "direccion": "133 Guerrero Estate, East Andrea, AL 54046",
        "telefono": "9740344713"
    },
    {
        "id": "4560259880411591",
        "apellidos": "Stephens",
        "nombres": "Ronald",
        "fechaNacimiento": "2004-01-27",
        "direccion": "10249 Gonzales Mountain Suite 648, Kimton, NE 96777",
        "telefono": "9401399049"
    },
    {
        "id": "7543625251175147",
        "apellidos": "Ramos",
        "nombres": "April",
        "fechaNacimiento": "1978-12-05",
        "direccion": "717 Ortiz Islands Apt. 256, Robertsfurt, WV 72603",
        "telefono": "7154516808"
    },
    {
        "id": "4793443173959635",
        "apellidos": "Avila Garrett",
        "nombres": "Jacob Michael",
        "fechaNacimiento": "1963-07-06",
        "direccion": "7710 Jennifer Inlet, New Rickybury, DE 60983",
        "telefono": "2748467737"
    },
    {
        "id": "7744372418611812",
        "apellidos": "Francis Taylor",
        "nombres": "James Carol",
        "fechaNacimiento": "1964-10-01",
        "direccion": "8404 Monroe Prairie Suite 278, Reedside, ND 49942",
        "telefono": "5339636057"
    },
    {
        "id": "7383678644822255",
        "apellidos": "Shaw Lawrence",
        "nombres": "Tyler Benjamin",
        "fechaNacimiento": "1966-10-30",
        "direccion": "87026 Charles Tunnel Suite 596, Port Markside, MD 82656",
        "telefono": "8091343161"
    },
    {
        "id": "6707293451289741",
        "apellidos": "Williams Flynn",
        "nombres": "Heather Rebecca",
        "fechaNacimiento": "1979-12-18",
        "direccion": "38692 Gregory Ridge Suite 937, East Steven, NH 33967",
        "telefono": "7482175946"
    },
    {
        "id": "9619387204529802",
        "apellidos": "Cruz Webb",
        "nombres": "James",
        "fechaNacimiento": "1976-02-21",
        "direccion": "440 Hill Port Apt. 974, New Laurie, SC 25421",
        "telefono": "2104709521"
    },
    {
        "id": "0962932385373375",
        "apellidos": "Ryan Mata",
        "nombres": "Gregory David",
        "fechaNacimiento": "1996-02-15",
        "direccion": "47451 Mccarty Divide Apt. 685, Port Ralphview, DE 60110",
        "telefono": "4965137098"
    },
    {
        "id": "9713637868404403",
        "apellidos": "Marshall",
        "nombres": "Deborah Cynthia",
        "fechaNacimiento": "1980-07-24",
        "direccion": "00471 Jimmy Plain, South Shawn, WA 91790",
        "telefono": "9261796405"
    },
    {
        "id": "5807020607100950",
        "apellidos": "Garcia",
        "nombres": "Stephanie Melissa",
        "fechaNacimiento": "1984-12-30",
        "direccion": "64317 Elizabeth Row Apt. 053, Port Anne, WV 73142",
        "telefono": "9335290422"
    },
    {
        "id": "8822522799801372",
        "apellidos": "Anderson Howard",
        "nombres": "Daniel Michelle",
        "fechaNacimiento": "1976-03-10",
        "direccion": "40268 Julie Mountains, Stricklandhaven, CT 59746",
        "telefono": "9084700766"
    },
    {
        "id": "3919116014208171",
        "apellidos": "Miller Franklin",
        "nombres": "Charles",
        "fechaNacimiento": "1964-06-20",
        "direccion": "9847 Garcia Squares Apt. 836, Beasleychester, NH 52763",
        "telefono": "1565452711"
    },
    {
        "id": "0782573391098718",
        "apellidos": "Cain Hawkins",
        "nombres": "Colin Joanne",
        "fechaNacimiento": "1999-11-28",
        "direccion": "USNV Santiago, FPO AA 46847",
        "telefono": "0494519832"
    },
    {
        "id": "7114277996370763",
        "apellidos": "Hawkins Wilson",
        "nombres": "Michael",
        "fechaNacimiento": "1978-12-15",
        "direccion": "998 Chelsea Shoals Suite 024, Sandrastad, HI 19277",
        "telefono": "1201836675"
    },
    {
        "id": "4539951966764391",
        "apellidos": "Frank Bradley",
        "nombres": "Jennifer",
        "fechaNacimiento": "1965-10-12",
        "direccion": "90147 Tucker Mills, Nelsonhaven, MI 56850",
        "telefono": "4978403690"
    },
    {
        "id": "4726418284130763",
        "apellidos": "Duran Roberts",
        "nombres": "Sierra Katrina",
        "fechaNacimiento": "1968-03-01",
        "direccion": "26838 Jones Wall Apt. 607, Port Lawrencechester, MO 93496",
        "telefono": "4160529751"
    },
    {
        "id": "0377072361790943",
        "apellidos": "Miller Harrell",
        "nombres": "Ryan Richard",
        "fechaNacimiento": "1983-02-07",
        "direccion": "81883 Bell Viaduct, East Curtis, ID 23241",
        "telefono": "1277997995"
    },
    {
        "id": "3978960717267352",
        "apellidos": "Turner Hill",
        "nombres": "Carlos Scott",
        "fechaNacimiento": "1963-10-28",
        "direccion": "7700 Decker Club, New Brookefurt, OR 73156",
        "telefono": "7935978207"
    },
    {
        "id": "4848195175897891",
        "apellidos": "Wright",
        "nombres": "William Gerald",
        "fechaNacimiento": "1989-10-15",
        "direccion": "Unit 8892 Box 5546, DPO AA 44851",
        "telefono": "5151864492"
    },
    {
        "id": "3030505532200482",
        "apellidos": "Rangel Collins",
        "nombres": "Elizabeth",
        "fechaNacimiento": "2004-08-23",
        "direccion": "91486 Li Skyway Apt. 685, West Kyleborough, WI 64237",
        "telefono": "3221418880"
    },
    {
        "id": "0768024202182783",
        "apellidos": "Moore White",
        "nombres": "Carla",
        "fechaNacimiento": "2002-07-07",
        "direccion": "706 Rhodes Freeway, Bishopmouth, ND 31849",
        "telefono": "7359774688"
    },
    {
        "id": "1376507102511424",
        "apellidos": "Taylor",
        "nombres": "Laurie",
        "fechaNacimiento": "1977-01-04",
        "direccion": "8181 Miller Estates Suite 782, Davisbury, NV 46321",
        "telefono": "6068536153"
    },
    {
        "id": "0083652162439695",
        "apellidos": "Santos Moody",
        "nombres": "Mary",
        "fechaNacimiento": "1969-05-13",
        "direccion": "277 Rebecca Brook Suite 328, Rodriguezport, ME 16471",
        "telefono": "3697117980"
    },
    {
        "id": "4708718687170918",
        "apellidos": "Smith",
        "nombres": "Jennifer Kelly",
        "fechaNacimiento": "1984-01-04",
        "direccion": "18518 Peter Mountains Apt. 654, West Kristinastad, VA 86628",
        "telefono": "9520585277"
    },
    {
        "id": "3642189176111288",
        "apellidos": "Johnson Harris",
        "nombres": "Jennifer Sherry",
        "fechaNacimiento": "1973-07-28",
        "direccion": "8687 Johnson Rue Apt. 450, Joshuastad, MO 97927",
        "telefono": "6527758416"
    },
    {
        "id": "9212333693184780",
        "apellidos": "White",
        "nombres": "Wanda",
        "fechaNacimiento": "1979-12-28",
        "direccion": "4479 Jackson Mills, Sergiostad, NE 36487",
        "telefono": "1658202970"
    },
    {
        "id": "8933436487738694",
        "apellidos": "Diaz Reyes",
        "nombres": "Kimberly",
        "fechaNacimiento": "1998-08-07",
        "direccion": "755 Hines Ports, New Michael, SD 37029",
        "telefono": "1027868144"
    },
    {
        "id": "5870359328405638",
        "apellidos": "Henry Martinez",
        "nombres": "Justin Sabrina",
        "fechaNacimiento": "1965-01-14",
        "direccion": "55188 Vance Vista Apt. 258, North Tracie, DC 31530",
        "telefono": "0589578291"
    },
    {
        "id": "5321246513590903",
        "apellidos": "Fox Hammond",
        "nombres": "Yvonne Jennifer",
        "fechaNacimiento": "1999-02-14",
        "direccion": "177 Anderson Village Apt. 268, Port Davidberg, GA 21730",
        "telefono": "3584143842"
    },
    {
        "id": "0389149762646982",
        "apellidos": "Vargas",
        "nombres": "Clarence Danielle",
        "fechaNacimiento": "1999-07-07",
        "direccion": "001 Stacy Trail Suite 396, South Pamelaside, SD 40097",
        "telefono": "3647102767"
    },
    {
        "id": "1881401852463305",
        "apellidos": "Higgins Gross",
        "nombres": "Catherine Larry",
        "fechaNacimiento": "1983-07-03",
        "direccion": "Unit 2588 Box 1537, DPO AE 35559",
        "telefono": "3210469632"
    },
    {
        "id": "8128143341836350",
        "apellidos": "Moore Ferrell",
        "nombres": "James",
        "fechaNacimiento": "1991-10-07",
        "direccion": "0168 Levy Forge Suite 004, Harperfort, ND 01572",
        "telefono": "6245650609"
    },
    {
        "id": "0175019221226942",
        "apellidos": "Gordon Duran",
        "nombres": "Angela Charles",
        "fechaNacimiento": "1979-01-13",
        "direccion": "16558 Fischer Flat, Porterton, DC 94032",
        "telefono": "7872982595"
    },
    {
        "id": "8168906758482821",
        "apellidos": "Evans Rogers",
        "nombres": "Jodi",
        "fechaNacimiento": "1994-09-08",
        "direccion": "0551 Silva Underpass Apt. 974, Lake Brett, GA 69213",
        "telefono": "2309130756"
    },
    {
        "id": "0055116714223193",
        "apellidos": "Knapp",
        "nombres": "Robert Kimberly",
        "fechaNacimiento": "1964-03-28",
        "direccion": "578 Edwards Extensions, Barrmouth, MI 89088",
        "telefono": "9733484344"
    },
    {
        "id": "4454441173721279",
        "apellidos": "Castro",
        "nombres": "Timothy",
        "fechaNacimiento": "1978-08-10",
        "direccion": "5240 Moses Common Suite 747, East Maria, OH 91749",
        "telefono": "2199330833"
    },
    {
        "id": "1221676480739762",
        "apellidos": "Maldonado",
        "nombres": "Mark Thomas",
        "fechaNacimiento": "1969-05-09",
        "direccion": "7734 Mitchell Circle, Lake Audreyside, VA 05389",
        "telefono": "6206724004"
    },
    {
        "id": "0502322830908617",
        "apellidos": "Gibson Davidson",
        "nombres": "Sarah Matthew",
        "fechaNacimiento": "1995-09-06",
        "direccion": "743 Mark Street, Wongburgh, WA 44686",
        "telefono": "9329668516"
    },
    {
        "id": "1153630578654370",
        "apellidos": "Boyle Smith",
        "nombres": "Thomas",
        "fechaNacimiento": "1986-02-06",
        "direccion": "4990 Valdez Square Apt. 017, Erikhaven, VT 41261",
        "telefono": "4593327279"
    },
    {
        "id": "1584017592553040",
        "apellidos": "Todd",
        "nombres": "Roberta",
        "fechaNacimiento": "1974-11-11",
        "direccion": "785 Samantha Creek, Port Amyhaven, OK 70842",
        "telefono": "2587139718"
    },
    {
        "id": "1833345442012462",
        "apellidos": "Perry Elliott",
        "nombres": "David",
        "fechaNacimiento": "1998-01-09",
        "direccion": "064 Julie Prairie Apt. 065, New Virginialand, AZ 38130",
        "telefono": "2265676618"
    },
    {
        "id": "0782349170513150",
        "apellidos": "Rice Luna",
        "nombres": "Gregory Amanda",
        "fechaNacimiento": "1975-02-25",
        "direccion": "7868 Morrow Gateway, Reedview, VA 15291",
        "telefono": "6903311907"
    },
    {
        "id": "6133020426758175",
        "apellidos": "Morales Young",
        "nombres": "Joy",
        "fechaNacimiento": "1974-10-14",
        "direccion": "84395 Young Wells, Lake Adriana, ME 36565",
        "telefono": "8926870568"
    },
    {
        "id": "5110058641354945",
        "apellidos": "Bennett Webster",
        "nombres": "Edward",
        "fechaNacimiento": "1992-03-22",
        "direccion": "2708 Faulkner Point, South John, MA 85266",
        "telefono": "7518304699"
    },
    {
        "id": "2522785147418181",
        "apellidos": "Powers",
        "nombres": "Linda Briana",
        "fechaNacimiento": "1974-10-07",
        "direccion": "0331 Rocha Square Apt. 638, Kimberlyfurt, ND 85530",
        "telefono": "4458771753"
    },
    {
        "id": "4816110921469878",
        "apellidos": "Figueroa Smith",
        "nombres": "Brandon Michelle",
        "fechaNacimiento": "1997-08-26",
        "direccion": "USCGC Phillips, FPO AE 43737",
        "telefono": "6937854777"
    },
    {
        "id": "5050573131851856",
        "apellidos": "White",
        "nombres": "Donald Amy",
        "fechaNacimiento": "1996-11-21",
        "direccion": "Unit 0801 Box 0062, DPO AP 30835",
        "telefono": "2038750997"
    },
    {
        "id": "4999260659476267",
        "apellidos": "Smith Bowen",
        "nombres": "Amanda Robert",
        "fechaNacimiento": "1996-06-15",
        "direccion": "Unit 0862 Box 1182, DPO AE 25657",
        "telefono": "5461567933"
    },
    {
        "id": "9005906607981847",
        "apellidos": "Gray Tran",
        "nombres": "Clayton",
        "fechaNacimiento": "1963-10-26",
        "direccion": "76591 Jerry Ways, Nelsonland, KY 71677",
        "telefono": "2503926142"
    },
    {
        "id": "8037026359868395",
        "apellidos": "Mosley",
        "nombres": "Mary Paul",
        "fechaNacimiento": "1982-07-29",
        "direccion": "185 Connor Fort, West Cassiefurt, MD 04384",
        "telefono": "7735866296"
    },
    {
        "id": "2429155470869835",
        "apellidos": "Marquez",
        "nombres": "Lauren",
        "fechaNacimiento": "1965-08-01",
        "direccion": "265 Rodriguez Avenue Suite 754, East Christopherchester, OH 73211",
        "telefono": "1015819956"
    },
    {
        "id": "7071556373414541",
        "apellidos": "Miller",
        "nombres": "Paul",
        "fechaNacimiento": "1998-01-28",
        "direccion": "PSC 3982, Box 6224, APO AA 35681",
        "telefono": "2126464715"
    },
    {
        "id": "5541495598328304",
        "apellidos": "Gonzalez Rodriguez",
        "nombres": "Brittney",
        "fechaNacimiento": "1980-09-24",
        "direccion": "9657 Jordan View Apt. 459, South Leon, MD 38701",
        "telefono": "9356465193"
    },
    {
        "id": "7238877561560444",
        "apellidos": "Benton",
        "nombres": "Erin Andrea",
        "fechaNacimiento": "1991-05-31",
        "direccion": "USNS Gonzales, FPO AA 91312",
        "telefono": "6724342661"
    },
    {
        "id": "9056441780715721",
        "apellidos": "Mclean Kane",
        "nombres": "Brandi Amanda",
        "fechaNacimiento": "1988-06-18",
        "direccion": "891 Kayla Shoals Suite 290, Rasmussenmouth, NE 14387",
        "telefono": "1438889937"
    },
    {
        "id": "8773216963657686",
        "apellidos": "Chapman Mason",
        "nombres": "Kelsey",
        "fechaNacimiento": "1983-06-23",
        "direccion": "Unit 7146 Box 1125, DPO AA 45467",
        "telefono": "3875717751"
    },
    {
        "id": "0401520511374101",
        "apellidos": "Rodriguez Marsh",
        "nombres": "Andrew Matthew",
        "fechaNacimiento": "1976-08-06",
        "direccion": "8673 Soto Ferry, Fosterborough, OR 56803",
        "telefono": "0334191825"
    },
    {
        "id": "1360961227559169",
        "apellidos": "Lambert Burns",
        "nombres": "Daniel",
        "fechaNacimiento": "2003-06-29",
        "direccion": "691 Bell Mount Apt. 499, Lake Dennisville, ME 15829",
        "telefono": "5286692966"
    },
    {
        "id": "7535814153023174",
        "apellidos": "Brewer",
        "nombres": "Heather",
        "fechaNacimiento": "1971-10-15",
        "direccion": "2257 Michelle Branch Suite 236, Ortizfort, VT 58677",
        "telefono": "2190340438"
    },
    {
        "id": "6709528105723290",
        "apellidos": "Barton",
        "nombres": "Ariel",
        "fechaNacimiento": "1993-09-15",
        "direccion": "148 Weaver Throughway, Port Jenniferside, NE 13924",
        "telefono": "4074517133"
    },
    {
        "id": "1549500512212148",
        "apellidos": "Taylor Clark",
        "nombres": "Cynthia Gabriel",
        "fechaNacimiento": "1974-01-30",
        "direccion": "498 Mario Squares Suite 494, East Sydneychester, AR 36850",
        "telefono": "2325367294"
    },
    {
        "id": "1562970700416103",
        "apellidos": "Mack",
        "nombres": "Charles Laura",
        "fechaNacimiento": "1987-05-31",
        "direccion": "577 Perkins Ways Apt. 751, Robinsonchester, IL 65344",
        "telefono": "5458929750"
    },
    {
        "id": "9167288851659202",
        "apellidos": "Moore Bryant",
        "nombres": "Allen Sarah",
        "fechaNacimiento": "1989-02-10",
        "direccion": "424 Diamond Glen, West Elizabethburgh, MO 82500",
        "telefono": "3611037129"
    },
    {
        "id": "9130230660146656",
        "apellidos": "Montoya",
        "nombres": "Albert Heather",
        "fechaNacimiento": "1988-09-26",
        "direccion": "36111 Richardson Hills Apt. 622, New Annaburgh, MI 95191",
        "telefono": "2697311219"
    },
    {
        "id": "7979222008332338",
        "apellidos": "Hill Miller",
        "nombres": "Leonard Donald",
        "fechaNacimiento": "1997-08-28",
        "direccion": "043 Julie Hill Apt. 376, East Victorland, AL 47830",
        "telefono": "2696582710"
    },
    {
        "id": "3009367252307406",
        "apellidos": "Williams",
        "nombres": "Jose",
        "fechaNacimiento": "1964-02-11",
        "direccion": "USCGC Hunter, FPO AP 93906",
        "telefono": "6618892414"
    },
    {
        "id": "2320526991554927",
        "apellidos": "Murphy Willis",
        "nombres": "Terri Eric",
        "fechaNacimiento": "2004-03-21",
        "direccion": "6303 Sandy Crescent, Salazarton, TN 97716",
        "telefono": "1020275884"
    },
    {
        "id": "4227013116537396",
        "apellidos": "Marks Quinn",
        "nombres": "Kara",
        "fechaNacimiento": "1968-01-13",
        "direccion": "6481 Joseph Ports, South Spencerstad, NM 74803",
        "telefono": "5241913800"
    },
    {
        "id": "1725292270973444",
        "apellidos": "Hernandez Velazquez",
        "nombres": "Thomas Patrick",
        "fechaNacimiento": "1962-05-28",
        "direccion": "53654 Ashley Crest Apt. 238, South Caseymouth, LA 41224",
        "telefono": "1870534949"
    },
    {
        "id": "1614550216379538",
        "apellidos": "Barton Gonzalez",
        "nombres": "Brittany Trevor",
        "fechaNacimiento": "1997-03-11",
        "direccion": "06038 Fields Square, West Aaronfurt, WA 95818",
        "telefono": "1383670241"
    },
    {
        "id": "2367647387784908",
        "apellidos": "Huang",
        "nombres": "Robert",
        "fechaNacimiento": "1991-03-14",
        "direccion": "Unit 1918 Box 2619, DPO AP 08664",
        "telefono": "2344565574"
    },
    {
        "id": "2458402961486772",
        "apellidos": "Rodriguez Garcia",
        "nombres": "Derek Kayla",
        "fechaNacimiento": "1990-08-05",
        "direccion": "85374 Baker Crest Apt. 249, East Marymouth, CO 93713",
        "telefono": "5680442067"
    },
    {
        "id": "9153363122793858",
        "apellidos": "Leon",
        "nombres": "Cody Curtis",
        "fechaNacimiento": "1968-04-06",
        "direccion": "36519 Lowery Club, North Jamesmouth, DC 12556",
        "telefono": "1070296670"
    },
    {
        "id": "2146206177912569",
        "apellidos": "Odonnell Hill",
        "nombres": "Michael",
        "fechaNacimiento": "1990-05-08",
        "direccion": "993 Porter Plaza, Brownview, DC 55450",
        "telefono": "8380657875"
    },
    {
        "id": "7734034150674966",
        "apellidos": "Flores",
        "nombres": "Paul Hector",
        "fechaNacimiento": "1974-11-26",
        "direccion": "78593 Craig Shoals Apt. 480, New Meghan, MS 47005",
        "telefono": "2395590599"
    },
    {
        "id": "6546839291093709",
        "apellidos": "Waller",
        "nombres": "Mary Lisa",
        "fechaNacimiento": "1996-11-21",
        "direccion": "10393 Alisha Alley Suite 932, Jennifermouth, AK 19861",
        "telefono": "1851569154"
    },
    {
        "id": "5482157033422050",
        "apellidos": "Fowler Freeman",
        "nombres": "Jessica Samuel",
        "fechaNacimiento": "1981-08-04",
        "direccion": "92644 Gregory Alley Suite 902, Samanthabury, OK 14146",
        "telefono": "2513552157"
    }
]
