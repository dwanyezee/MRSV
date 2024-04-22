import { useState, useEffect } from "react";
import { UseNotification } from "./NotificationProvider";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    const dispatch = UseNotification();

    useEffect(() => {
        const abortCont = new AbortController();

        fetch(url, {signal: abortCont.signal })
            .then(res => {
                if (!res.ok) {
                    dispatch({
                        type: "ERROR",
                        message: "There was an error in processing your request - " + res.status
                    })
                    throw Error('Could not fetch data for that resource');
                }
                return res.json();
            })
            .then(data => {
                setData(data);
                setIsPending(false);
                setError(null);
            })
            .catch(err => {
                if (err.name === 'AbortError') {
                    console.log("Fetch Aborted")
                }
                else
                {
                    setIsPending(false);
                    setError(err.message);
                    dispatch({
                        type: "ERROR",
                        message: "There was an error in processing your request - " + err.message
                    })
                }
            })
        
        return () => abortCont.abort();
    }, [url]);

    return { data, isPending, error }
}

export default useFetch;