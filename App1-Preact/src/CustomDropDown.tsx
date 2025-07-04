import { Dropdownmenu, type OptionMenu } from "@/components/DropDownMenu"

const menuPaises: OptionMenu[] = [
    {
        id: 'pais1',
        label: 'Colombia',
        url: ''
    },
    {
        id: 'pais2',
        label: 'Venezuela',
        url: ''
    },
    {
        id: 'pais3',
        label: 'Ecuador',
        url: ''
    },
    {
        id: 'pais4',
        label: 'Peru',
        url: ''
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