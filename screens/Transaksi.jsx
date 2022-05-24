import React from 'react';
import { View, useWindowDimensions, Text, Image, TouchableOpacity } from 'react-native';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
import { Searchbar } from 'react-native-paper';
import colors from '../constants/Colors';
import transaksiStyle from '../styles/transaksi.style';

const FirstRoute = () => (
    <View style={transaksiStyle.itempenjualan}>
        <View style={transaksiStyle.actionbar}>
            <View style={transaksiStyle.searchprodukbar}>
                <Searchbar style={transaksiStyle.Searchbarstyle}
                    placeholder="Search"

                // icon={require('../assets/icon/search.png')}
                // onChangeText={onChangeSearch}
                // value={searchQuery}
                />
            </View>
        </View>
        <View style={transaksiStyle.boxitem}>
            {/* <View style={transaksiStyle.checkcart}>
                            <Checkbox style={transaksiStyle.checkboxcart}
                            status={checked ? 'checked' : 'unchecked'}
                            onPress={() => {
                                setChecked(!checked);
                            }}
                            />
                        </View> */}
            <View style={transaksiStyle.itemcartboximage}>
                <Image style={transaksiStyle.itemcartimage} source={require('../assets/images/tes.png')}></Image>
                <View>
                    <Text style={transaksiStyle.tanggalbold}>28 September 2022</Text>
                </View>
            </View>
            <View style={transaksiStyle.deskripsiitem}>
                <View>
                    <Text style={transaksiStyle.textbold} numberOfLines={2}>Permen Sweet asdPermen Sweet asdasasdas dasd sadasasdas dasd sad Permen Sweet asdasasdas dasd sad</Text>
                </View>
                <View style={transaksiStyle.transaksivariasi}>
                    <View>
                        <Text>Variasi : </Text>
                    </View>
                    <View style={transaksiStyle.jenisvariasi}>
                        <Text style={transaksiStyle.textboldcolor} numberOfLines={2}>Blackcurrent
                            {/* sd sd sds ds s s s s s s s s s s s s s s  sd d d d ddsadas das das dsdsds ds ds ds d sd sds d sd s ds s ds s dt */}
                        </Text>
                    </View>
                </View>
                <View style={transaksiStyle.transaksi_jenis_jumlah}>
                    <View>
                        <Text>Jumlah : </Text>
                    </View>
                    <View style={transaksiStyle.jenisvariasi}>
                        <Text style={transaksiStyle.textboldcolor} >30 Box
                        </Text>
                    </View>
                </View>
                <View style={transaksiStyle.transaksi_harga}>
                    <View style={transaksiStyle.transaksi_satuan}>
                        <Text>Harga Satuan :</Text>
                        <Text style={transaksiStyle.texthargacolor}>Rp.128.000</Text>
                    </View>
                    <View style={transaksiStyle.transaksi_total}>
                        <Text>Total Harga :</Text>
                        <Text style={transaksiStyle.texthargacolor}>Rp.7.156.000</Text>
                    </View>
                </View>
            </View>
        </View>
    </View>
);
const SecondRoute = () => (
    <View style={transaksiStyle.itempenjualan}>
        <View style={transaksiStyle.actionbar}>
            <View style={transaksiStyle.searchprodukbar}>
                <Searchbar style={transaksiStyle.Searchbarstyle}
                    placeholder="Search"

                // icon={require('../assets/icon/search.png')}
                // onChangeText={onChangeSearch}
                // value={searchQuery}
                />
            </View>
        </View>
        <View style={transaksiStyle.boxitem}>
            {/* <View style={transaksiStyle.checkcart}>
                            <Checkbox style={transaksiStyle.checkboxcart}
                            status={checked ? 'checked' : 'unchecked'}
                            onPress={() => {
                                setChecked(!checked);
                            }}
                            />
                        </View> */}
            <View style={transaksiStyle.itemcartboximage}>
                <Image style={transaksiStyle.itemcartimage} source={require('../assets/images/tes.png')}></Image>
                <View>
                    <Text style={transaksiStyle.tanggalbold}>28 September 2022</Text>
                </View>
            </View>
            <View style={transaksiStyle.deskripsiitem}>
                <View>
                    <Text style={transaksiStyle.textbold} numberOfLines={2}>Permen Sweet asdPermen Sweet asdasasdas dasd sadasasdas dasd sad Permen Sweet asdasasdas dasd sad</Text>
                </View>

                <View style={transaksiStyle.transaksivariasi}>
                    <View>
                        <Text>Supplier : </Text>
                    </View>
                    <View style={transaksiStyle.jenisvariasi}>
                        <Text style={transaksiStyle.textboldcolor} numberOfLines={2}>Blackcurrent
                            {/* sd sd sds ds s s s s s s s s s s s s s s  sd d d d ddsadas das das dsdsds ds ds ds d sd sds d sd s ds s ds s dt */}
                        </Text>
                    </View>
                </View>
                <View style={transaksiStyle.transaksivariasipembelian}>
                    <View>
                        <Text>Variasi : </Text>
                    </View>
                    <View style={transaksiStyle.jenisvariasi}>
                        <Text style={transaksiStyle.textboldcolor} numberOfLines={2}>Blackcurrent
                            {/* sd sd sds ds s s s s s s s s s s s s s s  sd d d d ddsadas das das dsdsds ds ds ds d sd sds d sd s ds s ds s dt */}
                        </Text>
                    </View>
                </View>
                <View style={transaksiStyle.transaksi_jenis_jumlah}>
                    <View>
                        <Text>Jumlah : </Text>
                    </View>
                    <View style={transaksiStyle.jenisvariasi}>
                        <Text style={transaksiStyle.textboldcolor} >30 Box
                        </Text>
                    </View>
                </View>
                <View style={transaksiStyle.transaksi_harga}>
                    <View style={transaksiStyle.transaksi_satuan}>
                        <Text>Harga Satuan :</Text>
                        <Text style={transaksiStyle.texthargacolor}>Rp.128.000</Text>
                    </View>
                    <View style={transaksiStyle.transaksi_total}>
                        <Text>Total Harga :</Text>
                        <Text style={transaksiStyle.texthargacolor}>Rp.7.156.000</Text>
                    </View>
                </View>
            </View>
        </View>
    </View>
);

const Transaksi = ({ navigation }) => {
    // const layout = useWindowDimensions();

    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'first', title: 'Penjualan' },
        { key: 'second', title: 'Pembelian' },
    ]);

    const renderScene = SceneMap({
        first: FirstRoute,
        second: SecondRoute,
    });

    const renderTabBar = props => (
        <TabBar style={transaksiStyle.tabbar}
            {...props}
            activeColor={'black'}
            inactiveColor={'black'}
            indicatorStyle={{ backgroundColor: colors.lightgreen, height: 5 }}

        />
    );

    return (
        <View style={transaksiStyle.transaksi}>
            {/* Header */}
            <View style={transaksiStyle.header}>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <View style={transaksiStyle.rightheader}>
                        <Image style={transaksiStyle.leftheader} source={require('../assets/images/Icon/arrowleft.png')}></Image>
                    </View>
                </TouchableOpacity>
                <View style={transaksiStyle.titlecart}>
                    <Text style={transaksiStyle.headertext}>Transaksi</Text>
                </View>
            </View>

            <View style={transaksiStyle.content}>
                <TabView
                    navigationState={{ index, routes }}
                    renderScene={renderScene}
                    renderTabBar={renderTabBar}
                    onIndexChange={setIndex}
                // initialLayout={{ width: layout.width }}
                />
            </View>

        </View>
    );
}

export default Transaksi
