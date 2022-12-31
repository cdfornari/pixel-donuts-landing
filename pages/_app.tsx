import type { AppProps } from 'next/app'
import localFont from '@next/font/local';
import { globalCss } from '@nextui-org/react';
import { ThemeProvider } from '../providers'
import { CountryProvider, SectionProvider, ShoppingCartProvider } from '../context'

const donutFont = localFont({ 
  src: '../public/donut.otf',
  variable: '--donut'
});

const globalStyles = globalCss({
  html: {
    scrollBehavior: 'smooth',
  }
})

export default function App({ Component, pageProps }: AppProps) {
  globalStyles();
  return(
    <CountryProvider>
      <ShoppingCartProvider>
        <ThemeProvider>
          <SectionProvider>
            <main className={donutFont.variable}>
              <Component {...pageProps} />
            </main>
          </SectionProvider>
        </ThemeProvider>
      </ShoppingCartProvider>
    </CountryProvider>
  )
}
