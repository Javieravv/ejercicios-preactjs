import Tabs from "./components/Tabs"
import { dataTabs } from "./data/dataTabs"

const CustomTabs = () => {
    return (
        <>
            <div>
                <p>Componente Tab Personalizado hecho con Preact</p>
                <p>Es una muestra de un componente Tab personalizado, hecho con Preact</p>
            </div>
            <Tabs tabs={dataTabs} />
        </>
    )
}

export default CustomTabs