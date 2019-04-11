import React, { useState, useEffect } from 'react';

const FetchData = (props) => {
    const [loading, setLoading] = useState(true);
    const [err, setErr] = useState(null);
    const [res, setRes] = useState([]);

    useEffect(() => {
        (async () => {
            const resFunc = {
                arrayBuffer: 'arrayBuffer',
                blob: 'blob',
                formData: 'formData',
                json: 'json',
                text: 'text'
            }
            try {
                if (Array.isArray(props.fetch) && props.fetch[0]) {
                    let res = await Promise.all(props.fetch);
                    if (props.type && resFunc[props.type]) {
                        res = await Promise.all(res.map(res => res[resFunc[props.type]]()));
                    }
                    setRes(res);
                    setLoading(false);
                } else if (!Array.isArray(props.fetch) || props.fetch.length === 0) {
                    throw new Error("FetchData: fetch prop must be an array of json fetched promises");
                }
            } catch (err) {
                setErr(err);
                setLoading(false);
            }
        })();
    }, [props]);

    return (
        <>
            {
                props.children({ loading, err, res })
            }
        </>
    );
}

export default FetchData;