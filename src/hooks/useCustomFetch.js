import { useEffect, useState } from "react";

export function useCustomFetch (url) {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(null);
    const [error, setError] = useState(null);

    const fetchData = async() => {
        setIsLoading(true);
        try {
            const res = await fetch(url);
            const data = await res.json();
            setProducts(data);
            setIsLoading(false)
        }
        catch (err) {
            console.log(err)
            setError(err)
        }
    }

    useEffect(() => {
        fetchData()
    }, [url])

    return {products, isLoading, error}
}