import { FC } from 'react'
import { ThemeProvider as NextThemeProvider } from 'next-themes'
import { darkTheme, lightTheme } from '../themes'
import { NextUIProvider } from '@nextui-org/react'

interface Props {
  children: React.ReactNode
}

export const ThemeProvider: FC<Props> = ({children}) => {
  return (
    <NextThemeProvider
      defaultTheme="system"
      attribute="class"
      value={{
        light: lightTheme.className,
        dark: darkTheme.className
      }}
    >
      <NextUIProvider>
        {children}
      </NextUIProvider>
    </NextThemeProvider>
  )
}