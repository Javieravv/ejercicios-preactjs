import Accordeon from "@/components/accordeon/Accordeon"

const dataOptions = [
    {
        id: '131313',
        summary: 'Bajo Barítono',
        paragraph: 'Bajo-barítono (o wagneriano, bajo Helden, heroico: Held) es la denominación que corresponde a una voz baritonal (de barítono, la voz masculina a medio camino entre tenor y bajo) caracterizada por agudos brillantes pese a un color oscuro (grave). Nace a partir de exigencias vocales en roles de Richard Wagner aplicándose a un tipo de cantante wagneriano, debido a la resistencia física y enorme caudal vocal que debe poseer para cumplir con las exigencias del papel.'
    },
    {
        id: '66565465465',
        summary: 'Hermann Horner',
        paragraph: `Hermann Horner fue un bajo-barítono nacido en Rzeszów (actual Polonia) el 30 de enero de 1892 y asesinado por los nazis en 1942.
        Cantó el papel de Titurel de Parsifal en el Festival de Bayreuth de 1928.[1]​
        El día del boicot nazi de negocios judíos en 1933 el cantante fue despedido del teatro de Stuttgart e informado que no volvería a cantar. Se trasladó a Rzeszów y luego a Checoslovaquia donde trabajó en el teatro de Aussig hasta 1935.[2]​
        Murió en el campo de exterminio de Belzec hacia 1942.[3]​[4]​ Toda su familia fue asesinada.[5]`
    },
    {
        id: '665465465dd45',
        summary: 'Simón Orfila',
        paragraph: 'Simón Orfila Riudavets, nacido en Alayor (Menorca), el 13 de septiembre de 1976, es un bajo-barítono español discípulo del tenor Alfredo Kraus. Actúa asiduamente en los teatros Liceu y Real, también en la Bayerische Staatsoper, Deutsche Oper de Berlín, Teatro San Carlo o la Scala, en títulos como Aida, La Bohème, La Cenerentola, La donna del Lago, Don Giovanni, Lucia di Lammermoor, Norma, Le nozze di Figaro, I puritani, Turandot o Il viaggio a Reims.'
    },
    {
        id: 'ljlkjlñjñl',
        summary: 'Carlos Petrel',
        paragraph: 'Juan Carlos Manuel López Alcantud (Valencia, España; 30 de marzo de 1924 - Ciudad de México, México; 17 de septiembre de 2000), más conocido como Carlos Petrel, fue un actor y cantante de ópera nacido en España, quien debido a la guerra civil española, se vio obligado a exiliarse a Francia donde pasó su juventud y realizó toda su vida restante en México, incursionando principalmente como actor de doblaje.'
    },
    {
        id: 'fasa asf s',
        summary: 'Carlos Petrel',
        paragraph: 'Ver datos',
        render: <>
            <h3>Biografía</h3>
            <p>
                Juan Carlos Manuel López Alcantud (Valencia, España; 30 de marzo de 1924 - Ciudad de México, México; 17 de septiembre de 2000), más conocido como Carlos Petrel, fue un actor y cantante de ópera nacido en España, quien debido a la guerra civil española, se vio obligado a exiliarse a Francia donde pasó su juventud y realizó toda su vida restante en México, incursionando principalmente como actor de doblaje.
            </p>
            <p>
                Juan Carlos Manuel López Alcantud (Valencia, España; 30 de marzo de 1924 - Ciudad de México, México; 17 de septiembre de 2000), más conocido como Carlos Petrel, fue un actor y cantante de ópera nacido en España, quien debido a la guerra civil española, se vio obligado a exiliarse a Francia donde pasó su juventud y realizó toda su vida restante en México, incursionando principalmente como actor de doblaje.
            </p>
        </>
    },
]

const CustomAcordeon = () => {
    return (
        <>
            <h1>Custom Acordeón</h1>
            <Accordeon itemsAccordeon={dataOptions} />
        </>
    )
}

export default CustomAcordeon