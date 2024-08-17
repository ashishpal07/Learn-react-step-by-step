import { useState, useEffect } from 'react';
import { useStore } from '@/store/store';

export const useFilteredCourseWork = () => {
  const files = useStore((state) => state.filteredFiles);
  const courseworkTypes = useStore((state) => state.courseworkTypes);
  const filterFilesByType = useStore((state) => state.filterFilesByType);

  const [activeFilter, setActiveFilter] = useState('All');

  useEffect(() => {
    filterFilesByType(activeFilter);
  }, [activeFilter, filterFilesByType]);

  return {
    files,
    courseworkTypes,
    activeFilter,
    setActiveFilter,
  };
};
