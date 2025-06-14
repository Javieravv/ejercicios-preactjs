// Muestra el componente select normal creado

import Select from "./components/Select";

const selectPaises = [
  { value: '1', label: 'Colombia' },
  { value: '2', label: 'Argentina' },
  { value: '3', label: 'Chile' },
  { value: '4', label: 'Perú' },
  { value: '5', label: 'Ecuador', selected: true },
  { value: '6', label: 'Bolivia' },
  { value: '7', label: 'Brasil' },
  { value: '8', label: 'Uruguay' },
  { value: '9', label: 'Paraguay' },
  { value: '10', label: 'Guyana' },
  { value: '11', label: 'Surinam' },
];

const selectCiudades = [
  { value: '1', label: 'Bogotá', selected: true },
  { value: '2', label: 'Buenos Aires' },
  { value: '3', label: 'Santiago' },
  { value: '4', label: 'Lima' },
  { value: '5', label: 'Quito' },
  { value: '6', label: 'Sucre' },
  { value: '7', label: 'Brasilia' },
  { value: '8', label: 'Montevideo' },
  { value: '9', label: 'Asunción' },
  { value: '10', label: 'Caracas' },
  { value: '11', label: 'Georgetown' },
  { value: '12', label: 'Paramaribo' },
];

const Selects = () => {
    return (
        <>
            {/* Secciones de países y otros */}
            <section class='section-container'>
                <Select
                    selectName='select-paises'
                    selectId='select-paises-id'
                    selectOptions={selectPaises}
                    selectLabel='Selecciona un país:'
                />
                <Select
                    selectName='select-ciudades'
                    selectId='select-ciudades-id'
                    selectOptions={selectCiudades}
                    selectLabel='Selecciona una ciudad:'
                />
            </section>
        </>
    )
}

export default Selects