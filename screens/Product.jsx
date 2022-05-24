import React, { useContext, useEffect, useState } from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
    Image,
    FlatList
} from 'react-native'
import { Card, Button, TextInput, Searchbar, Modal, Portal, Provider } from 'react-native-paper';
import axios from 'axios';
import productStyle from '../styles/product.style';
import colors from '../constants/Colors';
import { Picker } from '@react-native-picker/picker';
import secret from '../constants/Secret';
import UserContext from '../context/user-context';

const Product = ({ navigation }) => {

    const usercontext = useContext(UserContext);

    const [shouldShowModal, setShouldShowModal] = useState(false);
    // Kategori
    const [ShowTambahKategori, setShowTambahKategori] = useState(false)
    const [DataListKategori, setDataListKategori] = useState()
    const [ChooseKategori, setChooseKategori] = useState()
    const [disabled, setDisabled] = useState(false);
    // Produk
    const [NamaProduk, setNamaProduk] = useState("");
    const [KategoriProduk, setKategoriProduk] = useState("");
    const [IdKategoriProduk, setIdKategoriProduk] = useState("");
    const [DataListProduk, setDataListProduk] = useState()

    // Edit Produk
    const [ShowEditProduk, setShowEditProduk] = useState(false)
    // Image

    useEffect(() => {
        fetchKategori();
        fetchprodukallkategori();
    }, []);

    useEffect(() => {
    }, []);

    // Kategori
    const fetchKategori = async () => {
        try {
            const getkategoriproduk = (await axios.get(`/kategori/user/${usercontext.UserData.id_user}`)).data
            // console.log(getkategoriproduk.data[1].id_kategori);
            // console.log(getkategoriproduk)
            setDataListKategori(getkategoriproduk.data)
        } catch (error) {
            console.log(error.response.data)
        }
    };

    // All Kategori
    const fetchprodukallkategori = async () => {
        try {
            const getproduk = (await axios.get(`/product/user/${usercontext.UserData.id_user}`)).data
            // console.log(getkategoriproduk.data[1].id_kategori);
            // console.log(getproduk)
            setDataListProduk(getproduk.data)
            setChooseKategori([])
        } catch (error) {
            setDataListProduk([])
            console.log(error.response.data)
        }
    };


    // Produk
    const fetchprodukbykategori = async (id_kategori) => {
        try {
            const getproduk = (await axios.get(`/product/kategori/${id_kategori}`)).data
            // console.log(getkategoriproduk.data[1].id_kategori);
            // console.log(getproduk)
            setChooseKategori(getproduk.data)
            setDataListProduk([])
        } catch (error) {
            setChooseKategori([])
            console.log(error.response.data)
        }
    };

    const handlerCreateProduk = async () => {
        try {
            if (NamaProduk == "") {
                // console.log(error.response.data)
                alert(JSON.stringify("Nama Kategori Tidak Boleh Kosong"))
            }
            else {
                const tambahprdk = (await axios.post('/product',
                    {
                        nama_produk: NamaProduk,
                        id_user: usercontext.UserData.id_user,
                        id_kategori: KategoriProduk
                    },
                    {
                        headers:
                        {
                            Authorization: 'bearer ' + usercontext.token
                        }
                    }
                )).data
                console.log(tambahprdk)
                setNamaProduk('');
                setShowTambahKategori(false);
                fetchprodukallkategori();
            }
        } catch (error) {
            console.log(error.response.data);
        }
    }

    // const handlerCreateProduk = async () => {
    //     try {
    //         const createproduk = (await axios.post(`/product`,
    //             {
    //                 nama_produk: NamaProduk,
    //                 id_user: usercontext.UserData.id_user,
    //                 id_kategori: KategoriProduk,
    //             },
    //             {
    //                 headers:
    //                 {
    //                     Authorization: 'bearer ' + usercontext.token
    //                 }
    //             }
    //         ))
    //         console.log(createproduk)
    //         setNamaProduk('');
    //         setShowTambahKategori(false);
    //         fetchprodukallkategori();
    //     } catch (error) {
    //         console.log(error.response.data)
    //     }
    // }


    // Image
    const onChange = (imageList, addUpdateIndex) => {
        // data for submit
        // console.log(imageList, addUpdateIndex);
        setImages(imageList);
    };

    // const deleteproduk = async () => {
    //     try {
    //         const deleteproduk = (await axios.delete('/product')).data
    //         // console.log(getkategoriproduk.data[1].id_kategori);
    //         console.log(getproduk)
    //         setDataListProduk(getproduk.data)
    //     } catch (error) {
    //         console.log(error.response.data)
    //     }
    // }



    // console.log(DataListKategori)

    return (
        <View style={productStyle.home}>
            {/* Header */}
            <View style={productStyle.header}>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <View style={productStyle.rightheader}>
                        <Image style={productStyle.leftheader} source={require('../assets/images/Icon/arrowleft.png')}></Image>
                    </View>
                </TouchableOpacity>
                <View style={productStyle.titlecart}>
                    <Text style={productStyle.headertext}>Produk</Text>
                </View>
            </View>

            {/* <FlatList
                data={data}
                renderItem={({ item }) => <Text>{item.name}</Text>}
                keyExtractor={(item) => item.id}
            /> */}

            <ScrollView>
                <View style={productStyle.content}>

                    <View style={productStyle.actionbar}>
                        <View style={productStyle.searchprodukbar}>
                            <Searchbar style={productStyle.Searchbarstyle}
                                placeholder="Search"

                            // icon={require('../assets/icon/search.png')}
                            // onChangeText={onChangeSearch}
                            // value={searchQuery}
                            />
                        </View>
                        <View style={productStyle.iconfilterbox}>
                            <Image style={productStyle.iconfilter} source={require('../assets/images/Icon/filter.png')}></Image>
                        </View>
                    </View>

                    <Text style={productStyle.menukategori}>Kategori :</Text>
                    <View style={productStyle.kategoricard}>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            <TouchableOpacity style={productStyle.kategoribox}>
                                <Button style={productStyle.kategoritext} onPress={() => fetchprodukallkategori()}>
                                    All
                                </Button>
                            </TouchableOpacity>
                            {DataListKategori?.map((listkategori) => (
                                <TouchableOpacity style={productStyle.kategoribox} key={listkategori.id_kategori}
                                    onPress={() => {
                                        fetchprodukbykategori(listkategori.id_kategori)
                                    }}>
                                    <Button style={productStyle.kategoritext}>
                                        {listkategori.nama_kategori}
                                    </Button>
                                </TouchableOpacity>
                            ))}
                        </ScrollView>
                    </View>
                    <Text>Produk : </Text>
                    <View style={productStyle.boxshowproduk}>

                        {DataListProduk?.map((listproduk) => (
                            <View style={productStyle.boxitem} key={listproduk.id_produk}>
                                <View style={productStyle.itemcartboximage}>
                                    <Image style={productStyle.itemcartimage}
                                        // source={require('../assets/images/tes.png')}
                                        source={{
                                            uri: `http://localhost:4000/${listproduk.link_foto_produk}`
                                        }}
                                    ></Image>
                                </View>
                                <View style={productStyle.deskripsiitem}>
                                    <View>
                                        <Text style={productStyle.textbold} numberOfLines={4}>{listproduk.nama_produk}</Text>
                                    </View>

                                </View>
                                <View style={productStyle.box_icon_produk}>
                                    <TouchableOpacity>
                                        <Image style={productStyle.icon_produk}
                                            source={require('../assets/images/Icon/trash.png')}></Image>
                                    </TouchableOpacity>
                                    <Button style={productStyle.btn_save} contentStyle={{ flexDirection: 'row-reverse' }} icon={require('../assets/images/Icon/edit.png')}
                                        mode="contained" onPress={() => setShowEditProduk(true)}>Edit</Button>
                                </View>
                            </View>
                        ))}

                        {ChooseKategori?.map((chooselistproduk) => (
                            <View style={productStyle.boxitem} key={chooselistproduk.id_produk}>
                                <View style={productStyle.itemcartboximage}>
                                    <Image style={productStyle.itemcartimage}
                                        source={{
                                            uri: `http://localhost:4000/${chooselistproduk.link_foto_produk}`
                                        }}
                                    ></Image>
                                </View>
                                <View style={productStyle.deskripsiitem}>
                                    <View>
                                        <Text style={productStyle.textbold} numberOfLines={4}>{chooselistproduk.nama_produk}</Text>
                                    </View>

                                </View>
                                <View style={productStyle.box_icon_produk}>
                                    <TouchableOpacity>
                                        <Image style={productStyle.icon_produk}
                                            source={require('../assets/images/Icon/trash.png')}></Image>
                                    </TouchableOpacity>
                                    <Button style={productStyle.btn_save} contentStyle={{ flexDirection: 'row-reverse' }} icon={require('../assets/images/Icon/edit.png')}
                                        mode="contained" onPress={() => setShowEditProduk(true)}>Edit</Button>
                                </View>
                            </View>
                        ))}


                    </View>
                </View>



            </ScrollView >
            {/* Add Button */}
            <TouchableOpacity onPress={() => setShouldShowModal(!shouldShowModal)}>
                <View style={productStyle.btn_round_box}>
                    <View style={productStyle.btn_round}>
                        <Image style={productStyle.btn_round_icon} source={require('../assets/images/Icon/plus.png')}></Image>
                    </View>
                </View>
            </TouchableOpacity>

            {/* Tambah Produk */}
            {
                shouldShowModal ? (
                    <View style={productStyle.modalpembelian}>
                        <View style={productStyle.modalheader}>
                            <View style={productStyle.titlemodal}>
                                <Text style={productStyle.cartheadertext}>Pembelian Produk</Text>
                            </View>
                            <TouchableOpacity onPress={() => setShouldShowModal(!shouldShowModal)}>
                                <View style={productStyle.rightheadermodal}>
                                    <Image source={require('../assets/images/Icon/close.png')}></Image>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={productStyle.modaladdpembelian}>
                            <View style={productStyle.boxmodaltambahpembelian}>

                                <Text style={productStyle.boxheight}>Nama Produk</Text>
                                <TextInput style={productStyle.boxinput}
                                    value={NamaProduk}
                                    mode={'flat'}
                                    onChangeText={NamaProduk => setNamaProduk(NamaProduk)}
                                />

                                <View style={productStyle.modaljnsproduk}>
                                    <Text style={productStyle.boxheight}>Kategori Produk</Text>
                                    <View style={productStyle.modalselectinput}>
                                        <Picker
                                            selectedValue={KategoriProduk}
                                            onValueChange={(itemValue, itemIndex) => setKategoriProduk(itemValue)}
                                        >
                                            <Picker.Item label={"Pilih Kategori"} value={"Please Select Category"} />
                                            {DataListKategori?.map((listkategori) => (
                                                <Picker.Item key={listkategori.id_kategori} label={listkategori.nama_kategori} value={listkategori.id_kategori} />
                                            ))}
                                        </Picker>
                                    </View>
                                    {/* <input type="file" name="myImage" onChange={onImageChange} /> */}
                                </View>

                                <View style={productStyle.modaljnsproduk}>
                                    <Text style={productStyle.boxheight}>Foto Produk</Text>

                                </View>

                                <Button style={productStyle.btn_save} mode="contained" onPress={() => handlerCreateProduk()}>
                                    Tambah Produk
                                </Button>
                            </View>
                        </View>
                    </View>
                ) : null
            }

            {/* Edit Produk */}
            {
                ShowEditProduk ? (
                    <View style={productStyle.modalpembelian}>
                        <View style={productStyle.modalheader}>
                            <View style={productStyle.titlemodal}>
                                <Text style={productStyle.cartheadertext}>Pembelian Produk</Text>
                            </View>
                            <TouchableOpacity onPress={() => setShowEditProduk(false)}>
                                <View style={productStyle.rightheadermodal}>
                                    <Image source={require('../assets/images/Icon/close.png')}></Image>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                ) : null
            }

        </View >
        // CONTOH FLATLIST
        // <FlatList nestedScrollEnabled
        //         data={[
        //             { key: 'Devin' },
        //             { key: 'Dan' },
        //             { key: 'Dominic' },
        //             { key: 'Jackson' },
        //             { key: 'James' },
        //             { key: 'Joel' },
        //             { key: 'John' },
        //             { key: 'Jillian' },
        //             { key: 'Jimmy' },
        //             { key: 'Julie' },
        //             { key: 'Jacksona' },
        //             { key: 'Jamess' },
        //             { key: 'Joeld' },
        //             { key: 'Johfdn' },
        //             { key: 'Jilfdlian' },
        //             { key: 'Jimmfdy' },
        //             { key: 'Juliefd' },
        //             { key: 'Jacksoadn' },
        //             { key: 'Jamesasdads' },
        //             { key: 'Joedffl' },
        //             { key: 'Johbcvn' },
        //             { key: 'Jilligfdfdan' },
        //             { key: 'Jimmbcvy' },
        //             { key: 'Julidfge' },

        //         ]}
        //         renderItem={({ item }) => <Text style={productStyle.itemss}>{item.key}</Text>}
        //     />


    )
}

// const styles = StyleSheet.create({
//     item: {
//         // Just for visual representation:
//         borderWidth: 2,
//         borderColor: '#FF0000',
//         height: 100,

//         // Important styles:
//         marginRight: 15,
//         flexBasis: '40%',
//         flexGrow: 1,
//     },
//     container: {
//         // Important styles:
//         marginRight: -15,
//         flexDirection: 'row',
//         flexWrap: 'wrap',
//         paddingHorizontal: 15
//     },
// })
export default Product