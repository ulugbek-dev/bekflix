import { initialState } from './reducers';

export default function state(state = initialState, { type, payload }) {
    switch(type) {
        case 'TOP_MOVIES':
            return {
                ...state,
                top_movies: payload
            }
        case 'TOP_TV_SHOWS':
            return {
                ...state,
                top_tv_shows: payload
            }
        case 'NEW_MOVIES':
            return {
                ...state,
                new_movies: payload
            }
        case 'CURRENT_MOVIE':
            return {
                ...state,
                current_movie: payload
            }
        case 'CURRENT_VIDEO':
            return {
                ...state,
                current_video: payload
            }
        case 'SIMILAR_MOVIES':
            return {
                ...state,
                similar_movies: payload
            }
        case 'REFRESH':
            return {
                ...state,
                current_video: state.current_movie
            }
        default:
            return state;
    }
}