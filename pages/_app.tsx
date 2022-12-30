import type { AppProps } from 'next/app'
import localFont from '@next/font/local';
import { globalCss } from '@nextui-org/react';
import { ThemeProvider } from '../providers'
import { CountryProvider, SectionProvider } from '../context'
import { ModalProvider } from '../context/modal/ModalProvider';

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
      <ThemeProvider>
        <SectionProvider>
          <ModalProvider>
            <main className={donutFont.variable}>
              <Component {...pageProps} />
            </main>
          </ModalProvider>
        </SectionProvider>
      </ThemeProvider>
    </CountryProvider>
  )
}
