import {useState, useEffect} from 'react';
import axios from 'axios';


/*Custom Hooklar mutlaka use ön ekini alırlar. Genel olarak util class'ı gibi düşünebilirsin
 çalışma mantığını ve amacını. Generic bir şekilde ihtiyacı olaran her sayfanın kullanabileceği
 durumda olmalı. Tek bir noktaya bağımlılığı olmamalı yani. Bundan dolayı zaten Config.API_URL
 yerine parametre olarak url kullanmayı tercih ettik.*/

function useFetch(url){
    const [error,setError] = useState(null);
    const [loading,setLoading] = useState(true);
    const [data,setData] = useState([]);
    
    const fetchData = async () => {
        //hem parçalıyor hem de isim veriyor. parçalamayı {} ile yapıyoruz.
        console.log('loading: '+loading)
        try{
            const {data: responseData} = await axios.get(url);
            console.log("url: "+url);
            console.log("fetchData: "+responseData)
            setData(responseData);
            setLoading(false);
        }
        catch(err){
            setError(err.message);
            console.log('error: '+err.message);
            console.log('loading: '+loading)
            setLoading(false);
        }
    };

    //Lifecycle'a uyması için fetchData fonksiyonu initalize olduğu anda çağırılıyor.
    useEffect(() => {
        fetchData()
    },[])

    //Her zaman ekrana basılacak Viewlar döneceksin diye birşey yok.
    console.log('fetchDataLastSentence: '+data)
    return {error, loading, data};
}

export default useFetch;