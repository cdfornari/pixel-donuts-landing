import type { AppProps } from 'next/app'
import localFont from '@next/font/local';
import { ThemeProvider } from '../providers'
import { CountryProvider, SectionProvider } from '../context'

const donutFont = localFont({ 
  src: '../public/donut.otf',
  variable: '--donut'
});

export default function App({ Component, pageProps }: AppProps) {
  return(
    <CountryProvider>
      <ThemeProvider>
        <SectionProvider>
          <main className={donutFont.variable}>
            <Component {...pageProps} />
          </main>
        </SectionProvider>
      </ThemeProvider>
    </CountryProvider>
  )
}
