import './app.css'
import CustomTable from './CustomTable'

export function App() {
   return (
      <>
         <h1>Preact App - Componente Table Personalizado.</h1>
         <section class='section-container'>
            <p>Esta es una aplicación de ejemplo usando Preact.</p>
            <p>Explora los componentes y funcionalidades.</p>
         </section>
         <CustomTable />
         
      </>
   )
}
