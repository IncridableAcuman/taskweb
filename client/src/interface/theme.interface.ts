import type React from "react";

export default interface ITheme {
    theme:boolean,
    setTheme:React.Dispatch<React.SetStateAction<boolean>>;
}