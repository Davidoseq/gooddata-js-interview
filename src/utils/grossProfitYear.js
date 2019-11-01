import { prepareDate } from './prepareDate';

export const onChangeCallback = (event) => {
  const yearValue = Number(event.target.value);
  const monthValue = 1;
  const dayValue = '01';

  const dateFrom = () => prepareDate(yearValue, monthValue, dayValue);
  const dateTo = () => prepareDate(yearValue + 1, monthValue, dayValue);

  return {
    dateFrom, dateTo,
  };
};

export const listOptions = {
  2015: '2015',
  2016: '2016',
  2017: '2017',
};

export const defaultDate = {
  from: '2016-01-01',
  to: '2017-01-01',
};

export const measureAlias = '$ Gross Profit';

export const periodLabel = 'year';

export const periodLabelPlural = 'years';

export const trailingText = '';
