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
import NumberFormat from "react-number-format"
import {
    Card,
    // Button,
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

    const [shouldShow, setShouldShow] = useState(false)
    const [shouldShowModal, setShouldShowModal] = useState(false)
    const [visible, setVisible] = useState(false)

    // Btn kategori
    const [DataListKategori, setDataListKategori] = useState()
    const [KategoriClicked, setKategoriClicked] = useState(true)

    // Produk
    const [DataListProduk, setDataListProduk] = useState()
    const [ChooseKategori, setChooseKategori] = useState()

    // Detail Produk
    const [DataDetailProduk, setDataDetailProduk] = useState()
    const [DataProdukByID, setDataProdukByID] = useState()
    const [IDProduk, setIDProduk] = useState("")
    const [IDJenisProduk, setIDJenisProduk] = useState("")
    const [HargaProduk, setHargaProduk] = useState(0)
    const [NamaProduk, setNamaProduk] = useState("")
    const [GambarProduk, setGambarProduk] = useState("")
    const [JumlahStok, setJumlahStok] = useState(0)

    // Btn Increase Decrease Value
    const [IncdecValue, setIncdecValue] = useState(1)
    const [BtnIncrease, setBtnIncrease] = useState(false)
    const [BtnDecrease, setBtnDecrease] = useState(false)
    const [TotalHarga, setTotalHarga] = useState("")

    // Cart
    const [ArrayCart, setArrayCart] = useState([])
    const [TotalBelanja, setTotalBelanja] = useState(0)

    // Tes
    const [Wakanai, setWakanai] = useState(0)

    useEffect(() => {
        fetchKategori()
        fetchprodukallkategori()
        // fetchDataProductByID()
        // fetchDetailProduk()
        // console.log(DataListProduk)
    }, [])

    useEffect(() => {
        console.log("array", ArrayCart)
        CartTotalBelanja()
    }, [ArrayCart])

    useEffect(() => {
        CartTotalBelanja()
    }, [Wakanai])

    useEffect(() => {
        TotalHargaProduk()
    }, [IncdecValue])

    useEffect(() => {
        // console.log(ArrayDetailProduk)
        console.log(HargaProduk)
    }, [HargaProduk])

    useEffect(() => {
        console.log(IDJenisProduk)
    }, [IDJenisProduk])

    // Button Kategori
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

    // All Kategori -> All Product
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
            setChooseKategori([])
            console.log(error.response.data)
        }
    }

    // Product Sort By Kategori
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
            setDataListProduk([])
            console.log(error.response.data)
        }
    }

    // Detail Product
    const fetchDetailProduk = async (id_produk) => {
        try {
            const getdetailproduk = (
                await axios.get(`/jenisproduk/produk/${id_produk}`)
            ).data
            setDataDetailProduk(getdetailproduk.data) //all data
            // setArrayDetailProduk(getdetailproduk.data[0])
            setHargaProduk(getdetailproduk.data[0].harga_produk)
            setJumlahStok(getdetailproduk.data[0].jumlah_produk)
            setTotalHarga(getdetailproduk.data[0].harga_produk)
            setIDJenisProduk(getdetailproduk.data[0].id_jenis_produk)
            //1 data buat
            // apa yang ditampilin pertama?
            // console.log(DataDetailProduk)
        } catch (error) {
            setDataDetailProduk([])
            console.log(error.response.data)
        }
    }

    const fetchDataProductByID = async (id_produk) => {
        try {
            const getproductbyid = (await axios.get(`/product/${id_produk}`))
                .data
            setDataProdukByID(getproductbyid.data)
            // console.log(DataProdukByID)
        } catch (error) {
            console.log(error.response.data)
        }
    }

    // Total Harga Produk Detail Produk

    const TotalHargaProduk = () => {
        try {
            const jumlahValue = Number(IncdecValue)
            const totalhargaproduk = jumlahValue * Number(HargaProduk)
            setTotalHarga(totalhargaproduk)
            console.log("func", totalhargaproduk)
        } catch (error) {
            console.log(error.response.data)
        }
    }

    // Button Increase Decrease Jumlah Detail Produk
    const IncreaseValue = () => {
        try {
            const increasedValue = Number(IncdecValue) + 1
            if (increasedValue > JumlahStok) return
            setIncdecValue(increasedValue)
            TotalHargaProduk()
            HandlerFunction(increasedValue)
        } catch (error) {
            console.log(error.response.data)
        }
    }

    const DecreaseValue = () => {
        try {
            const decreasedValue = Number(IncdecValue) - 1
            if (decreasedValue < 1) return
            setIncdecValue(decreasedValue)
            TotalHargaProduk()
            HandlerFunction(decreasedValue)
        } catch (error) {
            console.log(error.response.data)
        }
    }

    const HandlerFunction = (changedValue) => {
        try {
            if (Number(changedValue) <= 1) {
                // alert("Gabole minus woi")
                setBtnDecrease(true)
            } else if (Number(changedValue) >= Number(JumlahStok)) {
                // alert("Kebanyakkan")
                setBtnIncrease(true)
            } else {
                setBtnDecrease(false)
                setBtnIncrease(false)
            }
        } catch (error) {
            console.log(error.response.data)
        }
    }

    // Add Array To Usestate Cart
    const HandlerAddToCart = () => {
        setArrayCart((ArrayCart) => [
            ...ArrayCart,
            {
                CartIDJenisProduk: IDJenisProduk,
                CartIDProduk: IDProduk,
                CartNamaProduk: NamaProduk,
                CartGambarProduk: GambarProduk,
                CartJumlahProduk: IncdecValue,
                CartHargaTotalProduk: TotalHarga,
                CartHargaSatuanProduk: HargaProduk,
                CartStokProduk: JumlahStok,
                CartTotalBelanja: TotalBelanja,
            },
        ])
    }

    // Kasir modal function ===================================================================

    const CartIncreaseValueProduct = (target_item_cart) => {
        const editedArrayCart = ArrayCart.map((item_cart) => {
            if (
                item_cart.CartIDJenisProduk ===
                    target_item_cart.CartIDJenisProduk &&
                target_item_cart.CartJumlahProduk < item_cart.CartStokProduk
            ) {
                return {
                    ...item_cart,
                    CartJumlahProduk: item_cart.CartJumlahProduk + 1,
                    CartHargaTotalProduk:
                        item_cart.CartHargaSatuanProduk *
                        (item_cart.CartJumlahProduk + 1),
                }
            }
            return {
                ...item_cart,
            }
        })
        setArrayCart(editedArrayCart)
        CartTotalBelanja()
    }

    const CartDecreaseValueProduct = (target_item_cart) => {
        const editedArrayCart = ArrayCart.map((item_cart) => {
            if (
                item_cart.CartIDJenisProduk ===
                    target_item_cart.CartIDJenisProduk &&
                target_item_cart.CartJumlahProduk > 1
            ) {
                return {
                    ...item_cart,
                    CartJumlahProduk: item_cart.CartJumlahProduk - 1,
                    CartHargaTotalProduk:
                        item_cart.CartHargaSatuanProduk *
                        (item_cart.CartJumlahProduk - 1),
                }
            }
            return {
                ...item_cart,
            }
        })
        setArrayCart(editedArrayCart)
        CartTotalBelanja()
    }

    // const CartTotalBelanja = (total, num) => {
    //     // return total + num
    //     const countTotalHarga = ArrayCart.map(
    //         (item_cart) => item_cart.CartHargaTotalProduk,
    //     )
    //     setTesLagi(countTotalHarga)

    //     if (TesLagi == []) {
    //         console.log("gabisa")
    //     } else {
    //         const sum = TesLagi.reduce(function (total, num) {
    //             return total + num
    //         })
    //         console.log("aoskaoksoksad", sum)
    //         setWakanai(sum)
    //     }
    // }

    // const [isModalVisible, setModalVisible] = useState(false);

    // const toggleModal = () => {
    //     setModalVisible(!isModalVisible);
    // };

    // Total Harga Cart
    const CartTotalBelanja = () => {
        const sum = ArrayCart.reduce(
            (accum, item) => accum + item.CartHargaTotalProduk,
            0,
        )

        console.log("WKAA", sum)
        setWakanai(sum)
    }

    const CartDeleteProduct = (target_item_cart) => {
        const filteredCartArray = ArrayCart.filter((item) => {
            if (item.CartIDJenisProduk === target_item_cart.CartIDJenisProduk) {
                return false
            }
            return true
        })
        setArrayCart(filteredCartArray)
    }

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
                            <View style={kasirStyle.kategoribox}>
                                <TouchableOpacity
                                    style={
                                        KategoriClicked
                                            ? kasirStyle.kategoriboxclick
                                            : kasirStyle.kategoriboxunclick
                                    }
                                    onPress={() => {
                                        fetchprodukallkategori()
                                        setKategoriClicked(true)
                                    }}
                                >
                                    <Text style={kasirStyle.kategoritext}>
                                        All
                                    </Text>
                                </TouchableOpacity>
                            </View>
                            {DataListKategori?.map((listkategori) => (
                                <View
                                    style={kasirStyle.kategoribox}
                                    key={listkategori.id_kategori}
                                >
                                    <TouchableOpacity
                                        style={
                                            KategoriClicked
                                                ? kasirStyle.kategoriboxunclick
                                                : kasirStyle.kategoriboxclick
                                        }
                                        onPress={() => {
                                            fetchprodukbykategori(
                                                listkategori.id_kategori,
                                            )
                                            setKategoriClicked(false)
                                        }}
                                    >
                                        <Text style={kasirStyle.kategoritext}>
                                            {listkategori.nama_kategori}
                                        </Text>
                                    </TouchableOpacity>
                                </View>
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
                                onPress={() => {
                                    setShouldShowModal(true)
                                    setNamaProduk(listproduk.nama_produk)
                                    setGambarProduk(listproduk.link_foto_produk)
                                    setIDProduk(listproduk.id_produk)
                                    fetchDetailProduk(listproduk.id_produk)
                                    fetchDataProductByID(listproduk.id_produk)
                                }}
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
                                            {listproduk.harga_produk}
                                            {/* aidasda asdajdai sds dds ds dds ds
                                            ds ds d sd sds ds ds ds ds ds s d ss
                                            d ds ds ds ds ds ds ds s dsd */}
                                        </Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        ))}
                        {ChooseKategori?.map((chooselistproduk) => (
                            <TouchableOpacity
                                onPress={() => setShouldShowModal(true)}
                                style={kasirStyle.item_kategori}
                                key={chooselistproduk.id_produk}
                            >
                                <View style={kasirStyle.item}>
                                    <View style={kasirStyle.box_image}>
                                        <Image
                                            style={kasirStyle.product_image}
                                            // source={require('../assets/images/tes.png')}
                                            source={{
                                                uri: `http://localhost:4000/${chooselistproduk.link_foto_produk}`,
                                            }}
                                        ></Image>
                                    </View>
                                    <View style={kasirStyle.box_info}>
                                        <Text
                                            numberOfLines={3}
                                            style={kasirStyle.product_name}
                                        >
                                            {chooselistproduk.nama_produk}
                                            {/* aidasda asdajdai sds dds ds dds ds
                                            ds ds d sd sds ds ds ds ds ds s d ss
                                            d ds ds ds ds ds ds ds s dsd */}
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
                        {ArrayCart?.map((item_cart) => (
                            <View
                                style={kasirStyle.itemcart}
                                key={item_cart.CartIDJenisProduk}
                            >
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
                                            source={{
                                                uri: `http://localhost:4000/${item_cart.CartGambarProduk}`,
                                            }}
                                        ></Image>
                                    </View>
                                    <View style={kasirStyle.deskripsiitem}>
                                        <View>
                                            <Text>
                                                {item_cart.CartNamaProduk}
                                            </Text>
                                        </View>
                                        <View>
                                            <Text style={kasirStyle.textharga}>
                                                <NumberFormat
                                                    value={
                                                        item_cart.CartHargaTotalProduk
                                                    }
                                                    displayType={"text"}
                                                    thousandSeparator={"."}
                                                    decimalSeparator={","}
                                                    prefix={"Rp "}
                                                    renderText={(value) => (
                                                        <Text>{value}</Text>
                                                    )}
                                                />
                                            </Text>
                                        </View>
                                        <View
                                            style={kasirStyle.detailbtnincdec}
                                        >
                                            {/* <Counter
                                                start={1}
                                                min={1}
                                                max={JumlahStok}
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
                                            /> */}
                                            <TouchableOpacity
                                                style={kasirStyle.btndecrease}
                                                onPress={() =>
                                                    CartDecreaseValueProduct(
                                                        item_cart,
                                                    )
                                                }
                                                // disabled={BtnDecrease}
                                            >
                                                <Image
                                                    style={
                                                        kasirStyle.btnincdecimg
                                                    }
                                                    source={require("../assets/images/Icon/minus.png")}
                                                ></Image>
                                            </TouchableOpacity>
                                            <Text style={kasirStyle.textincdec}>
                                                {item_cart.CartJumlahProduk}
                                            </Text>
                                            <TouchableOpacity
                                                style={kasirStyle.btnincrease}
                                                onPress={() =>
                                                    CartIncreaseValueProduct(
                                                        item_cart,
                                                    )
                                                }
                                                // disabled={BtnIncrease}
                                            >
                                                <Image
                                                    style={
                                                        kasirStyle.btnincdecimg
                                                    }
                                                    source={require("../assets/images/Icon/plus.png")}
                                                ></Image>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                    <TouchableOpacity
                                        style={kasirStyle.trashiconbox}
                                        onPress={() => {
                                            CartDeleteProduct(item_cart)
                                        }}
                                    >
                                        <Image
                                            style={kasirStyle.trashicon}
                                            source={require("../assets/images/Icon/trash.png")}
                                        ></Image>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        ))}

                        {/* <View style={kasirStyle.itemcart}>
                            <View style={kasirStyle.boxitem}>
                                <View style={kasirStyle.checkcart}>
                            <Checkbox style={kasirStyle.checkboxcart}
                            status={checked ? 'checked' : 'unchecked'}
                            onPress={() => {
                                setChecked(!checked);
                            }}
                            />
                        </View>
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
                        </View> */}
                    </View>
                    <View style={kasirStyle.btm_cart}>
                        <View style={kasirStyle.totalhargacart}>
                            <Text>Total Harga</Text>
                            <Text style={kasirStyle.textharga}>
                                <NumberFormat
                                    value={Wakanai}
                                    displayType={"text"}
                                    thousandSeparator={"."}
                                    decimalSeparator={","}
                                    prefix={"Rp "}
                                    renderText={(value) => <Text>{value}</Text>}
                                />
                            </Text>
                        </View>
                        <TouchableOpacity
                            style={kasirStyle.btncheckout}
                            onPress={() => navigation.navigate("Checkout")}
                        >
                            <Text style={kasirStyle.text_btn_checkout}>
                                Checkout
                            </Text>
                        </TouchableOpacity>
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
                            onPress={() => {
                                setShouldShowModal(!shouldShowModal)
                                setIncdecValue(1)
                                setBtnDecrease(false)
                                setBtnIncrease(false)
                            }}
                        >
                            <View style={kasirStyle.rightheadermodal}>
                                <Image
                                    source={require("../assets/images/Icon/close.png")}
                                ></Image>
                            </View>
                        </TouchableOpacity>
                    </View>
                    {DataProdukByID?.map((data_produk) => (
                        <View
                            style={kasirStyle.modalside}
                            key={data_produk.id_produk}
                        >
                            <View style={kasirStyle.modalproductbox}>
                                <Image
                                    style={kasirStyle.modalproductimage}
                                    source={{
                                        uri: `http://localhost:4000/${data_produk.link_foto_produk}`,
                                    }}
                                ></Image>
                            </View>
                            <View style={kasirStyle.modalproductinfo}>
                                <Text style={kasirStyle.modalproductname}>
                                    {data_produk.nama_produk}
                                </Text>
                                <View style={kasirStyle.modalvariasi}>
                                    <Text>Jenis :</Text>
                                    <View style={kasirStyle.modaljenisproduk}>
                                        <ScrollView
                                            horizontal={true}
                                            showsHorizontalScrollIndicator={
                                                false
                                            }
                                        >
                                            {/*  */}
                                            {DataDetailProduk?.map(
                                                (detail_produk) => (
                                                    <View
                                                        key={
                                                            detail_produk.id_jenis_produk
                                                        }
                                                        style={
                                                            kasirStyle.kategoribox
                                                        }
                                                    >
                                                        <TouchableOpacity
                                                            style={
                                                                kasirStyle.kategoriboxclick
                                                            }
                                                            onPress={() => {
                                                                setHargaProduk(
                                                                    detail_produk.harga_produk,
                                                                )
                                                                setJumlahStok(
                                                                    detail_produk.jumlah_produk,
                                                                )
                                                                setIDJenisProduk(
                                                                    detail_produk.id_jenis_produk,
                                                                )
                                                            }}
                                                        >
                                                            <Text>
                                                                {
                                                                    detail_produk.nama_jenis_produk
                                                                }
                                                            </Text>
                                                        </TouchableOpacity>
                                                    </View>
                                                ),
                                            )}
                                        </ScrollView>
                                    </View>
                                </View>

                                <View style={kasirStyle.modaltotal}>
                                    <View style={kasirStyle.modalvariasi}>
                                        <Text>Jumlah : </Text>
                                    </View>
                                    <View style={kasirStyle.modaljumlahproduct}>
                                        <View
                                            style={kasirStyle.detailbtnincdec}
                                        >
                                            {/* <Counter
                                                start={1}
                                                min={1}
                                                max={JumlahStok}
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
                                            /> */}
                                            <TouchableOpacity
                                                style={kasirStyle.btndecrease}
                                                onPress={() => DecreaseValue()}
                                                disabled={BtnDecrease}
                                            >
                                                <Image
                                                    style={
                                                        kasirStyle.btnincdecimg
                                                    }
                                                    source={require("../assets/images/Icon/minus.png")}
                                                ></Image>
                                            </TouchableOpacity>
                                            <Text style={kasirStyle.textincdec}>
                                                {IncdecValue}
                                            </Text>
                                            <TouchableOpacity
                                                style={kasirStyle.btnincrease}
                                                onPress={() => IncreaseValue()}
                                                disabled={BtnIncrease}
                                            >
                                                <Image
                                                    style={
                                                        kasirStyle.btnincdecimg
                                                    }
                                                    source={require("../assets/images/Icon/plus.png")}
                                                ></Image>
                                            </TouchableOpacity>
                                        </View>
                                        <View
                                            style={kasirStyle.modalstokproduct}
                                        >
                                            <Text style={kasirStyle.textstok}>
                                                Stok : {JumlahStok}
                                                {/* {detail_produk.jumlah_produk} */}
                                            </Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={kasirStyle.modalvariasi}>
                                    <Text>Harga :</Text>
                                    <View style={kasirStyle.paddingtop10}>
                                        <Text
                                            style={kasirStyle.modalproductprice}
                                        >
                                            <NumberFormat
                                                value={HargaProduk}
                                                displayType={"text"}
                                                thousandSeparator={"."}
                                                decimalSeparator={","}
                                                prefix={"Rp "}
                                                renderText={(value) => (
                                                    <Text>{value}</Text>
                                                )}
                                            />
                                        </Text>
                                    </View>
                                    <Text>Harga Total :</Text>
                                    <View style={kasirStyle.paddingtop10}>
                                        <Text
                                            style={kasirStyle.modalproductprice}
                                        >
                                            <NumberFormat
                                                value={TotalHarga}
                                                displayType={"text"}
                                                thousandSeparator={"."}
                                                decimalSeparator={","}
                                                prefix={"Rp "}
                                                renderText={(value) => (
                                                    <Text>{value}</Text>
                                                )}
                                            />
                                        </Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    ))}
                    <View style={kasirStyle.modalproductbtn}>
                        <TouchableOpacity
                            style={kasirStyle.btnaddtocart}
                            onPress={() => {
                                HandlerAddToCart()
                                setBtnDecrease(false)
                                setBtnIncrease(false)
                                CartTotalBelanja()
                            }}
                        >
                            <Text style={kasirStyle.textaddtocart}>
                                Add To Cart
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            ) : null}
        </View>
    )
}

export default Kasir
