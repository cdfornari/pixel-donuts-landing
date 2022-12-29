import { FC, useContext } from 'react'
import Head from 'next/head'
import { Loading } from '@nextui-org/react';
import { CountryContext } from '../context';
import { CountrySelector, FullScreenContainer, Navbar } from '../components';

interface Props {
  children: React.ReactNode;
}

export const MainLayout: FC<Props> = ({children}) => {
  const {loading, country} = useContext(CountryContext)
  return (
    <>
      <Head>
        <title>{`Pixel Donuts ${country}`}</title>
        <meta name='og:title' content={`Pixel Donuts ${country}`}/>
        <meta name='description' content={`best donuts in ${country}`}/>
        <meta name='og:description' content={`best donuts in ${country}`}/>
      </Head>
      {
        loading ? (
          <FullScreenContainer>
            <Loading size='xl'/>
          </FullScreenContainer>
        ) : (
          country ? (
            <div style={{width:'100vw'}}>
              <Navbar/>
              {children}
            </div>
          ) : (
            <FullScreenContainer>
              <CountrySelector/>
            </FullScreenContainer>
          )
        )
      }
    </>
  )
}