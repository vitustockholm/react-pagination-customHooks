import React from 'react';
// from custom hooks
import useSumOfNumbersArray from '../hooks/useSumOfNumbersArray';

const HomePage = () => {
  // arrays to check it to useSumOfNumberArray
  let arr = [1, 7, 5, 'Hi', 'You', { objektas: 'Stringas' }];
  // using custom hook to check array with imported function useSumNumberOfArray
  let arr2 = [true, false, 5, 10, { item: 555555 }];

  const filtered2 = useSumOfNumbersArray(arr2);

  const filtered1 = useSumOfNumbersArray(arr);

  console.log(filtered1);
  //
  return (
    <>
      <div>HomePage</div>
      <p>first array: {filtered1}</p>
      <p>second array: {filtered2}</p>
    </>
  );
};

export default HomePage;
