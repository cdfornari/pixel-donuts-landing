import { FC, useState } from 'react';
import { SectionContext,Section } from './';

interface Props {
    children: React.ReactNode;
}

export const SectionProvider: FC<Props> = ({children}) => {
    const [section,setSection] = useState<Section>('');
    return (
        <SectionContext.Provider value={{
            section,
            setSection
        }}>
            {children}
        </SectionContext.Provider>
    )
};