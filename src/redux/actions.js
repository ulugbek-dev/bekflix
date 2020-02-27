import { initialState } from './reducers';

export default function state(state = initialState, { type, payload }) {
    switch(type) {
        case 'TOP_MOVIES':
            return {
                ...state,
                home: {
                    ...state.home,
                    top_movies: payload
                }
            }
        case 'TOP_TV_SHOWS':
            return {
                ...state,
                home: {
                    ...state.home,
                    top_tv_shows: payload
                }
            }
        case 'NEW_MOVIES':
            return {
                ...state,
                home: {
                    ...state.home,
                    new_movies: payload
                }
            }
        default:
            return state;
    }
}