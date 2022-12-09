import { styled } from '@nextui-org/react';

export const Section = styled('div', {
    width: '100vw',
    minHeight: 'calc(100vh - 200px)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    padding: '50px',
    boxSizing: 'border-box',
    margin: '0 auto',
    borderBottom: '0.5px solid $text',
    '& h1': {
        fontFamily: 'var(--donut)',
        textTransform: 'uppercase',
    }
})