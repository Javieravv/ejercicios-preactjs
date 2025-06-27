// Hook para manejar la paginación del componente tabla

import { useMemo, useState } from "preact/hooks";
import { getVisiblePages } from "../utils/utils";

export interface PaginationControls<T> {
    currentPage: number;
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
    totalPage: number;
    btnsPagesVisibles: (number | string)[];
    currentData: T[];
    resetPage: () => void;
}

export const usePagination = <T,>(data: T[], pageSize: number): PaginationControls<T> => {
    const [currentPage, setCurrentPage] = useState(1);

    const totalPage = Math.ceil(data.length / pageSize);

    // Calcular los datos actuales para la página actual
    const currentData = useMemo(() => {
        const startIndex = (currentPage - 1) * pageSize
        const endIndex = startIndex + pageSize
        return data.slice(startIndex, endIndex)
    }, [data, currentPage, pageSize])

    // Botones de paginación visibles
    const btnsPagesVisibles = getVisiblePages(currentPage, totalPage, 4);

    const resetPage = () => setCurrentPage(1)

    return {
        currentData,
        currentPage,
        setCurrentPage,
        totalPage,
        btnsPagesVisibles,
        resetPage
    };
}
