import axios from "axios";
import { useEffect, useState } from "react";


const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() =>{
        if(!url) return;
        
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await axios.get(url);
                setData(response.data);
            } catch (err){
                setError(err.message)
            } finally {
                setLoading(false)
            }   
        };

        fetchData();

    }, [url]);
    return { data, loading, error};
};
export default useFetch;