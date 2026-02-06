"use client"

import { useEffect, useState } from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
type ThemeProviderProps = React.ComponentProps<typeof NextThemesProvider>;

export function ThemeProvider({children, ... props}: ThemeProviderProps){
    const [mounted, setMounted] = useState(false);
    useEffect(()=>{
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setMounted(true);
    },[]);

    if(!mounted){
        return <>{children}</>
    }
    return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}