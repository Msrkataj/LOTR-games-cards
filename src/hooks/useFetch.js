import React, { useEffect, useState } from 'react';

export const useFetch = (url, options) => {

    const [data, setData] = useState(null);
    const [pending, setPending] = useState(false);
    const [errors, setErrors] = useState(false);

    useEffect(() => {
        setPending(true);
        fetch(url, options)
            .then(response => response.json())
            .then(data => {
                setData(data);
                setPending(false)
            })
            .catch(err => {
                setErrors(err);
                setPending(false);
            })
    }, [url, options])


    return ({
        data,
        pending,
        errors
    })
}