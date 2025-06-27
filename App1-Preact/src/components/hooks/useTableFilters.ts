// Hooks para manejar los filtros de la tabla
import { useState } from 'react';

export interface FilterControls {
  columnFilters: Record<string, string>;
  setColumnFilters: React.Dispatch<React.SetStateAction<Record<string, string>>>;
  filterActiveColumn: string | null;
  setFilterActiveColumn: React.Dispatch<React.SetStateAction<string | null>>;
  valueColumnFilter: string;
  setValueColumnFilter: React.Dispatch<React.SetStateAction<string>>;
}

export const useTableFilters = (): FilterControls => {
  const [columnFilters, setColumnFilters] = useState<Record<string, string>>({});
  const [filterActiveColumn, setFilterActiveColumn] = useState<string | null>(null);
  const [valueColumnFilter, setValueColumnFilter] = useState<string>('');

  return {
    columnFilters,
    setColumnFilters,
    filterActiveColumn,
    setFilterActiveColumn,
    valueColumnFilter,
    setValueColumnFilter,
  };
};
