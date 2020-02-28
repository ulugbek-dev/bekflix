import { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';

export const useAxios = (api, action, type, extra) => {
    const [response, setResponse] = useState([]);
    const dispatch = useDispatch();

    // Fetch API
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3${type ? type : '/'}${api}${extra ? extra : ''}?api_key=e0f9357f349cd13298820d389e248b31&language=en-US`)
            .then(res => {
                if(typeof api === 'number')
                    setResponse(res.data)
                else
                    setResponse(res.data.results)
            })
    }, [])

    //  Dispatch action into reducers
    useEffect(() => {
        if(action){
            dispatch({
                type: action,
                payload: response
            })
        }
    }, [response])

    return response;
}