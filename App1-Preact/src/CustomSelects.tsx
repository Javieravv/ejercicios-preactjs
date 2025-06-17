import { useState } from "preact/hooks";
import CustomSelect from "./components/CustomSelect";
import Selects from "./Selects";


const selectOptionsCountries = [
    { value: '1', label: 'Colombia' },
    { value: '2', label: 'Argentina' },
    { value: '3', label: 'Chile' },
    { value: '4', label: 'Perú' },
    { value: '5', label: 'Ecuador' },
    { value: '6', label: 'Bolivia' },
    { value: '7', label: 'Brasil' },
    { value: '8', label: 'Uruguay' },
    { value: '9', label: 'Paraguay' },
    { value: '10', label: 'Costa Rica' },
]

const selectOptionsCities = [
    { value: '1', label: 'Bogotá' },
    { value: '2', label: 'Buenos Aires' },
    { value: '3', label: 'Santiago' },
    { value: '4', label: 'Lima' },
    { value: '5', label: 'Quito' },
    { value: '6', label: 'Sucre' },
    { value: '7', label: 'Brasilia' },
    { value: '8', label: 'Montevideo' },
    { value: '9', label: 'Asunción' },
    { value: '10', label: 'La paz' },
]

const selectOptionsFruits = [
    { value: '1', label: 'Manzana' },
    { value: '2', label: 'Pera' },
    { value: '3', label: 'Naranja' },
    { value: '4', label: 'Plátano' },
    { value: '5', label: 'Fresa' },
    { value: '6', label: 'Mango' },
    { value: '7', label: 'Piña' },
    { value: '8', label: 'Uva' },
    { value: '9', label: 'Sandía' },
    { value: '10', label: 'Guayaba' },
]


const CustomSelects = () => {
    const [paisSeleccionado, setPaisSeleccionado] = useState('');
    const [ciudadSeleccionada, setCiudadSeleccionada] = useState('');
    const [fruitSeleccionado, setFruitSeleccionado] = useState('');
    return (
        <>
            <h2>Selects Personalizados!</h2>
            <div class="section-container">
                <CustomSelect
                    selectOptions={selectOptionsCountries}
                    selectLabel='Selecciona una opción:'
                    onChange={(value) => setPaisSeleccionado(value)}
                />
                <CustomSelect
                    selectOptions={selectOptionsCities}
                    selectLabel='Selecciona una ciudad:'
                    onChange={(value) => setCiudadSeleccionada(value)}
                />
            </div>
            <p>Los valores seleccionados son: {paisSeleccionado}, {ciudadSeleccionada}, {fruitSeleccionado}</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas non soluta repudiandae porro beatae a distinctio consequatur minus, impedit, exercitationem unde adipisci praesentium dolore repellat!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora impedit aspernatur totam cum dolores provident deleniti numquam laudantium eum perspiciatis. Facere libero ullam cupiditate reiciendis sed aliquam! Aspernatur omnis aliquid, error sunt exercitationem quos distinctio quidem, impedit dolore voluptates rerum vitae nemo ab quam consectetur, ratione sit tempore earum ea quia architecto. Praesentium, amet corporis.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos modi dolorem odio accusamus rerum hic dignissimos, officia fugiat architecto ad ratione ipsam tempore expedita debitis fugit asperiores incidunt, libero vero amet ex voluptas tenetur. Error illo qui quidem natus doloribus odit eum consectetur non voluptas quibusdam rem at excepturi velit sequi ex rerum accusamus quo, animi deleniti. Dolorem, nam mollitia! Quas magni nostrum necessitatibus, autem eaque tempore. Accusantium tempora quo sunt magnam atque necessitatibus quis consequatur et. Vero deserunt consectetur nulla assumenda id magnam pariatur, fuga distinctio accusantium aut ipsa molestiae voluptates, esse consequuntur veniam minima vitae quaerat perspiciatis! Perferendis doloribus modi ut eligendi fugiat quas. Molestias, laboriosam. Dignissimos repudiandae nam alias tempora harum! Maxime dolorem praesentium quod sed placeat commodi dicta, blanditiis modi rem.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos modi dolorem odio accusamus rerum hic dignissimos, officia fugiat architecto ad ratione ipsam tempore expedita debitis fugit asperiores incidunt, libero vero amet ex voluptas tenetur. Error illo qui quidem natus doloribus odit eum consectetur non voluptas quibusdam rem at excepturi velit sequi ex rerum accusamus quo, animi deleniti. Dolorem, nam mollitia! Quas magni nostrum necessitatibus, autem eaque tempore. Accusantium tempora quo sunt magnam atque necessitatibus quis consequatur et. Vero deserunt consectetur nulla assumenda id magnam pariatur, fuga distinctio accusantium aut ipsa molestiae voluptates, esse consequuntur veniam minima vitae quaerat perspiciatis! Perferendis doloribus modi ut eligendi fugiat quas. Molestias, laboriosam. Dignissimos repudiandae nam alias tempora harum! Maxime dolorem praesentium quod sed placeat commodi dicta, blanditiis modi rem.</p>
            <div class="section-container">
                <CustomSelect
                    selectOptions={selectOptionsFruits}
                    selectLabel='Selecciona una fruta:'
                    onChange={(value) => setFruitSeleccionado(value)}
                />
            </div>
            <h2>Selects Normales.</h2>
            <div class="section-container">
                <Selects />
            </div>
        </>
    )
}

export default CustomSelects