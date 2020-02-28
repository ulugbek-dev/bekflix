import { useState, useEffect } from 'react';
import { useLocation } from 'react-router';

export const useRerender = () => {
    const location = useLocation();
    const [render, setRender] = useState(true);

    useEffect(() => {
        setRender(false);
        setTimeout(() => {
            setRender(true);
        }, 0)
    }, [location])

    return render;
}