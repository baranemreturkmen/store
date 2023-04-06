import React, { useEffect, useState } from "react";
import { SafeAreaView, Text, FlatList, ActivityIndicator, Button, View } from "react-native";
import Config from "react-native-config";
import axios from 'axios';

import ProductCard from '../../components/ProductCard'
import useFetch from "../../hooks/useFetch";
import Loading from "../../components/Loading";
import Error from "../../components/Error";
import { useDispatch } from "react-redux";

const Products = ({navigation}) => {
    //component mount olduğunda fetch data ile veri çekiyorum.
    //component'imi çağırdığım anda birşeylerin olmasını istiyorsam useEffect kulanıyordum.
    //Custom Hook sayesinde gerek kalmadı bu arada.
    /*useEffect(() => {
        fetchData();
    },[]);*/

    const dispatch = useDispatch();

    const {loading,data,error} = useFetch(Config.API_PRODUCT_URL);
    console.log('render');
    console.log({loading, data: data.length, error});

    const handleProductSelect = id => {
        navigation.navigate('DetailPage',{id});
    }

    const renderProduct = ({item}) => <ProductCard product={item} onSelect={() => handleProductSelect(item.id)}></ProductCard>
    console.log('afterRenderProduct');
    
    if(loading){
        return <Loading></Loading>
    }
    console.log('afterLoading');

    if(error){
        return <Error></Error>
    }
    console.log('afterError');

    return(
        <View>
            <Button title="LogOut" onPress={() => dispatch({type: 'SET_USER', payload: {user: null}})}></Button>
            <FlatList data={data} renderItem={renderProduct}></FlatList>
        </View>
    );
}

export default Products;