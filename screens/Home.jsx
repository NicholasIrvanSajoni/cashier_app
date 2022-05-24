import React, { useContext, useEffect, useState } from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    StyleSheet,
    Dimensions,
    FlatList,
    Image,
    ScrollView
} from 'react-native';

import homeStyle from '../styles/home.style';
import { Card, Button, Title, Paragraph } from 'react-native-paper';
import axios from 'axios';
import secret from '../constants/Secret';
import UserContext from '../context/user-context';


const Home = ({ navigation }) => {
    const usercontext = useContext(UserContext)

    useEffect(() => {
        if (usercontext.CompletedLoad) {
            if (!usercontext.UserData) {
                navigation.navigate('Login')

            }
        }
    }, [usercontext.CompletedLoad])


    // const [produk, getproduk] = useState('')
    // const [fetchedData, setFetchedData] = useState([]);
    // useEffect(() => {
    //     const getData = async () => {
    //         const data = await axios.get(
    //             "https://localhost:4000/api/product/IDP002"
    //         );
    //         setFetchedData(data);
    //     };
    //     getData();
    // }, []);

    // console.log(fetchedData.data.nama_produk);
    // console.log(fetchedData.data.title);

    // console.log(testdata);


    // const testdata = async () => {
    //     try {
    //         const mauresult = (await (axios.get("http://localhost:4000/api/product", { nama_produk }))).data
    //         console.log(mauresult)
    //     } catch (error) {
    //         console.log(error.stack)
    //     }
    // }
    // useEffect(() => {
    //     axios.get("http://localhost:4000/api/product").then((response) => {
    //         getproduk(response.data);
    //     });
    // }, []);

    return (
        <View style={homeStyle.home}>
            {/* Header */}
            <View style={homeStyle.header}>
                <Text style={homeStyle.headertext}>Dashboard</Text>
            </View>


            <ScrollView>
                <View style={homeStyle.content}>

                    <View style={homeStyle.container_2}>
                        <View style={homeStyle.box_pendapatan}>
                            <Text style={homeStyle.pendapatan}>Pendapatan Hari Ini</Text>
                            <Text style={homeStyle.nilaipendapatan}>Rp. 250.000</Text>
                        </View>
                    </View>

                    {/* <View>
                        <Button onPress={() => testdata()}>Click</Button>
                        <Text>

                        </Text>
                    </View> */}
                    <View style={homeStyle.container}>
                        <Card style={homeStyle.item}>
                            <TouchableOpacity onPress={() => navigation.navigate('Kasir')}>
                                <Card.Content>
                                    <View style={homeStyle.box_image}>
                                        <Image style={homeStyle.home_image} source={require('../assets/images/Home/register.png')}></Image>
                                    </View>
                                    <View>
                                        <Paragraph style={homeStyle.item_text}>Kasir</Paragraph>
                                    </View>

                                </Card.Content>
                            </TouchableOpacity>
                        </Card>
                        <Card style={homeStyle.item}>
                            <TouchableOpacity onPress={() => navigation.navigate('Product')}>
                                <Card.Content>
                                    <View style={homeStyle.box_image}>
                                        <Image style={homeStyle.home_image} source={require('../assets/images/Home/stand.png')}></Image>
                                    </View>
                                    <View>
                                        <Paragraph style={homeStyle.item_text}>Produk</Paragraph>
                                    </View>
                                </Card.Content>
                            </TouchableOpacity>
                        </Card>
                        <Card style={homeStyle.item}>
                            <TouchableOpacity onPress={() => navigation.navigate('Kategori')}>
                                <Card.Content>
                                    <View style={homeStyle.box_image}>
                                        <Image style={homeStyle.home_image} source={require('../assets/images/Home/category.png')}></Image>
                                    </View>
                                    <View>
                                        <Paragraph style={homeStyle.item_text}>Kategori</Paragraph>
                                    </View>

                                </Card.Content>
                            </TouchableOpacity>
                        </Card>
                        <Card style={homeStyle.item}>
                            <TouchableOpacity onPress={() => navigation.navigate('Stok')}>
                                <Card.Content>
                                    <View style={homeStyle.box_image}>
                                        <Image style={homeStyle.home_image} source={require('../assets/images/Home/stock.png')}></Image>
                                    </View>
                                    <View>
                                        <Paragraph style={homeStyle.item_text}>Stok</Paragraph>
                                    </View>
                                </Card.Content>
                            </TouchableOpacity>
                        </Card>
                        <Card style={homeStyle.item}>
                            <TouchableOpacity onPress={() => navigation.navigate('Pembelian')}>
                                <Card.Content>
                                    <View style={homeStyle.box_image}>
                                        <Image style={homeStyle.home_image} source={require('../assets/images/Home/shopping.png')}></Image>
                                    </View>
                                    <View>
                                        <Paragraph style={homeStyle.item_text}>Pembelian</Paragraph>
                                    </View>
                                </Card.Content>
                            </TouchableOpacity>
                        </Card>
                        <Card style={homeStyle.item}>
                            <TouchableOpacity onPress={() => navigation.navigate('Transaksi')}>
                                <Card.Content>
                                    <View style={homeStyle.box_image}>
                                        <Image style={homeStyle.home_image} source={require('../assets/images/Home/transaction.png')}></Image>
                                    </View>
                                    <View>
                                        <Paragraph style={homeStyle.item_text}>Transaksi</Paragraph>
                                    </View>
                                </Card.Content>
                            </TouchableOpacity>
                        </Card>
                        <Card style={homeStyle.item}>
                            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                                <Card.Content>
                                    <View style={homeStyle.box_image}>
                                        <Image style={homeStyle.home_image} source={require('../assets/images/Home/report.png')}></Image>
                                    </View>
                                    <View>
                                        <Paragraph style={homeStyle.item_text}>Laporan</Paragraph>
                                    </View>
                                </Card.Content>
                            </TouchableOpacity>
                        </Card>
                    </View>
                </View>
            </ScrollView >
        </View>
    )
}

export default Home