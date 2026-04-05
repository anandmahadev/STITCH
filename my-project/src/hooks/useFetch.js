import { useEffect, useState } from "react";

export default function useFetch(url) {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!url) return;
        fetch(url)
            .then((response) => response.json())
            .then(setData)
            .catch(setError);
    }, [url]);

    return { data, error };
}