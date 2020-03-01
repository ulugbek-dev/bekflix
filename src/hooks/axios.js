import { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';

export const useAxios = (api, action, type, extra, page) => {
    const dispatch = useDispatch();

    // Fetch API
    useEffect(() => {
        function fetchApi() {
            axios.get(`https://api.themoviedb.org/3${type ? type : '/'}${api}${extra ? extra : ''}?api_key=e0f9357f349cd13298820d389e248b31&language=en-US&adult=false&page=${page !== 1 ? page : 1}`)
                .then(res => {
                    // Dispatch to store
                    dispatch({
                        type: action,
                        payload: res.data
                    })
                })
                .catch(err => console.log(err))
        }

        fetchApi();
    }, [api, action, type, extra, page])
}