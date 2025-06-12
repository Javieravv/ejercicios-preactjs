import { useRef, useState } from 'preact/hooks'
import './app.css'
import Input from './components/input'
import Select from './components/Select';

const selectPaises = [
  { value: '1', label: 'Colombia' },
  { value: '2', label: 'Argentina' },
  { value: '3', label: 'Chile' },
  { value: '4', label: 'Perú' },
  { value: '5', label: 'Ecuador', selected: true },
  { value: '6', label: 'Bolivia' },
  { value: '7', label: 'Brasil' },
];

const selectCiudades = [
  { value: '1', label: 'Bogotá', selected: true },
  { value: '2', label: 'Buenos Aires' },
  { value: '3', label: 'Santiago' },
  { value: '4', label: 'Lima' },
  { value: '5', label: 'Quito' },
  { value: '6', label: 'Sucre' },
  { value: '7', label: 'Brasilia' },
];

export function App() {
  const [formData, setFormData] = useState({
    nombres: '',
    apellidos: '',
    direccion: ''
  })

  const nombresRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prevData => ({
      ...prevData,
      [field]: value
    }))
  }

  const handleSubmit = (event: Event) => {
    event.preventDefault()
    console.log('Datos enviados:', formData)
  }

  const handleReset = () => {
    setFormData({
      nombres: '',
      apellidos: '',
      direccion: ''
    })
    nombresRef.current?.focus();
    console.log('Formulario restablecido')
  }

  return (
    <>
      <h1>Formulario usando Preact </h1>
      <section class="input-section">
        <form
          action=""
          id="formulario"
          class="formulario"
          onSubmit={handleSubmit}
          onReset={handleReset}
        >
          <article class='container-inputs'>
            <Input
              labelText='Nombres:'
              inputName='nombres'
              value={formData.nombres}
              onChange={(val) => handleInputChange('nombres', val)}
              placeholder='Escribe tus nombres aquí...'
              focused={true}
              ref={nombresRef}
            />
            <Input
              labelText='Apellidos:'
              inputName='apellidos'
              value={formData.apellidos}
              onChange={(val) => handleInputChange('apellidos', val)}
              placeholder='Escribe tus apellidos aquí...'
              focused={false}
            />
            <Input
              labelText='Dirección:'
              inputName='direccion'
              value={formData.direccion}
              onChange={(val) => handleInputChange('direccion', val)}
              placeholder='Escribe tu dirección aquí...'
              focused={false}
            />
          </article>
          <article class='button-container'>
            <button type='submit' class='submit-button'>Enviar Datos</button>
            <button type='reset' class='reset-button'>Restablecer</button>
          </article>
        </form>
      </section>
      <section class='description-section'>
        <p>Estamos haciendo algunos ejercicios usando PreactJs, con formularios.</p>
        <p>Creando componentes para luego </p>
      </section>
      <section class="data-section">
        <h2>Datos ingresados:</h2>
        <pre>{JSON.stringify(formData, null, 2)}</pre>
      </section>
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
