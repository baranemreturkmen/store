import {useState} from 'react';
import axios from 'axios';

function usePost(){
    const[data, setData] = useState(null);
    const[loading, setLoading] = useState(false);
    const[error, setError] = useState(null);

    const post = async(url, apiData) => {
        try{
            setLoading(true);
            console.log("1* url:"+url);
            const {data: responseData} = await axios.post(url,apiData);
            console.log("2*");
            setData(responseData);
            setLoading(false);
            setError(null);
        }
        catch(err){
            setError(err);
            setLoading(false);
        }
    }

    return {data, loading, error, post}
}

export default usePost;