import type { RefObject } from 'preact'
import { useEffect } from 'preact/hooks'

/**
 * Hook que cierra (o ejecuta cualquier callback) cuando ocurre un click fuera del elemento referenciado.
 * @param ref  Ref al elemento “protegido”
 * @param handler  Función a llamar al detectar click fuera
 */
export function useClickOutside<T extends HTMLElement>(
    ref: RefObject<T>,
    handler: (event: MouseEvent | undefined) => void
) {
    useEffect(() => {
        const listener = (e: MouseEvent) => {
            const el = ref.current
            // Si no hay elemento o el click está dentro, no hacemos nada
            if (!el || el.contains(e.target as Node)) return
            console.log('ejecutamos la fncion y pasamos isopen a false en el useeffect')
            handler(e)
        }

        document.addEventListener('click', listener)
        return () => {
            document.removeEventListener('click', listener)
        }
    }, [ref, handler])
}
