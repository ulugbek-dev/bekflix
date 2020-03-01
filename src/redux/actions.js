import { initialState } from './reducers';

export default function state(state = initialState, { type, payload }) {
    switch(type) {
        case 'TOP_MOVIE':
            return {
                ...state,
                top_movie: payload
            }
        case 'TOP_TV':
            return {
                ...state,
                top_tv: payload
            }
        case 'TOP_PERSON':
            return {
                ...state,
                top_person: payload
            }
        case 'NEW_MOVIE':
            return {
                ...state,
                new_movie: payload
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
        case 'LOAD_MORE_MOVIE':
            return {
                ...state, 
                top_movie: [...state.top_movie, ...payload]
            }
        case 'LOAD_MORE_TV':
            return {
                ...state, 
                top_tv: [...state.top_tv, ...payload]
            }
        case 'LOAD_MORE_PERSON':
            return {
                ...state,
                top_person: [...state.top_person, ...payload]
            }
        default:
            return state;
    }
}