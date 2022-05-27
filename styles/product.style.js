import { StyleSheet, Dimensions } from "react-native"
import colors from "../constants/Colors"

const productStyle = StyleSheet.create({
    actionbar: {
        paddingBottom: 10,
        flex: 1,
        flexDirection: "row",
    },

    itemss: {
        padding: 10,
        fontSize: 18,
        height: 44,
        borderColor: colors.black,
        borderBottomWidth: 5,
    },

    searchprodukbar: {
        width: "90%",
    },

    iconfilterbox: {
        width: "15%",
        paddingTop: 7,
    },

    iconfilter: {
        width: 35,
        height: 35,
        alignSelf: "center",
    },

    home: {
        width: "100%",
        height: "100%",
        backgroundColor: colors.white,
    },

    Searchbarstyle: {
        width: "100%",
    },

    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 15,
        backgroundColor: colors.lightgreen,
    },

    leftheader: {
        flex: 1,
        left: 15,
    },

    rightheader: {
        flex: 1,
    },

    titlecart: {
        flex: 1,
        alignSelf: "center",
        justifyContent: "center",
        width: "100%",
        paddingRight: "10%",
    },

    headertext: {
        fontSize: 20,
        fontWeight: "900",
        color: colors.black,
        alignSelf: "center",
        justifyContent: "center",
    },

    content: {
        padding: 20,
    },

    container_2: {
        width: "100%",
    },

    box_image: {
        paddingHorizontal: 20,
        paddingTop: 20,
    },
    product_image: {
        alignSelf: "center",
        resizeMode: "cover",
        width: "100%",
    },

    box_info: {
        textAlign: "center",
        fontSize: 25,
        paddingHorizontal: 20,
        paddingTop: 5,
    },

    kategoricard: {
        marginBottom: 20,
        flex: 1,
        flexDirection: "row",
    },

    kategoritext: {
        borderColor: colors.lightblue,
        borderWidth: 1,
    },

    kategoribox: {
        paddingRight: 10,
    },

    closebutton: {
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
    },

    menukategori: {
        paddingBottom: 5,
    },

    addkategoritext: {
        borderWidth: 1,
        borderColor: colors.lightblue,
        borderStyle: "dashed",
    },

    item: {
        // Just for visual representation:
        borderRadius: 10,
        height: 250,
        backgroundColor: colors.lightorange,
        shadowColor: colors.black,
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,

        // Important styles:
        marginRight: 20,
        flexBasis: "43%",
        flexGrow: 1,
        marginBottom: 25,
    },

    container: {
        // Important styles:
        marginRight: -20,
        flexDirection: "row",
        flexWrap: "wrap",
    },

    // Round Button
    btn_round: {
        borderWidth: 1,
        borderColor: "rgba(0,0,0,0.2)",
        alignItems: "center",
        justifyContent: "center",
        width: 70,
        height: 70,
        backgroundColor: colors.lightgreen,
        borderRadius: 50,
        position: "absolute",
        bottom: 5,
        right: 5,
    },

    btn_round_icon: {
        width: 60,
    },

    // Modal Tambah Kategori
    modaltambahkategori: {
        position: "absolute",
        alignSelf: "center",
        alignContent: "center",
        width: "75%",
        height: "auto",
        // height: Dimensions.get('window').width / 2,
        // width: Dimensions.get('window').height / 2,
        top: "35%",
        zIndex: 5,
        backgroundColor: colors.white,
        borderWidth: 3,
        borderColor: colors.lightblue,
        borderRadius: 5,
        paddingBottom: 20,
    },

    boxinput: {
        height: 35,
    },

    // Modal Tambah Produk
    modalpembelian: {
        position: "absolute",
        alignSelf: "center",
        alignContent: "center",
        height: "100%",
        width: "100%",
        zIndex: 5,
        backgroundColor: colors.white,
        borderWidth: 3,
        borderColor: colors.lightblue,
    },

    modalheader: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 12,
        backgroundColor: colors.lightgreen,
    },

    titlemodal: {
        flex: 1,
        left: 15,
    },

    modaladdpembelian: {
        paddingHorizontal: 15,
    },

    rightheadermodal: {
        flex: 1,
        right: 10,
        justifyContent: "center",
    },

    boxmodaltambahpembelian: {
        paddingTop: 5,
    },

    modalselectinput: {
        borderWidth: 2,
        borderColor: colors.black,
        marginTop: 5,
    },

    boxheight: {
        paddingTop: 5,
    },

    modaljumlahpembelianproduk: {
        flexDirection: "row",
        justifyContent: "space-between",
    },

    modaljmlhproduk: {
        width: "45%",
    },

    modaljnsproduk: {
        width: "45%",
    },

    modalhargapembelianproduk: {
        flexDirection: "row",
        justifyContent: "space-between",
    },

    modalhargasatuanproduk: {
        width: "45%",
    },

    modalhargatotalproduk: {
        width: "45%",
    },

    image_calendar: {
        width: 30,
        height: 30,
    },

    modaliconcalendar: {
        marginRight: "auto",
        paddingLeft: 10,
        marginTop: "auto",
    },

    modalinputtanggalcalendar: {
        borderWidth: 2,
        borderColor: colors.black,
        marginTop: 5,
        height: 25,
        justifyContent: "center",
        paddingLeft: 5,
    },

    boxiconcalendar: {
        marginTop: 10,
    },

    btn_save: {
        marginTop: 15,
    },

    // Test
    itempenjualan: {
        flex: 1,
        backgroundColor: "white",
        marginTop: 5,
    },

    itemcartboximage: {
        width: "25%",
        padding: 10,
    },

    itemcartimage: {
        width: 70,
        height: 70,
        borderWidth: 1,
        borderColor: colors.black,
        resizeMode: "cover",
    },

    icon_produk: {
        width: 25,
        height: 25,
        marginLeft: "auto",
        paddingLeft: 10,
    },

    box_icon_produk: {
        width: "auto",
        paddingTop: 6,
        marginLeft: "auto",
        paddingRight: 10,
    },

    boxitem: {
        flexDirection: "row",
        flexWrap: "wrap",
        borderBottomWidth: 2,
        borderColor: colors.lightblue,
    },

    boxshowproduk: {
        borderWidth: 2,
        borderColor: colors.lightblue,
    },

    deskripsiitem: {
        paddingTop: 6,
        width: "45%",
    },

    texthargacolor: {
        fontSize: 16,
        fontWeight: "bold",
        backgroundColor: colors.lightgreen,
        paddingHorizontal: 5,
        marginTop: 3,
    },

    checkcart: {
        paddingTop: 30,
    },

    transaksi_total: {
        marginLeft: "auto",
    },

    transaksi_harga: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 3,
    },

    transaksi_satuan: {},

    transaksivariasi: {
        flexDirection: "row",
        marginTop: 3,
    },

    transaksivariasipembelian: {
        flexDirection: "row",
        marginTop: 5,
    },

    transaksi_jenis_jumlah: {
        flexDirection: "row",
        marginTop: 5,
    },

    jenisvariasi: {
        flexShrink: 1,
    },

    textboldcolor: {
        backgroundColor: colors.lightgreen,
        fontWeight: "bold",
        width: "auto",
        paddingHorizontal: 5,
    },

    textbold: {
        fontWeight: "bold",
    },

    tanggalbold: {
        fontSize: 12,
        fontWeight: "bold",
    },

    // placeholder: {
    //     height: 50,
    //     width: "100%",
    //     color: "grey", // PLACE HOLDER COLOR
    // },

    pickers: {
        height: 50,
        width: "100%",
        color: "blue", // VALUE COLOR
    },

    btn_del: {
        marginTop: 10,
        flexBasis: "47.5%",
    },

    action_delete: {
        flexDirection: "row",
        justifyContent: "space-between",
    },

    title_delete: {
        fontWeight: "bold",
        fontSize: 18,
    },

    content_delete: {
        fontWeight: "bold",
        fontSize: 16,
        textAlign: "center",
        color: "red",
        lineHeight: 22,
    },

    intro_delete: {
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 14,
    },
})

export default productStyle
