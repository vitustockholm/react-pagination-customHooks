import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (endpoint) => {
  //Hooks
  // ---state
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  // counting data objects for future management
  const [objectsSum, setObjectsSum] = useState('initialState');
  // // --- side effects
  useEffect(() => {
    //fetching data
    axios
      .get(endpoint)
      .then((data) => {
        setData(data.data);
        setIsLoading(false);
        // seting counted array objects
        setObjectsSum(data.data.length);
        console.log(objectsSum);
      })
      .catch((err) => {
        setError(err.err);
        setIsLoading(false);
      });
    console.log(objectsSum);
  }, [endpoint]);
  //

  return { data, isLoading, error, objectsSum };
  //
};
export default useFetch;
