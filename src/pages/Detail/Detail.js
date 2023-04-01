import React from "react";
import { View, Text, Image } from "react-native";
import Config from 'react-native-config';
import Loading from "../../components/Loading";
import useFetch from "../../hooks/useFetch";

import styles from './Detail.style';

const Detail = ({route}) => {
    const id = route.params;
    /*{id} yazsaydın eğer id.id yazmana gerek kalmayacaktı. route.params'dan dönen 
      json objesinde {id: ...} diye birşey var. sen onu alıyorsun direk olarak, json objesinin
      kendisini alıp obje.id diyerekten dönmek yerine. */
    const {loading,error,data} = useFetch(Config.API_PRODUCT_URL+"/"+id.id);
    console.log(id);
    console.log(data)
    console.log(data.title)

    if(loading){
        return <Loading></Loading>
    }
    
    if(error){
        return <Error></Error>
    }

    return(
        <View style={styles.container}>
            <Image source={{uri: data.image}} style={styles.image}></Image>
            <View style={styles.body_container}>
                <Text style={styles.title}>{data.title}</Text>
                <Text style={styles.desc}>{data.description}</Text>
                <Text style={styles.price}>{data.price} TL</Text>
            </View>
        </View>
    )
}

export default Detail;