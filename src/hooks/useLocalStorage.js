import { useState } from 'react';

function initialState(key, defaultValue){
  const item = window.localStorage.getItem(key);
  return item !== undefined ? item : defaultValue;
}

export function useLocalStorage(key, defaultValue){
  const [ value, setValue ] = useState(initialState(key, defaultValue)); // doing it this way means initialState is only called once

  function setStorageValue(newValue){
    setValue(newValue);
    window.localStorage.setItem(key, newValue);
  }

  return [value, setStorageValue];
}