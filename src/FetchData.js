import React, { useState, useEffect } from 'react';

const FetchData = (props) => {
    const [loading, setLoading] = useState(true);
    const [err, setErr] = useState(null);
    const [res, setRes] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                if (Array.isArray(props.fetch) && props.fetch[0]) {
                    let res = await Promise.all(props.fetch);
                    switch (props.type) {
                        case 'arrayBuffer' :
                            res = await Promise.all(res.map(res => res.arrayBuffer()));
                            break;
                        case 'blob' :
                            res = await Promise.all(res.map(res => res.blob()));
                            break;
                        case 'formData' :
                            res = await Promise.all(res.map(res => res.formData()));
                            break;
                        case 'json' :
                            res = await Promise.all(res.map(res => res.json()));
                            break;
                        case 'text' :
                            res = await Promise.all(res.map(res => res.text()));
                            break;
                        default :
                            break;
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