import type ITheme from "@/interface/theme.interface";
import React, { createContext, useContext, useState } from "react"

const ThemeContext = createContext<ITheme | undefined>(undefined);

export const ThemeProvider = ({children}:{children:React.ReactNode}) => {
    const [theme,setTheme]=useState(false);
  return (
    <>
    <ThemeContext.Provider value={{theme,setTheme}}>
        {children}
    </ThemeContext.Provider>
    </>
  )
}

export const UseTheme = () =>{
    return useContext(ThemeContext);
}