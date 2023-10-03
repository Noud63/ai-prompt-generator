"use client"

import { useEffect, useState} from 'react'
import Image from 'next/image'
import darkmode from '../public/assets/icons/darkmode.png'
import lightmode from '../public/assets/icons/lightmode.png'
import { useTheme } from 'next-themes'

const ToggleTheme = () => {

    const [mounted, setMounted] = useState(false);
    const {theme, setTheme } = useTheme("dark")

    useEffect(() => {
      setMounted(true);
    }, []);

    if (!mounted) {
      return null;
    }

  return (
    <div>
    <Image 
      src={theme === "dark" ? lightmode : darkmode}
      alt=""
      width={30}
      height={30}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="cursor-pointer"
       />
    </div>
  )
}

export default ToggleTheme
