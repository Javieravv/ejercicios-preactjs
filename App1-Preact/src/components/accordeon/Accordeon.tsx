// Componente acordeón hecho en PreactJs
import type { JSX } from 'preact/jsx-runtime';
import '../css/accordeon.css'
import { useEffect, useRef, useState } from 'preact/hooks';

export interface dataAccordeon {
    id: string;
    summary: string;
    paragraph: string;
    render?: JSX.Element
}

export interface AccordeonProps {
    itemsAccordeon: dataAccordeon[]
    /** Si true: el componente gestiona la apertura con estado.
      Si false: deja que <details> maneje la apertura/cierre nativo */
    controlled?: boolean;
    /** índice que queramos abierto inicialmente en modo no controlado */
    defaultOpenIndex?: number;
}

const Accordeon = ({
    itemsAccordeon,
    controlled = false,
    defaultOpenIndex = 1
}: AccordeonProps) => {
    const itemsAccordeonRef = useRef<(HTMLDetailsElement | null)[]>([])
    const contentRefs = useRef<Array<HTMLDivElement | null>>([]);
    const [openIndex, setOpenIndex] = useState<number | null>(controlled ? null : defaultOpenIndex)

    const handleToogle = (i: number) => {
        setOpenIndex(openIndex === i ? null : i)
    }

    // Cada vez que cambie openIndex, ajustamos inline maxHeight
    useEffect(() => {
        // if (!controlled) return; // solo en modo controlado
        itemsAccordeon.forEach((_, i) => {
            const el = contentRefs.current[i];
            if (!el) return;

            // definimos la transición siempre
            el.style.transition = 'max-height 0.81s ease-out';

            if (i === openIndex ) {
                // 1) establecemos el estado “cerrado” como punto de partida
                el.style.maxHeight = '0px';
                // 2) en el próximo frame animamos al valor real
                requestAnimationFrame(() => {
                    el.style.maxHeight = el.scrollHeight + 'px';
                });

                // 3) (opcional) limpia max-height tras la animación para contenido variable
                const onEnd = () => {
                    el.style.maxHeight = 'none';
                    el.removeEventListener('transitionend', onEnd);
                };
                el.addEventListener('transitionend', onEnd);
            } else if ( controlled ){
                // animamos de lo que sea que esté a 0
                el.style.maxHeight = '0px';
            }
        });
    }, [openIndex, itemsAccordeon, controlled]);

    return (
        <section
            class="accordeon-wraper"
            aria-label={`accordeon-wrapper`}
        >
            {
                itemsAccordeon.map((itemAccordeon, index) => {
                    // Se incluye open solo en modo controlado
                    const detailProps: any = {}
                    if (controlled) {
                        detailProps.open = openIndex === index
                    } else if (index === defaultOpenIndex) {
                        detailProps.open = true
                    }

                    return (
                        <details
                            class="accordeon-details"
                            key={itemAccordeon.id}
                            ref={(el) => itemsAccordeonRef.current[index] = el}
                            {...detailProps}
                        >
                            <summary
                                class="accordeon-sumary"
                                onClick={(e) => {
                                    handleToogle(index)
                                    if (!controlled) return // se deja el toggle nativo
                                    e.preventDefault()
                                    handleToogle(index)
                                }}
                            >
                                {itemAccordeon.summary}
                            </summary>
                            <div
                                className="accordeon-content"
                                ref={el => (contentRefs.current[index] = el)}
                            >
                                <>
                                    {itemAccordeon.render ?? <p class="accordeon-paragraph">{itemAccordeon.paragraph}</p>}
                                </>
                            </div>
                        </details>
                    )
                })
            }
        </section>
    )
}

export default Accordeon