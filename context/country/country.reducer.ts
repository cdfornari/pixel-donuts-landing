import { CountryState } from './';
import { Country } from './CountryContext';

type CountryAction =
|{ type: 'set', payload: Country }
|{ type: 'loaded' };

export const countryReducer = (state: CountryState, action: CountryAction) => {
    switch (action.type) {
        case 'set':
            return {
                ...state,
                country: action.payload
            }
        case 'loaded':
            return {
                ...state,
                loading: false
            }
        default:
            return state;
    }
};