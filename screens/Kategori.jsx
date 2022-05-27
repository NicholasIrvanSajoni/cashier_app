import React, { useContext, useEffect, useState } from "react"
import {
    Text,
    View,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
    Image,
    FlatList,
} from "react-native"
import {
    Card,
    Button,
    TextInput,
    Searchbar,
    Modal,
    Portal,
    Provider,
} from "react-native-paper"
import axios from "axios"
import kategoriStyle from "../styles/kategori.style"
import Counter from "react-native-counters"
import Async from "async"
import secret from "../constants/Secret"
import UserContext from "../context/user-context"

const Kategori = ({ navigation }) => {
    const [ShowTambahKategori, setShowTambahKategori] = useState(false)
    const [DataListKategori, setDataListKategori] = useState()
    const [DataListDetailKategori, setDataListDetailKategori] = useState()
    const [DataListProdukDetailKategori, setDataListProdukDetailKategori] =
        useState()
    const [InputTambahKategori, setInputTambahKategori] = useState("")
    const [InputEditKategori, setInputEditKategori] = useState("")
    const [disabled, setDisabled] = useState(false)
    const [put_id_kategori, setput_id_kategori] = useState("")
    const [delete_id_kategori, setdelete_id_kategori] = useState("")
    const [put_nama_kategori, setput_nama_kategori] = useState("")
    const [produk_id_kategori, setproduk_id_kategori] = useState("")
    const [PlaceholderNamaKategori, setPlaceholderNamaKategori] = useState("")
    const [ShowEditKategori, setShowEditKategori] = useState(false)
    const [ShowDeleteKategori, setShowDeleteKategori] = useState(false)
    const [ShowProdukKategori, setShowProdukKategori] = useState(false)

    const usercontext = useContext(UserContext)
    // const login_id_user = usercontext.UserData.id_user;s
    // const login_bearer_token = 'bearer ' + usercontext.token;
    // console.log(login_bearer_token);

    // console.log(usercontext.token)
    // console.log("new")
    // console.log(DataListKategori)
    // console.log(DataListDetailKategori)
    // console.log(DataListProdukDetailKategori)

    useEffect(() => {
        fetchKategori()
        // fetchDetailKategoriListProduk();
    }, [])

    // useEffect(() => {
    //     fetchDetailKategoriListProduk();
    // }, [DataListProdukDetailKategori])

    // console.log(put_nama_kategori);
    // console.log(produk_id_kategori);
    // console.log(DataListDetailKategori)

    // Kategori
    const fetchKategori = async () => {
        try {
            const getkategoriproduk = (
                await axios.get(
                    `/kategori/user/${usercontext.UserData.id_user}`,
                )
            ).data
            // console.log(getkategoriproduk.data[1].id_kategori);
            // console.log(getkategoriproduk)
            // console.log(getkategoriproduk.data);
            const list_kategori_produk = await Async.map(
                getkategoriproduk.data,
                async (kategori_data, cb) => {
                    const kategori_count = (
                        await axios.get(
                            `/kategori/detail/${kategori_data.id_kategori}`,
                        )
                    ).data
                    cb(null, {
                        ...kategori_data,
                        jumlah_produk: kategori_count.data.jumlah_produk,
                    })
                    return
                },
            )

            setDataListKategori(list_kategori_produk)
        } catch (error) {
            console.log(error.response.data)
        }
    }

    const handlerSubmitTambahKategori = async () => {
        try {
            if (InputTambahKategori == "") {
                // console.log(error.response.data)
                alert(JSON.stringify("Nama Kategori Tidak Boleh Kosong"))
            } else {
                const tambahktgr = (
                    await axios.post(
                        "/kategori",
                        {
                            nama_kategori: InputTambahKategori,
                            id_user: usercontext.UserData.id_user,
                        },
                        {
                            headers: {
                                Authorization: "bearer " + usercontext.token,
                            },
                        },
                    )
                ).data
                console.log(tambahktgr)
                setInputTambahKategori("")
                setShowTambahKategori(false)
                fetchKategori()
            }
        } catch (error) {
            console.log(error.response.data)
        }
    }

    const handlerEditKategori = async () => {
        try {
            if (InputEditKategori == "") {
                // console.log(error.response.data)
                alert(JSON.stringify("Nama Kategori asdas Tidak Boleh Kosong"))
            } else {
                const editktgr = (
                    await axios.put(
                        `/kategori/${put_id_kategori}`,
                        {
                            nama_kategori: InputEditKategori,
                        },
                        {
                            headers: {
                                Authorization: "bearer " + usercontext.token,
                            },
                        },
                    )
                ).data
                console.log(editktgr)
                setInputEditKategori("")
                setShowEditKategori(false)
                fetchKategori()
            }
        } catch (error) {
            console.log(error.response.data)
        }
    }

    const handlerDeletekategori = async () => {
        try {
            const deletektgr = (
                await axios.delete(`/kategori/${delete_id_kategori}`, {
                    headers: {
                        Authorization: "bearer " + usercontext.token,
                    },
                })
            ).data
            console.log(deletektgr)
            setShowDeleteKategori(false)
            fetchKategori()
        } catch (error) {
            console.log(error.response.data)
        }
    }

    const fetchProdukKategori = async (id_kategori) => {
        try {
            const get_kategori_produk_by_id = (
                await axios.get(`/kategori/${id_kategori}`)
            ).data
            // console.log(get_kategori_produk_by_id.data[1].id_kategori);
            // console.log(get_kategori_produk_by_id)
            // console.log(get_kategori_produk_by_id.data);
            const list_kategori_produk_by_id = await Async.map(
                get_kategori_produk_by_id.data,
                async (kategori_produk_data, cb) => {
                    const kategori_count = (
                        await axios.get(
                            `/kategori/detail/${kategori_produk_data.id_kategori}`,
                        )
                    ).data
                    cb(null, {
                        ...kategori_produk_data,
                        jumlah_produk: kategori_count.data.jumlah_produk,
                    })
                    return
                },
            )

            setDataListDetailKategori(list_kategori_produk_by_id)
        } catch (error) {
            console.log(error.response.data)
        }
    }

    // List Produk
    const fetchDetailKategoriListProduk = async (id_kategori) => {
        try {
            const detail_kategori_list_produk = (
                await axios.get(`/product/kategori/${id_kategori}`)
            ).data
            // console.log(detail_kategori_list_produk.data);
            setDataListProdukDetailKategori(detail_kategori_list_produk.data)
        } catch (error) {
            setDataListProdukDetailKategori([])
            console.log(error.response.data)
        }
    }

    return (
        <View style={kategoriStyle.home}>
            {/* Header */}
            <View style={kategoriStyle.header}>
                <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                    <View style={kategoriStyle.rightheader}>
                        <Image
                            style={kategoriStyle.leftheader}
                            source={require("../assets/images/Icon/arrowleft.png")}
                        ></Image>
                    </View>
                </TouchableOpacity>
                <View style={kategoriStyle.titlecart}>
                    <Text style={kategoriStyle.headertext}>Kategori</Text>
                </View>
            </View>

            <ScrollView>
                <View style={kategoriStyle.content}>
                    <View style={kategoriStyle.box_dashboard_kategori}>
                        {DataListKategori?.map((listkategori) => (
                            <TouchableOpacity
                                style={kategoriStyle.item_kategori}
                                key={listkategori.id_kategori}
                                onPress={() => {
                                    setShowProdukKategori(true)
                                    fetchProdukKategori(
                                        listkategori.id_kategori,
                                    )
                                    fetchDetailKategoriListProduk(
                                        listkategori.id_kategori,
                                    )
                                }}
                            >
                                <View style={kategoriStyle.box_text_title}>
                                    <Text
                                        numberOfLines={2}
                                        style={kategoriStyle.title_kategori}
                                    >
                                        {listkategori.nama_kategori}
                                    </Text>
                                </View>
                                <View style={kategoriStyle.flex_kategori}>
                                    <View>
                                        <Text
                                            style={kategoriStyle.body_kategori}
                                        >
                                            Produk :{" "}
                                            {listkategori.jumlah_produk}
                                        </Text>
                                    </View>
                                    <View
                                        style={
                                            kategoriStyle.box_action_kategori
                                        }
                                    >
                                        <TouchableOpacity
                                            style={
                                                kategoriStyle.box_icon_kategori
                                            }
                                            onPress={() => {
                                                setput_id_kategori(
                                                    listkategori.id_kategori,
                                                )
                                                setPlaceholderNamaKategori(
                                                    listkategori.nama_kategori,
                                                )
                                                setShowEditKategori(true)
                                                setDisabled(true)
                                            }}
                                        >
                                            <Image
                                                style={kategoriStyle.icon_trash}
                                                source={require("../assets/images/Icon/edit.png")}
                                            ></Image>
                                        </TouchableOpacity>
                                        <TouchableOpacity
                                            style={
                                                kategoriStyle.box_icon_kategori
                                            }
                                            onPress={() => {
                                                setput_nama_kategori(
                                                    listkategori.nama_kategori,
                                                )
                                                setdelete_id_kategori(
                                                    listkategori.id_kategori,
                                                )
                                                setShowDeleteKategori(true)
                                                setDisabled(true)
                                            }}
                                        >
                                            <Image
                                                style={kategoriStyle.icon_trash}
                                                source={require("../assets/images/Icon/trash.png")}
                                            ></Image>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>
            </ScrollView>

            {/* Tampilan Produk Kategori*/}
            {ShowProdukKategori ? (
                <View style={kategoriStyle.modal_detail_kategori}>
                    <View style={kategoriStyle.detail_kategori_box_header}>
                        <TouchableOpacity
                            onPress={() => {
                                setShowProdukKategori(false)
                                // setDataListProdukDetailKategori("");
                            }}
                        >
                            <View style={kategoriStyle.rightheader}>
                                <Image
                                    style={kategoriStyle.leftheader}
                                    source={require("../assets/images/Icon/arrowleft.png")}
                                ></Image>
                            </View>
                        </TouchableOpacity>
                        <View style={kategoriStyle.titlecart}>
                            <Text style={kategoriStyle.headertext}></Text>
                        </View>
                    </View>
                    <View style={kategoriStyle.content_header_modal}>
                        {DataListDetailKategori?.map((produk_kategori_data) => (
                            <View key={produk_kategori_data.id_kategori}>
                                <Text
                                    style={kategoriStyle.modal_text_header}
                                    numberOfLines={2}
                                >
                                    {produk_kategori_data.nama_kategori}
                                </Text>
                                <Text style={kategoriStyle.modal_text_body}>
                                    Produk :{" "}
                                    {produk_kategori_data.jumlah_produk}
                                </Text>
                            </View>
                        ))}
                    </View>
                    <View style={kategoriStyle.detail_kategori_header}>
                        <View
                            style={
                                kategoriStyle.box_content_modal_detail_kategori
                            }
                        >
                            <View style={kategoriStyle.actionbar}>
                                <View style={kategoriStyle.searchprodukbar}>
                                    <Searchbar
                                        style={kategoriStyle.Searchbarstyle}
                                        placeholder="Search"

                                        // icon={require('../assets/icon/search.png')}
                                        // onChangeText={onChangeSearch}
                                        // value={searchQuery}
                                    />
                                </View>
                            </View>
                        </View>

                        <ScrollView>
                            <View>
                                <View style={kategoriStyle.boxshowproduk}>
                                    {DataListProdukDetailKategori?.map(
                                        (list_produk_detail_kategori) => (
                                            <View
                                                style={kategoriStyle.boxitem}
                                                key={
                                                    list_produk_detail_kategori.id_produk
                                                }
                                            >
                                                <View
                                                    style={
                                                        kategoriStyle.itemcartboximage
                                                    }
                                                >
                                                    <Image
                                                        style={
                                                            kategoriStyle.itemcartimage
                                                        }
                                                        source={{
                                                            uri: `${secret.imageURL}${list_produk_detail_kategori.link_foto_produk}`,
                                                        }}
                                                    ></Image>
                                                </View>
                                                <View
                                                    style={
                                                        kategoriStyle.deskripsiitem
                                                    }
                                                >
                                                    <View>
                                                        <Text
                                                            style={
                                                                kategoriStyle.textbold
                                                            }
                                                            numberOfLines={4}
                                                        >
                                                            {
                                                                list_produk_detail_kategori.nama_produk
                                                            }
                                                        </Text>
                                                    </View>
                                                </View>
                                                <View
                                                    style={
                                                        kategoriStyle.box_icon_produk
                                                    }
                                                >
                                                    <TouchableOpacity>
                                                        <Image
                                                            style={
                                                                kategoriStyle.icon_produk
                                                            }
                                                            source={require("../assets/images/Icon/trash.png")}
                                                        ></Image>
                                                    </TouchableOpacity>
                                                    <Button
                                                        style={
                                                            kategoriStyle.btn_save
                                                        }
                                                        contentStyle={{
                                                            flexDirection:
                                                                "row-reverse",
                                                        }}
                                                        icon={require("../assets/images/Icon/edit.png")}
                                                        mode="contained"
                                                        onPress={() =>
                                                            setShowEditProduk(
                                                                true,
                                                            )
                                                        }
                                                    >
                                                        Edit
                                                    </Button>
                                                </View>
                                            </View>
                                        ),
                                    )}
                                </View>
                            </View>

                            {/* <Text style={kategoriStyle.boxheight}>Nama Produk</Text>
                                    <TextInput style={kategoriStyle.boxinput}
                                    value={NamaProduk}
                                    mode={'flat'}
                                    onChangeText={NamaProduk => setNamaProduk(NamaProduk)}
                                    /> */}

                            {/* <View style={kategoriStyle.modaljnsproduk}>
                                        <Text style={kategoriStyle.boxheight}>Kategori Produk</Text>
                                        <input type="file" name="myImage" onChange={onImageChange} />
                                    </View> */}
                        </ScrollView>
                    </View>
                </View>
            ) : null}

            {/*  */}
            {ShowTambahKategori ? (
                <View style={kategoriStyle.modaltambahkategori}>
                    <View style={kategoriStyle.modalheader}>
                        <View style={kategoriStyle.titlemodal}>
                            <Text style={kategoriStyle.cartheadertext}>
                                Tambah Kategori
                            </Text>
                        </View>
                        <TouchableOpacity
                            onPress={() => setShowTambahKategori(false)}
                        >
                            <View style={kategoriStyle.rightheadermodal}>
                                <Image
                                    source={require("../assets/images/Icon/close.png")}
                                ></Image>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={kategoriStyle.modaladdpembelian}>
                        <View style={kategoriStyle.boxmodaltambahpembelian}>
                            <Text style={kategoriStyle.boxheight}>
                                Nama Kategori :
                            </Text>
                            <TextInput
                                style={kategoriStyle.boxinput}
                                value={InputTambahKategori}
                                mode={"outlined"}
                                onChangeText={(InputTambahKategori) =>
                                    setInputTambahKategori(InputTambahKategori)
                                }
                            />

                            <Button
                                style={kategoriStyle.btn_save}
                                mode="contained"
                                onPress={() => {
                                    handlerSubmitTambahKategori()
                                    setDisabled(true)
                                }}
                            >
                                Tambah
                            </Button>
                        </View>
                    </View>
                </View>
            ) : null}

            {ShowEditKategori ? (
                <View style={kategoriStyle.modaltambahkategori}>
                    <View style={kategoriStyle.modalheader}>
                        <View style={kategoriStyle.titlemodal}>
                            <Text style={kategoriStyle.cartheadertext}>
                                Edit Kategori
                            </Text>
                        </View>
                        <TouchableOpacity
                            onPress={() => {
                                setShowEditKategori(false)
                                setInputEditKategori("")
                            }}
                        >
                            <View style={kategoriStyle.rightheadermodal}>
                                <Image
                                    source={require("../assets/images/Icon/close.png")}
                                ></Image>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={kategoriStyle.modaladdpembelian}>
                        <View style={kategoriStyle.boxmodaltambahpembelian}>
                            <Text style={kategoriStyle.boxheight}>
                                Nama Kategori :
                            </Text>
                            <TextInput
                                style={kategoriStyle.boxinput}
                                value={InputEditKategori}
                                mode={"outlined"}
                                placeholder={PlaceholderNamaKategori}
                                onChangeText={(InputEditKategori) =>
                                    setInputEditKategori(InputEditKategori)
                                }
                            />

                            <Button
                                style={kategoriStyle.btn_save}
                                mode="contained"
                                onPress={() => {
                                    handlerEditKategori()
                                    setDisabled(true)
                                }}
                            >
                                Edit
                            </Button>
                        </View>
                    </View>
                </View>
            ) : null}

            {ShowDeleteKategori ? (
                <View style={kategoriStyle.modaltambahkategori}>
                    <View style={kategoriStyle.modalheader}>
                        <View>
                            <Text style={kategoriStyle.title_delete}>
                                Delete Kategori
                            </Text>
                        </View>
                    </View>
                    <View style={kategoriStyle.modaladdpembelian}>
                        <View style={kategoriStyle.boxmodaltambahpembelian}>
                            <View>
                                <Text style={kategoriStyle.intro_delete}>
                                    Apakah anda ingin Menghapus kategori{" "}
                                    <Text style={kategoriStyle.content_delete}>
                                        {put_nama_kategori}
                                    </Text>{" "}
                                    ?
                                </Text>
                            </View>

                            <View style={kategoriStyle.action_delete}>
                                <Button
                                    style={kategoriStyle.btn_del}
                                    mode="contained"
                                    onPress={() => setShowDeleteKategori(false)}
                                >
                                    Tidak
                                </Button>
                                <Button
                                    style={kategoriStyle.btn_del}
                                    mode="contained"
                                    onPress={() => {
                                        handlerDeletekategori()
                                        setDisabled(true)
                                    }}
                                >
                                    Hapus
                                </Button>
                            </View>
                        </View>
                    </View>
                </View>
            ) : null}

            {/* Add Button */}
            <TouchableOpacity onPress={() => setShowTambahKategori(true)}>
                <View style={kategoriStyle.btn_round_box}>
                    <View style={kategoriStyle.btn_round}>
                        <Image
                            style={kategoriStyle.btn_round_icon}
                            source={require("../assets/images/Icon/plus.png")}
                        ></Image>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    )
}
export default Kategori
