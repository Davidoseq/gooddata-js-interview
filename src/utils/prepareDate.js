export const prepareDate = (year, month, day) => {
  return `${year}-${month < 10 ? `0${month}` : month}-${day}`;
};

export default prepareDate;
