# Componente `Accordeon` en Preact

Este es un componente de tipo acordeón creado con **PreactJS**, que permite expandir o contraer secciones de contenido de forma animada y accesible.

✅ Compatible con comportamiento **controlado** y **no controlado**  
✅ Incluye animación suave en la apertura y cierre  
✅ Estilizado con CSS personalizado  
✅ Admite contenido HTML dinámico por item  

---

## 📦 Instalación

1. Asegúrate de tener configurado un proyecto con **Preact**.
2. Copia los archivos:

- `Accordeon.tsx` → carpeta de componentes
- `accordeon.css` → carpeta de estilos (puedes importarlo en tu root o componente)

---

## 🚀 Uso básico

```tsx
import Accordeon from './components/Accordeon';
import './css/accordeon.css';

const items = [
  {
    id: '1',
    summary: '¿Qué es Preact?',
    paragraph: 'Preact es una librería rápida y ligera similar a React.'
  },
  {
    id: '2',
    summary: '¿Por qué usar Preact?',
    paragraph: 'Por su tamaño reducido y compatibilidad con React.'
  },
  {
    id: '3',
    summary: '¿Qué diferencia hay con React?',
    paragraph: 'Preact tiene una API casi idéntica, pero optimiza el rendimiento.'
  }
];

<Accordeon
  itemsAccordeon={items}
/>
```

---

## 🎛️ Props disponibles

| Prop              | Tipo                         | Descripción |
|-------------------|------------------------------|-------------|
| `itemsAccordeon`  | `dataAccordeon[]`            | Lista de ítems del acordeón |
| `controlled`      | `boolean` _(opcional)_       | Si se gestiona la apertura desde el componente |
| `defaultOpenIndex`| `number` _(opcional)_        | Índice que se abre por defecto (modo no-controlado) |

---

## 🔧 Modo controlado

```tsx
<Accordeon
  itemsAccordeon={items}
  controlled={true}
/>
```

➡️ Solo un `<details>` puede estar abierto a la vez. El estado se controla con `useState`.

---

## 🧩 Modo no-controlado

```tsx
<Accordeon
  itemsAccordeon={items}
  controlled={false}
  defaultOpenIndex={1}
/>
```

➡️ Se deja el control de apertura/cierre al navegador (comportamiento nativo de `<details>`). Se puede mostrar un ítem abierto desde el inicio.

---

## 📖 Historia del desarrollo

1. El componente fue inicialmente implementado usando etiquetas HTML `<details>` y `<summary>` para aprovechar su funcionalidad incorporada de expandir/colapsar contenido.

2. Se incorporaron transiciones suaves de apertura/cierre mediante CSS, y más adelante se mejoraron usando `JavaScript` con `requestAnimationFrame` para medir dinámicamente la altura del contenido y animarla con `max-height`.

3. Se añadieron dos modos de operación:
   - **Modo controlado**: gestión del estado de apertura desde React.
   - **Modo no controlado**: comportamiento nativo de HTML.

4. Se implementó soporte para abrir un ítem por defecto con `defaultOpenIndex`.

5. Se corrigieron errores como:
   - Doble llamada al `handleToggle`.
   - Uso incorrecto de `defaultOpen`.
   - Limpieza de estilos inline en el `useEffect` para evitar interferencias.

6. Se logró un componente visualmente atractivo, funcional, y reutilizable, como se muestra en esta imagen:

![Accordeon funcionando](./ruta-a-tu-imagen.png)

---

## 🎨 Personalización

Puedes modificar fácilmente:

- Colores, bordes, y paddings desde `accordeon.css`.
- El símbolo `+`/`−` desde el `::before` en el `<summary>`.
- Agregar íconos SVG o flechas con rotación CSS.

---

## 🧠 Ideas futuras

- Agregar soporte para múltiples ítems abiertos a la vez (`multiOpen`).
- Accesibilidad con `aria-expanded`, `aria-controls`.
- Soporte para temas (oscuro/claro) usando CSS variables.
- Animaciones con librerías como `framer-motion`.

---

## 🛠️ Hecho con

- [Preact](https://preactjs.com/)
- CSS puro
- Mucho cariño, pruebas, y aprendizaje 🎓

---

## 🧑‍⚖️ Autor

Desarrollado por Javier, combinando su experiencia en derecho y sistemas para crear componentes útiles y elegantes.