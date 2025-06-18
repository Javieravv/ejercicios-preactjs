// Utilidades

// Ayuda con un arreglo para saber las páginas a mostrar
export const getVisiblePages = (
    current: number,
    total: number,
    maxButtons: number = 5): (number | string)[] => {
    const pages: (number | string)[] = [];

    if (total <= maxButtons) {
        for (let i = 1; i <= total; i++) pages.push(i);
        return pages;
    }

    const half = Math.floor(maxButtons / 2);
    let start = Math.max(current - half, 1);
    let end = Math.min(start + maxButtons - 1, total);

    if (end - start < maxButtons - 1) {
        start = Math.max(end - maxButtons + 1, 1);
    }

    if (start > 1) {
        pages.push(1);
        if (start > 2) pages.push('...');
    }

    for (let i = start; i <= end; i++) {
        pages.push(i);
    }

    if (end < total) {
        if (end < total - 1) pages.push('...');
        pages.push(total);
    }

    return pages;
}
