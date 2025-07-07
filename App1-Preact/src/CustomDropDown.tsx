import { Dropdownmenu, type OptionMenu } from "@/components/DropDownMenu"

const menuPaises: OptionMenu[] = [
    {
        id: 'pais1',
        label: 'Colombia',
        url: '',
        render: <a href={`https://es.wikipedia.org/wiki/Colombia`} target={`_blank`} >Colombia</a>
    },
    {
        id: 'pais2',
        label: 'Venezuela',
        url: '',
        render: <a href={`https://es.wikipedia.org/wiki/venezuela`} target={`_blank`} >Venezuela</a>
    },
    {
        id: 'pais3',
        label: 'Ecuador',
        url: '',
        render: <a href={`https://es.wikipedia.org/wiki/ecuador`} target={`_blank`} >Ecuador</a>

    },
    {
        id: 'pais4',
        label: 'Peru',
        url: '',
        render: <a href={`https://es.wikipedia.org/wiki/Peru`} target={`_blank`} >Perú</a>

    },
    {
        id: 'pais5',
        label: 'Bolivia',
        url: '',
        render: 
            <a href={`https://es.wikipedia.org/wiki/bolivia`} target={`_blank`} >Bolivia</a>
    },
]

const menuFrutas: OptionMenu[] = [
    {
        id: 'fruta1',
        label: 'Manzana',
        url: ''
    },
    {
        id: 'fruta2',
        label: 'Pera',
        url: ''
    },
    {
        id: 'fruta3',
        label: 'Pitaya',
        url: ''
    },
    {
        id: 'fruta4',
        label: 'Mandarina',
        url: ''
    },
]


export const CustomDropDown = () => {
    return (
        <>
            <h1>Custom Drop Down Menu.</h1>
            <nav class='navbarprueba'>
                <Dropdownmenu labelMenu="Paises" optionsMenu={menuPaises} />
                <Dropdownmenu labelMenu="Frutas" optionsMenu={menuFrutas} />
                <Dropdownmenu labelMenu="Verduras" />
                <Dropdownmenu labelMenu="Opciones" />
            </nav>
        </>
    )
}

// export default CustomDropDown