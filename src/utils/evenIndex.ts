export const applyEvenRowColor = (index: number): string => {
  if (index === 0) {
    return '';
  }
  return index % 2 !== 0 ? 'bg-neutral-50' : 'bg-white';
};

export const isEven = (num: number) => {
  return num % 2 === 0 ? true : false;
};