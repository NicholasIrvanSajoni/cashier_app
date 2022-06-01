import axios from "axios"
import React, { useContext, useEffect, useState } from "react"
import {
    Text,
    View,
    TouchableOpacity,
    StyleSheet,
    Dimensions,
    FlatList,
    Image,
    ScrollView,
} from "react-native"

import Counter from "react-native-counters"
import {
    Card,
    Button,
    Title,
    Paragraph,
    Searchbar,
    Portal,
    Provider,
    Checkbox,
    Modal,
} from "react-native-paper"
import UserContext from "../context/user-context"
import kasirStyle from "../styles/kasir.style"
const Kasir = ({ navigation }) => {
    const usercontext = useContext(UserContext)

    const handlerhidecart = () => {}

    const [shouldShow, setShouldShow] = useState(false)
    const [shouldShowModal, setShouldShowModal] = useState(false)
    const [visible, setVisible] = useState(false)

    // Btn kategori
    const [DataListKategori, setDataListKategori] = useState()

    // Produk
    const [DataListProduk, setDataListProduk] = useState()
    const [ChooseKategori, setChooseKategori] = useState()

    useEffect(() => {
        fetchKategori()
        fetchprodukallkategori()
        console.log(DataListProduk)
    }, [])

    const fetchKategori = async () => {
        try {
            const getkategoriproduk = (
                await axios.get(
                    `/kategori/user/${usercontext.UserData.id_user}`,
                )
            ).data
            // console.log(getkategoriproduk.data[1].id_kategori);
            // console.log(getkategoriproduk)
            setDataListKategori(getkategoriproduk.data)
        } catch (error) {
            console.log(error.response.data)
        }
    }

    // All Kategori
    const fetchprodukallkategori = async () => {
        try {
            const getproduk = (
                await axios.get(`/product/user/${usercontext.UserData.id_user}`)
            ).data
            // console.log(getkategoriproduk.data[1].id_kategori);
            // console.log(getproduk)
            setDataListProduk(getproduk.data)
            setChooseKategori([])
        } catch (error) {
            setDataListProduk([])
            console.log(error.response.data)
        }
    }

    // Produk
    const fetchprodukbykategori = async (id_kategori) => {
        try {
            const getproduk = (
                await axios.get(`/product/kategori/${id_kategori}`)
            ).data
            // console.log(getkategoriproduk.data[1].id_kategori);
            // console.log(getproduk)
            setChooseKategori(getproduk.data)
            setDataListProduk([])
        } catch (error) {
            setChooseKategori([])
            console.log(error.response.data)
        }
    }
    // const [isModalVisible, setModalVisible] = useState(false);

    // const toggleModal = () => {
    //     setModalVisible(!isModalVisible);
    // };

    return (
        <View style={kasirStyle.home}>
            {/* Header */}
            <View style={kasirStyle.header}>
                <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                    <View style={kasirStyle.rightheader}>
                        <Image
                            style={kasirStyle.leftheader}
                            source={require("../assets/images/Icon/arrowleft.png")}
                        ></Image>
                    </View>
                </TouchableOpacity>
                <View style={kasirStyle.titlecart}>
                    <Text style={kasirStyle.headertext}>Kasir</Text>
                </View>
                <TouchableOpacity onPress={() => setShouldShow(!shouldShow)}>
                    <View style={kasirStyle.rightheader}>
                        <Image
                            source={require("../assets/images/Icon/shop_cart.png")}
                        ></Image>
                    </View>
                </TouchableOpacity>
            </View>

            <ScrollView>
                <View style={kasirStyle.content}>
                    <View style={kasirStyle.actionbar}>
                        <Searchbar
                            placeholder="Search"

                            // icon={require('../assets/icon/search.png')}
                            // onChangeText={onChangeSearch}
                            // value={searchQuery}
                        />
                    </View>

                    {/* <Card>
                        <Card.Title title="Card Title" subtitle="Card Subtitle" />
                        <Card.Content>
                        <Title>Card title</Title>
                            <Paragraph>Card content</Paragraph>
                        </Card.Content>
                        <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
                        <Card.Actions>
                            <Button>Cancel</Button>
                            <Button>Ok</Button>
                        </Card.Actions>
                    </Card> */}

                    <View style={kasirStyle.kategoricard}>
                        <ScrollView
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                        >
                            <TouchableOpacity style={kasirStyle.kategoribox}>
                                <Button
                                    style={kasirStyle.kategoritext}
                                    onPress={() => fetchprodukallkategori()}
                                >
                                    All
                                </Button>
                            </TouchableOpacity>
                            {DataListKategori?.map((listkategori) => (
                                <TouchableOpacity
                                    style={kasirStyle.kategoribox}
                                    key={listkategori.id_kategori}
                                    onPress={() => {
                                        fetchprodukbykategori(
                                            listkategori.id_kategori,
                                        )
                                    }}
                                >
                                    <Button style={kasirStyle.kategoritext}>
                                        {listkategori.nama_kategori}
                                    </Button>
                                </TouchableOpacity>
                            ))}
                        </ScrollView>
                    </View>

                    <View style={kasirStyle.box_dashboard_kategori}>
                        {/* <Provider>
                            <Portal>
                                <Modal visible={visible} onDismiss={hideModal}>
                                    <Text>AFWHIUGUHIUGHUI.</Text>
                                </Modal>
                            </Portal> */}
                        {DataListProduk?.map((listproduk) => (
                            <TouchableOpacity
                                onPress={() =>
                                    setShouldShowModal(!shouldShowModal)
                                }
                                style={kasirStyle.item_kategori}
                                key={listproduk.id_produk}
                            >
                                <View style={kasirStyle.item}>
                                    <View style={kasirStyle.box_image}>
                                        <Image
                                            style={kasirStyle.product_image}
                                            // source={require('../assets/images/tes.png')}
                                            source={{
                                                uri: `http://localhost:4000/${listproduk.link_foto_produk}`,
                                            }}
                                        ></Image>
                                    </View>
                                    <View style={kasirStyle.box_info}>
                                        <Text
                                            numberOfLines={3}
                                            style={kasirStyle.product_name}
                                        >
                                            {listproduk.nama_produk}
                                            aidasda asdajdai sds dds ds dds ds
                                            ds ds d sd sds ds ds ds ds ds s d ss
                                            d ds ds ds ds ds ds ds s dsd
                                        </Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        ))}

                        {/* </Provider> */}
                    </View>
                </View>
            </ScrollView>

            {/* Cart Sidebar */}
            {shouldShow ? (
                <View style={kasirStyle.cartsidebar}>
                    <View style={kasirStyle.cartsideheader}>
                        <View style={kasirStyle.titlecart}></View>
                        <View style={kasirStyle.titlecart}>
                            <Text style={kasirStyle.cartheadertext}>Cart</Text>
                        </View>

                        <TouchableOpacity
                            onPress={() => setShouldShow(!shouldShow)}
                        >
                            <View style={kasirStyle.rightheadercart}>
                                <Image
                                    source={require("../assets/images/Icon/close.png")}
                                ></Image>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <View style={kasirStyle.itemcart}>
                            <View style={kasirStyle.boxitem}>
                                {/* <View style={kasirStyle.checkcart}>
                            <Checkbox style={kasirStyle.checkboxcart}
                            status={checked ? 'checked' : 'unchecked'}
                            onPress={() => {
                                setChecked(!checked);
                            }}
                            />
                        </View> */}
                                <View style={kasirStyle.itemcartboximage}>
                                    <Image
                                        style={kasirStyle.itemcartimage}
                                        source={require("../assets/images/tes.png")}
                                    ></Image>
                                </View>
                                <View style={kasirStyle.deskripsiitem}>
                                    <View>
                                        <Text>
                                            Permen Sweet asdasasdas dasd sad
                                        </Text>
                                    </View>
                                    <View>
                                        <Text style={kasirStyle.textharga}>
                                            156.000
                                        </Text>
                                    </View>
                                    <View style={kasirStyle.btnincdec}>
                                        <Counter
                                            start={0}
                                            min={0}
                                            max={100}
                                            buttonStyle={{
                                                borderColor: "#333",
                                                borderWidth: 2,
                                            }}
                                            buttonTextStyle={{
                                                color: "#333",
                                            }}
                                            countTextStyle={{
                                                color: "#333",
                                            }}
                                        />
                                    </View>
                                </View>
                                <View style={kasirStyle.trashiconbox}>
                                    <Image
                                        style={kasirStyle.trashicon}
                                        source={require("../assets/images/Icon/trash.png")}
                                    ></Image>
                                </View>
                            </View>
                        </View>
                        <View style={kasirStyle.itemcart}>
                            <View style={kasirStyle.boxitem}>
                                {/* <View style={kasirStyle.checkcart}>
                            <Checkbox style={kasirStyle.checkboxcart}
                            status={checked ? 'checked' : 'unchecked'}
                            onPress={() => {
                                setChecked(!checked);
                            }}
                            />
                        </View> */}
                                <View style={kasirStyle.itemcartboximage}>
                                    <Image
                                        style={kasirStyle.itemcartimage}
                                        source={require("../assets/images/tes.png")}
                                    ></Image>
                                </View>
                                <View style={kasirStyle.deskripsiitem}>
                                    <View>
                                        <Text>
                                            Permen Sweet asdasasdas dasd sad
                                        </Text>
                                    </View>
                                    <View>
                                        <Text style={kasirStyle.textharga}>
                                            6.000
                                        </Text>
                                    </View>
                                    <View style={kasirStyle.btnincdec}>
                                        <Counter
                                            start={0}
                                            min={0}
                                            max={100}
                                            buttonStyle={{
                                                borderColor: "#333",
                                                borderWidth: 2,
                                            }}
                                            buttonTextStyle={{
                                                color: "#333",
                                            }}
                                            countTextStyle={{
                                                color: "#333",
                                            }}
                                        />
                                    </View>
                                </View>
                                <View style={kasirStyle.trashiconbox}>
                                    <Image
                                        style={kasirStyle.trashicon}
                                        source={require("../assets/images/Icon/trash.png")}
                                    ></Image>
                                </View>
                            </View>
                        </View>
                        <View style={kasirStyle.itemcart}>
                            <View style={kasirStyle.boxitem}>
                                {/* <View style={kasirStyle.checkcart}>
                            <Checkbox style={kasirStyle.checkboxcart}
                            status={checked ? 'checked' : 'unchecked'}
                            onPress={() => {
                                setChecked(!checked);
                            }}
                            />
                        </View> */}
                                <View style={kasirStyle.itemcartboximage}>
                                    <Image
                                        style={kasirStyle.itemcartimage}
                                        source={require("../assets/images/tes.png")}
                                    ></Image>
                                </View>
                                <View style={kasirStyle.deskripsiitem}>
                                    <View>
                                        <Text>
                                            Permen Sweet asdasasdas dasd sad
                                        </Text>
                                    </View>
                                    <View>
                                        <Text style={kasirStyle.textharga}>
                                            1.233.000
                                        </Text>
                                    </View>
                                    <View style={kasirStyle.btnincdec}>
                                        <Counter
                                            start={0}
                                            min={0}
                                            max={100}
                                            buttonStyle={{
                                                borderColor: "#333",
                                                borderWidth: 2,
                                            }}
                                            buttonTextStyle={{
                                                color: "#333",
                                            }}
                                            countTextStyle={{
                                                color: "#333",
                                            }}
                                        />
                                    </View>
                                </View>
                                <View style={kasirStyle.trashiconbox}>
                                    <Image
                                        style={kasirStyle.trashicon}
                                        source={require("../assets/images/Icon/trash.png")}
                                    ></Image>
                                </View>
                            </View>
                        </View>
                        <View style={kasirStyle.itemcart}>
                            <View style={kasirStyle.boxitem}>
                                {/* <View style={kasirStyle.checkcart}>
                            <Checkbox style={kasirStyle.checkboxcart}
                            status={checked ? 'checked' : 'unchecked'}
                            onPress={() => {
                                setChecked(!checked);
                            }}
                            />
                        </View> */}
                                <View style={kasirStyle.itemcartboximage}>
                                    <Image
                                        style={kasirStyle.itemcartimage}
                                        source={require("../assets/images/tes.png")}
                                    ></Image>
                                </View>
                                <View style={kasirStyle.deskripsiitem}>
                                    <View>
                                        <Text>
                                            Permen Sweet asdasasdas dasd sad
                                        </Text>
                                    </View>
                                    <View>
                                        <Text style={kasirStyle.textharga}>
                                            999.999
                                        </Text>
                                    </View>
                                    <View style={kasirStyle.btnincdec}>
                                        <Counter
                                            start={0}
                                            min={0}
                                            max={100}
                                            buttonStyle={{
                                                borderColor: "#333",
                                                borderWidth: 2,
                                            }}
                                            buttonTextStyle={{
                                                color: "#333",
                                            }}
                                            countTextStyle={{
                                                color: "#333",
                                            }}
                                        />
                                    </View>
                                </View>
                                <View style={kasirStyle.trashiconbox}>
                                    <Image
                                        style={kasirStyle.trashicon}
                                        source={require("../assets/images/Icon/trash.png")}
                                    ></Image>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={kasirStyle.btm_cart}>
                        <View style={kasirStyle.totalhargacart}>
                            <Text>Total Harga</Text>
                            <Text style={kasirStyle.textharga}>
                                Rp. 3.293.000
                            </Text>
                        </View>
                        <Button
                            style={kasirStyle.btncheckout}
                            onPress={() => navigation.navigate("Checkout")}
                        >
                            Checkout
                        </Button>
                    </View>
                </View>
            ) : null}

            {/* Modal Product */}
            {shouldShowModal ? (
                <View style={kasirStyle.modalproduct}>
                    <View style={kasirStyle.modalheader}>
                        <View style={kasirStyle.titlemodal}>
                            <Text style={kasirStyle.cartheadertext}>
                                Product
                            </Text>
                        </View>
                        <TouchableOpacity
                            onPress={() => setShouldShowModal(!shouldShowModal)}
                        >
                            <View style={kasirStyle.rightheadermodal}>
                                <Image
                                    source={require("../assets/images/Icon/close.png")}
                                ></Image>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={kasirStyle.modalside}>
                        <View style={kasirStyle.modalproductbox}>
                            <Image
                                style={kasirStyle.modalproductimage}
                                source={require("../assets/images/tes.png")}
                            ></Image>
                        </View>
                        <View style={kasirStyle.modalproductinfo}>
                            <Text style={kasirStyle.modalproductname}>
                                Nabati Keju Pengen Apa
                            </Text>
                            <View style={kasirStyle.modalvariasi}>
                                <Text>Variasi :</Text>
                                <View style={kasirStyle.modaljenisproduk}>
                                    <ScrollView
                                        horizontal={true}
                                        showsHorizontalScrollIndicator={false}
                                    >
                                        <View style={kasirStyle.kategoribox}>
                                            <Button
                                                style={kasirStyle.kategoritext}
                                            >
                                                Satuan
                                            </Button>
                                        </View>
                                        <View style={kasirStyle.kategoribox}>
                                            <Button
                                                style={kasirStyle.kategoritext}
                                            >
                                                Lusin
                                            </Button>
                                        </View>
                                        <View style={kasirStyle.kategoribox}>
                                            <Button
                                                style={kasirStyle.kategoritext}
                                            >
                                                Dus
                                            </Button>
                                        </View>
                                    </ScrollView>
                                </View>
                            </View>
                            <View style={kasirStyle.modalvariasi}>
                                <Text>Jenis :</Text>
                                <View style={kasirStyle.modaljenisproduk}>
                                    <ScrollView
                                        horizontal={true}
                                        showsHorizontalScrollIndicator={false}
                                    >
                                        <View style={kasirStyle.kategoribox}>
                                            <Button
                                                style={kasirStyle.kategoritext}
                                            >
                                                Satuan
                                            </Button>
                                        </View>
                                        <View style={kasirStyle.kategoribox}>
                                            <Button
                                                style={kasirStyle.kategoritext}
                                            >
                                                Lusin
                                            </Button>
                                        </View>
                                        <View style={kasirStyle.kategoribox}>
                                            <Button
                                                style={kasirStyle.kategoritext}
                                            >
                                                Dus
                                            </Button>
                                        </View>
                                    </ScrollView>
                                </View>
                            </View>
                            <View style={kasirStyle.modaltotal}>
                                <View style={kasirStyle.modalvariasi}>
                                    <Text>Jumlah : </Text>
                                </View>
                                <View style={kasirStyle.modaljumlahproduct}>
                                    <View style={kasirStyle.btnincdec}>
                                        <Counter
                                            start={0}
                                            min={0}
                                            max={100}
                                            buttonStyle={{
                                                borderColor: "#333",
                                                borderWidth: 2,
                                            }}
                                            buttonTextStyle={{
                                                color: "#333",
                                            }}
                                            countTextStyle={{
                                                color: "#333",
                                            }}
                                        />
                                    </View>
                                    <View style={kasirStyle.modalstokproduct}>
                                        <Text style={kasirStyle.textstok}>
                                            Stok : 50
                                        </Text>
                                    </View>
                                </View>
                            </View>
                            <View style={kasirStyle.modalvariasi}>
                                <Text>Harga :</Text>
                                <View style={kasirStyle.paddingtop10}>
                                    <Text style={kasirStyle.modalproductprice}>
                                        Rp 50.000
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={kasirStyle.modalproductbtn}>
                        <Button style={kasirStyle.btnaddtocart}>
                            Add To Cart
                        </Button>
                    </View>
                </View>
            ) : null}
        </View>
    )
}

export default Kasir
