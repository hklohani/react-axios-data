import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (setter) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null)
    useEffect(() => {
        const get = async () => {
            try {
                const response = await axios(setter)
                setData(response);
            } catch (err) {
                if (err.response) {
                    // The client was given an error response (5xx, 4xx)
                    setError(err)
                } else if (err.request) {
                    // The client never received a response, and the request was never left
                    setError(err)

                } else {
                    // Anything else
                    setError(err)


                }
            }
        }
        if (setter.url && setter.method) {
            setError(null)
           get()
        }else{
            setData(null);
            if(!setter.url) setError('url is required')
            else{
                setError('method is required')
            }
        }
    }, []);

    return { data, error };
};

export default useFetch;