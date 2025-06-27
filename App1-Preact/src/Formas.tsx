// Usado para mostrar los formularios.

import { useState, useRef } from "preact/hooks";
import Input from "./components/input";

const Formas = () => {
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
    }

    const handleReset = () => {
        setFormData({
            nombres: '',
            apellidos: '',
            direccion: ''
        })
        nombresRef.current?.focus();
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
        </>
    )
}

export default Formas