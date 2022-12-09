import { FC, useCallback, useEffect, useReducer } from 'react';
import { CountryContext,countryReducer } from './';
import { Country } from './CountryContext';

interface Props {
    children: React.ReactNode
}

export interface CountryState {
    country: Country;
    loading: boolean;
}

const initialState: CountryState = {
    country: '',
    loading: true,
}

export const CountryProvider: FC<Props> = ({children}) => {
    const [state,dispatch] = useReducer(countryReducer, initialState);
    useEffect(() => {
      const country = localStorage.getItem('country');
      if (country) 
        dispatch({type: 'set', payload: country as Country})
      const timeout = setTimeout(() => dispatch({type: 'loaded'}), 1000)
      return () => clearTimeout(timeout)
    }, [])
    const setCountry = useCallback(
        (country: Country) => {
            dispatch({type: 'set', payload: country})
            localStorage.setItem('country', country)
        }
    ,[])
    return (
        <CountryContext.Provider value={{...state,setCountry}}>
            {children}
        </CountryContext.Provider>
    )
};