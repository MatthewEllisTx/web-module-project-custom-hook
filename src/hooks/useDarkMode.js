import useLocalStorage from './useLocalStorage';

export default function useDarkMode(key){
  const [darkMode, setDarkMode] = useLocalStorage(key, window.matchMedia('(prefers-color-scheme: dark)').matches);

  function toggleDark(){
    setDarkMode(!darkMode);
  }

  return [darkMode, toggleDark];
}