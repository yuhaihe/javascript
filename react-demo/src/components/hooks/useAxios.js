import { useState, useEffect } from 'react';
import axios from 'axios';

function useAxios(url) {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState();
    const [error, setError] = useState();

    useEffect(() => {
        setLoading(true);
        axios.get(url).then(res => {
            setData(res);
        }).catch(e => {
            setError(e);
        }).finally(() => {
            setLoading(false);
        })
    }, [url]);

    return [loading, data, error];
}

export default useAxios;