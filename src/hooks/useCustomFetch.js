import { useEffect, useState } from "react";

export function useCustomFetch(url) {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!url) return;
        const controller = new AbortController();
        const fetchData = async () => {

            try {
                setIsLoading(true)
                const res = await fetch(url, { signal: controller.signal });
                if (!res.ok) throw new Error("Failed to fetch");
                const data = await res.json();
                setProducts(data);
            }
            catch (err) {
                if (err.name !== "AbortError") {
                    console.error(err);
                    setError(err);
                }
            }
            finally {
                setIsLoading(false)
            }
        }
        fetchData()
        return () => controller.abort();
    }, [url])

    return { products, isLoading, error }
}