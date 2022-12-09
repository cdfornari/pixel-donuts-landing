import { createContext } from 'react';

export type Country = 'vzla' | 'jpn' | '';

interface ContextProps {
    country: Country;
    loading: boolean;
    setCountry: (country: Country) => void;
}

export const CountryContext = createContext({} as ContextProps);