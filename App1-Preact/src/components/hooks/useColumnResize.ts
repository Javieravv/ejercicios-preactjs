// hook para manejar el redimensionamiento de columnas 
// en el componente de tabla.

import { useRef, useState, useEffect } from 'preact/hooks';
import type { Column } from '../../data/datatable';


export interface ResizeControls {
    columnsWitch: Record<string, string>;
    startResizing: (columnKey: string, index: number) => (e: MouseEvent) => void;
    isResizing: boolean;
}

export const useColumnResize = (
    columns: Column[],
    tableId: string,
    columnsRef: React.MutableRefObject<Record<string, string>>,
    thRefs: React.MutableRefObject<(HTMLTableCellElement | null)[]>
): ResizeControls => {
    const [columnsWitch, setColumnsWitch] = useState<Record<string, string>>(() => {
        // Leer del localStorage o usar widths iniciales
        const savedWidths = localStorage.getItem(`columnWidths-${tableId}`);
        if (savedWidths) {
            return JSON.parse(savedWidths);
        }
        const columnWidths: Record<string, string> = {};
        columns.forEach((col) => {
            columnWidths[col.key] = col.width || '150px'; // Valor por defecto de 150 si no se especifica
        })
        return columnWidths;
    });

    const [isResizing, setIsResizing] = useState(false);

    // Ref que mantiene los valores temporales
    const resizeRef = useRef<{
        columnKey: string;
        startX: number;
        startWidth: number;
        index: number;
    } | null>(null);

    // Inicia redimensionamiento
    const startResizing = (columnKey: string, index: number) => (e: MouseEvent) => {
        const th = thRefs.current[index];
        if (!th) return;
        document.body.classList.add('resizing');
        resizeRef.current = {
            columnKey: columnKey,
            startX: e.clientX,
            startWidth: th.offsetWidth,
            index
        };
        setIsResizing(true);
    };

    // Evento mousemove
    const handleMouseMove = (e: MouseEvent) => {
        const ref = resizeRef.current;
        if (!ref) return;
        const deltaX = e.clientX - ref.startX;
        const newWidth = ref.startWidth + deltaX;
        setColumnsWitch(prev => {
            const updated = {
                ...prev,
                [ref.columnKey]: `${newWidth}px` // Nuevo ancho
            }
            columnsRef.current = updated;
            return updated;
        });
    };

    // Evento mouseup
    const stopResizing = () => {
        // Guardar
        setIsResizing(false);
        localStorage.setItem(`columnWidths-${tableId}`, JSON.stringify(columnsRef.current));
        document.body.classList.remove('resizing');
    };

    // Manejo de eventos globales
    useEffect(() => {
        if (isResizing) {
            document.addEventListener('mousemove', handleMouseMove);
            document.addEventListener('mouseup', stopResizing);
        }

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', stopResizing);
        };
    }, [isResizing]);

    return {
        columnsWitch,
        isResizing,
        startResizing
    };
};
