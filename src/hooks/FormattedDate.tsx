import { format, parseISO } from 'date-fns';
import { useMemo } from 'react';

export const useFormattedDate = (date: string): string => {
  const newData = useMemo(() => {
    if (date !== undefined) {
      return format(parseISO(date), 'yyyy-MM-dd');
    }
    return '';
  }, [date]);

  return newData;
};
