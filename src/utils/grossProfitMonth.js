import { prepareDate } from './prepareDate';

const getNumberOfDaysInMonth = (month, year) => new Date(year, month, 0).getDate();

export const onChangeCallback = (event) => {
  const yearValue = 2016;
  const monthValue = Number(event.target.value);
  const firstDayInMonth = '01';
  const lastDayInMonth = getNumberOfDaysInMonth(monthValue, yearValue);

  const dateFrom = () => prepareDate(yearValue, monthValue, firstDayInMonth);
  const dateTo = () => prepareDate(yearValue, monthValue, lastDayInMonth);

  return {
    dateFrom, dateTo,
  };
};

export const listOptions = {
  1: 'January',
  2: 'February',
  3: 'March',
  4: 'April',
  5: 'May',
  6: 'June',
  7: 'July',
  8: 'August',
  9: 'September',
  10: 'October',
  11: 'November',
  12: 'December',
};

export const defaultDate = {
  from: '2016-01-01',
  to: '2016-01-31',
};

export const measureAlias = '$ Gross Profit';

export const periodLabel = 'month';

export const periodLabelPlural = 'months';

export const trailingText = '2016';
