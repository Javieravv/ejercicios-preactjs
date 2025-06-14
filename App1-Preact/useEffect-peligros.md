
# ⚠️ Los Peligros Ocultos del `useEffect` en React / Preact

El hook `useEffect` es una herramienta poderosa para manejar efectos secundarios en componentes funcionales. Sin embargo, si se usa sin cuidado, puede producir *bugs difíciles de rastrear*, *re-renders innecesarios* y *comportamientos inesperados*.

---

## 🧠 ¿Qué es `useEffect`?
Un hook que ejecuta código luego del renderizado. Se usa comúnmente para:

- Llamar APIs
- Manipular el DOM
- Configurar suscripciones
- Limpiar efectos anteriores

---

## 🚨 Peligros Comunes

### 1. **Dependencias mal especificadas**
```ts
useEffect(() => {
  doSomething();
}, [a, b]);
```
❌ Si `a` o `b` cambian frecuentemente y no deberían disparar el efecto, tendrás *re-renders infinitos* o lags.

### 2. **Efectos con múltiples responsabilidades**
```ts
useEffect(() => {
  scrollToOption();
  syncStateWithProps();
  fetchData();
}, [someState]);
```
❌ Difícil de depurar, difícil de probar.

✅ Divide el efecto en varios:
```ts
useEffect(() => { scrollToOption(); }, [highlightedIndex]);
useEffect(() => { fetchData(); }, [query]);
```

---

### 3. **Efectos que modifican el estado que disparan el mismo efecto**
```ts
useEffect(() => {
  setX(x + 1);
}, [x]);
```
🔥 ¡Loop infinito!

✅ Protege con condicional:
```ts
useEffect(() => {
  if (x < 10) setX(x + 1);
}, [x]);
```

---

### 4. **Manipulación directa del DOM sin verificar condiciones previas**
```ts
useEffect(() => {
  elementRef.current.scrollIntoView();
}, [selected]);
```
❌ Si `elementRef.current` es `null`, se rompe.

✅ Protegelo:
```ts
useEffect(() => {
  if (elementRef.current) {
    elementRef.current.scrollIntoView();
  }
}, [selected]);
```

---

### 5. **Falta de limpieza**
```ts
useEffect(() => {
  window.addEventListener('resize', handleResize);
}, []);
```
❌ Puede generar fugas de memoria.

✅ Siempre limpia:
```ts
useEffect(() => {
  window.addEventListener('resize', handleResize);
  return () => window.removeEventListener('resize', handleResize);
}, []);
```

---

## ✅ Reglas de Oro

- Mantené los efectos **simples y separados**
- Asegurate de **controlar las dependencias** correctamente
- **Verificá refs y condiciones previas** antes de manipular el DOM
- Siempre **limpiá efectos** si abren suscripciones, listeners o timers
- Si el efecto depende de una operación asincrónica, **usá funciones async dentro de `useEffect`** pero no pongas `async` directamente en el hook.

---

## 🧰 Bonus: Herramientas y Tips

- Usá [eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks)
- Si algo se comporta raro, preguntate: _¿esto debería estar en un efecto?_
- `useLayoutEffect` a veces es mejor cuando el efecto necesita ejecutarse **antes del repintado de pantalla**

---

## ✨ Conclusión

`useEffect` no es malo. Solo hay que saber usarlo con criterio. Si se comporta raro, probablemente esté haciendo más cosas de las que debería.

---

**Autor:** Javi & ChatGPT  
**Última actualización:** Junio 2025
