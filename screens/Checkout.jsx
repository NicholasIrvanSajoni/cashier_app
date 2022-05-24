import React, { useEffect, useState } from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
    Image,
    FlatList
} from 'react-native'
import { Card, Button, Title, Paragraph, Searchbar, Modal, Portal, Provider } from 'react-native-paper';
import axios from 'axios';
import colors from '../constants/Colors';
import checkoutStyle from '../styles/checkout.style';

const Checkout = ({ navigation }) => {

    return (
        <View style={checkoutStyle.home}>
            {/* Header */}
            <View style={checkoutStyle.header}>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <View style={checkoutStyle.rightheader}>
                        <Image style={checkoutStyle.leftheader} source={require('../assets/images/Icon/arrowleft.png')}></Image>
                    </View>
                </TouchableOpacity>
                <View style={checkoutStyle.titlecart}>
                    <Text style={checkoutStyle.headertext}>Checkout</Text>
                </View>
            </View>

            <ScrollView>
                <View style={checkoutStyle.content}>
                    <View style={checkoutStyle.contentheadercheckout}>
                        <View style={checkoutStyle.totalhargacheckout}>
                            <Text>
                                Tanggal Transaksi
                            </Text>
                            <Text>
                                28 Agustus 2022
                            </Text>
                        </View>
                        <View style={checkoutStyle.totalhargacheckout}>
                            <Text>
                                Total Transaksi
                            </Text>
                            <Text>
                                1.738.500
                            </Text>
                        </View>
                    </View>
                    <View>
                        <View style={checkoutStyle.boxitem}>
                            {/* <View style={checkoutStyle.checkcart}>
                            <Checkbox style={checkoutStyle.checkboxcart}
                            status={checked ? 'checked' : 'unchecked'}
                            onPress={() => {
                                setChecked(!checked);
                            }}
                            />
                        </View> */}
                            <View style={checkoutStyle.deskripsiitem}>

                                <View style={checkoutStyle.img_info}>
                                    <View style={checkoutStyle.itemcartboximage}>
                                        <Image style={checkoutStyle.itemcartimage} source={require('../assets/images/tes.png')}></Image>
                                    </View>
                                    <View style={checkoutStyle.nama_item}>
                                        <Text style={checkoutStyle.textbold} numberOfLines={2}>Permen Sweet asdPermen Sweet asdasasdas dasd sadasasdas dasd sad Permen Sweet asdasasdas dasd sad</Text>
                                        <View style={checkoutStyle.transaksivariasi}>
                                            <View>
                                                <Text>Variasi : </Text>
                                            </View>
                                            <View style={checkoutStyle.jenisvariasi}>
                                                <Text style={checkoutStyle.textboldcolor} numberOfLines={1}>Blackcurrent
                                                    {/* sd sd sds ds s s s s s s s s s s s s s s  sd d d d ddsadas das das dsdsds ds ds ds d sd sds d sd s ds s ds s dt */}
                                                </Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                                <View style={checkoutStyle.transaksi_jenis_jumlah}>
                                    <View>
                                        <Text>4 x 50.000 </Text>
                                    </View>
                                    <View style={checkoutStyle.transaksi_total}>
                                        <Text style={checkoutStyle.textboldcolor} >1.573.000
                                        </Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>

            </ScrollView>
        </View>

    )
}

export default Checkout