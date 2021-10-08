const useSumOfNumbersArray = (arr) =>
  arr
    .filter((indexData) => typeof indexData === 'number')
    .reduce((total, numbersNumber) => total + numbersNumber, 0);

export default useSumOfNumbersArray;
