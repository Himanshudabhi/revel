import axios from "axios";
import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            let token = "";
            if (typeof window !== "undefined") {
                token = JSON.parse(localStorage.getItem("token"));
            }

            try {
                const response = await axios.get(url, {
                    headers: {
                        "Content-Type": "application/json",
                        'Authorization': `Bearer ${token}`,
                    }
                });
                setData(response?.data?.data);
            } catch (error) {
                setError(error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, [url]);

    return { data, isLoading, error };
};

export default useFetch;