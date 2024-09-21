import React from 'react'
import {FaMoon ,FaSun} from "react-icons/fa";
import { useTheme } from 'next-themes';
 
const ThemeChanger = () => {

    const {systemTheme, theme, setTheme} = useTheme();

    const currentTheme = theme === 'system' ? systemTheme : theme;

    if(currentTheme === 'light'){
       return(
        <button className='bg-gray-100 dark:bg-gray-600'
        onClick={() => setTheme('dark')}
        >
        <FaSun  size={35}/>
      </button>
       )
    }else{
  return (
    <button className=''
    onClick={() => setTheme('light')}
    >
      <FaMoon  size={35} color='#ffffff'/>
    </button>
  )
}
}
export default ThemeChanger
