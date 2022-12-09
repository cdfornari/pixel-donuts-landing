import { createContext } from 'react';

export type Section = '' | 'menu' | 'about-us' | 'locations';

interface ContextProps {
    section: Section;
    setSection: (section: Section) => void;
}

export const SectionContext = createContext({} as ContextProps);