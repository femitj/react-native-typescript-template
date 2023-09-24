import {truncate} from 'lodash';

export const truncateWords = (str: string, options?: any) => {
  const newOptions = {
    length: options?.length || 12,
    omission: options?.omission || '...',
  };
  return options ? truncate(str, newOptions) : truncate(str);
};

export const getDropdownOptions = (totalPages: number) => {
  const arr = Array.from(Array(totalPages).keys());
  return arr.map(item => {
    return {label: `${Number(item) + 1}`, value: item + 1};
  });
};

export const calcSubTotal = (list: any) => {
  const sum = list.reduce(
    (a: any, b: any) => a + (b['soldPrice'] * Number(b['quantity']) || 0),
    0,
  );
  return sum;
};
