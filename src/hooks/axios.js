import { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';

export const useAxios = (api, type) => {
    const [response, setResponse] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/${api}`)
            .then(res => {
                setResponse(res.data.results)
            })
    }, []);

    useEffect(() => {
        if(type){
            dispatch({
                type: type,
                payload: response
            })
        }
    }, [response])

    return response;
}