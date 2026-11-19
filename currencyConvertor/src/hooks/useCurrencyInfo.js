import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});

    useEffect(() => {
        const url = `https://pages.dev${currency}.json`;
        
        fetch(url)
            .then((res) => {
                if (!res.ok) throw new Error(`HTTP error: ${res.status}`);
                return res.json();
            })
            .then((res) => setData(res[currency]))
            .catch((err) => console.error("Currency API Error:", err));
    }, [currency]);

    return data;
}

export default useCurrencyInfo;
