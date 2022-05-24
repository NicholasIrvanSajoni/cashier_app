import { Dimensions, StyleSheet } from 'react-native'
import colors from '../constants/Colors';

const kategoriStyle = StyleSheet.create({
    // Content 
    box_dashboard_kategori: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between'
    },

    item_kategori: {
        borderWidth: 2,
        borderColor: colors.black,
        borderRadius: 5,
        flexBasis: '48%',
        marginBottom: 20,
        paddingHorizontal: 10,
        paddingVertical: 10,
        height: 110,
        backgroundColor: colors.lightgreen,
    },

    box_text_title: {

        justifyContent: 'center',
        borderWidth: 1,
        width: '100%',
        height: 50,
        backgroundColor: "#F0F0F0",
        borderRadius: 5

    },

    title_kategori: {
        fontSize: 16,
        alignSelf: 'center',
        alignItems: 'center',
        fontWeight: 'bold',
        textAlign: 'center',

        // color: colors.white
        // width: '80%'
    },

    body_kategori: {
        fontSize: 14,
        // backgroundColor: colors.lightyellow,
        fontWeight: 'bold'
    },

    flex_kategori: {
        marginTop: 'auto',
        flexDirection: 'row',
        // justifyContent: 'space-between',
        // flexWrap: 'wrap'
    },

    icon_trash: {
        width: 15,
        height: 20,
    },

    box_action_kategori: {
        marginLeft: 'auto',
        flexDirection: 'row',
    },

    box_icon_kategori: {
        marginLeft: 10
    },
    //
    home: {
        width: '100%',
        height: '100%',
        backgroundColor: colors.white
    },

    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 15,
        backgroundColor: colors.lightgreen
    },

    leftheader: {
        flex: 1,
        left: 15
    },

    rightheader: {
        flex: 1,
    },

    titlecart: {
        flex: 1,
        alignSelf: 'center',
        justifyContent: 'center',
        width: '100%',
        paddingRight: '10%'
    },

    headertext: {
        fontSize: 20,
        fontWeight: '900',
        color: colors.black,
        alignSelf: 'center',
        justifyContent: 'center'
    },

    content: {
        padding: 20,
        height: '100%'
    },

    tabbar: {
        backgroundColor: colors.white
    },

    label: {
        color: colors.lightorange
    },

    box_image: {
        paddingHorizontal: 20,
        paddingTop: 20
    },
    product_image: {
        alignSelf: 'center',
        resizeMode: 'cover',
        width: '100%',
    },

    box_info: {
        textAlign: 'center',
        fontSize: 25,
        paddingHorizontal: 20,
        paddingTop: 5
    },


    kategoricard: {
        marginBottom: 20,
        flex: 1,
        flexDirection: 'row',
    },

    kategoritext: {
        backgroundColor: colors.lightblue,
    },

    kategoribox: {
        paddingRight: 10
    },

    // Item Stok

    itemcartboximage: {
        paddingVertical: 10,
        paddingLeft: 15,
        paddingRight: 5
    },

    itemcartimage: {
        width: 80,
        height: 80,
        borderWidth: 1,
        borderColor: colors.black,
    },

    boxitem: {
        flexDirection: 'row',
        borderWidth: 2,
        borderColor: colors.black,
        flexWrap: 'wrap',
        paddingBottom: 5,
    },

    deskripsiitem: {
        padding: 6,
        width: '50%'
    },

    trashiconbox: {
        padding: 6,
        marginLeft: 'auto'
    },

    textharga: {
        fontSize: 20
    },

    checkcart: {
        paddingTop: 30
    },

    btnincdec: {
        paddingTop: 5
    },

    // Round Button
    btn_round: {
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.2)',
        alignItems: 'center',
        justifyContent: 'center',
        width: 70,
        height: 70,
        backgroundColor: colors.lightgreen,
        borderRadius: 50,
        marginLeft: 'auto',
    },

    btn_round_box: {
        paddingRight: 15,
        paddingBottom: 20
    },

    btn_round_icon: {
        width: 60
    },

    // Modal Tambah Kategori
    modaltambahkategori: {
        position: "absolute",
        alignSelf: "center",
        alignContent: 'center',
        width: '75%',
        height: 'auto',
        // height: Dimensions.get('window').width / 2,
        // width: Dimensions.get('window').height / 2,
        top: '35%',
        zIndex: 5,
        backgroundColor: colors.white,
        borderWidth: 3,
        borderColor: colors.lightblue,
        borderRadius: 5,
        paddingBottom: 20
    },

    boxinput: {
        height: 35,
    },


    // Modal Tambah Produk
    modalpembelian: {
        position: "absolute",
        alignSelf: "center",
        alignContent: 'center',
        height: '100%',
        width: '100%',
        zIndex: 5,
        backgroundColor: colors.white,
        borderWidth: 3,
        borderColor: colors.lightblue,
    },

    modalheader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        backgroundColor: colors.lightgreen,
    },

    titlemodal: {
        flex: 1,
        left: 15,

    },

    modaladdpembelian: {
        paddingHorizontal: 15
    },

    rightheadermodal: {
        flex: 1,
        right: 10,
        justifyContent: 'center',
    },

    boxmodaltambahpembelian: {
        paddingTop: 5
    },

    modalselectinput: {
        borderWidth: 2,
        borderColor: colors.black,
        marginTop: 5
    },

    btn_save: {
        marginTop: 15,
    },

    btn_del: {
        marginTop: 10,
        flexBasis: '47.5%'
    },

    action_delete: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    title_delete: {
        fontWeight: 'bold',
        fontSize: 18
    },

    content_delete: {
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: 'center',
        color: 'red',
        lineHeight: 22
    },

    intro_delete: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 14
    },

    // Modal Detail Kategori
    detail_kategori_header: {
        // borderWidth: 2,
        height: Dimensions.get('screen').height,
        zIndex: 6,
        borderTopLeftRadius: 60,
        backgroundColor: colors.white,
        paddingTop: 30,
        paddingHorizontal: 20,
        paddingBottom: Dimensions.get('screen').height / 3
    },

    content_header_modal: {
        backgroundColor: colors.white,
        height: '100%'
    },

    detail_kategori_box_header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        backgroundColor: colors.lightgreen,
        // borderBottomWidth: 2,
        // borderColor: colors.lightblue
    },

    content_header_modal: {
        height: 105,
        // borderWidth: 2,
        paddingHorizontal: 20,
        // paddingVertical: 5
    },

    box_content_modal_detail_kategori: {
        // borderWidth: 2
    },

    modal_text_header: {
        fontSize: 22,
        fontWeight: 'bold',
    },

    modal_text_body: {
        fontSize: 16,
        fontWeight: 'bold',
        paddingTop: 10
    },

    detail_kategori_content: {
        marginTop: 50,
        borderWidth: 2,
        height: 200,
        zIndex: 6
    },

    modal_detail_kategori: {
        position: "absolute",
        alignSelf: "center",
        alignContent: 'center',
        height: '100%',
        width: '100%',
        zIndex: 5,
        backgroundColor: colors.lightgreen,
        borderWidth: 3,
        borderColor: colors.lightblue,
    },

    // Action Bar
    actionbar: {
        paddingBottom: 20,
    },

    searchprodukbar: {
        borderWidth: 2,
        borderColor: colors.lightblue
    },

    // Item

    itemcartboximage: {
        width: '25%',
        padding: 10,
    },

    itemcartimage: {
        width: 70,
        height: 70,
        borderWidth: 1,
        borderColor: colors.black,
        resizeMode: 'cover',
    },

    icon_produk: {
        width: 25,
        height: 25,
        marginLeft: 'auto',
        paddingLeft: 10
    },

    box_icon_produk: {
        width: 'auto',
        paddingTop: 6,
        marginLeft: 'auto',
        paddingRight: 10
    },

    boxitem: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        borderBottomWidth: 2,
        borderColor: colors.lightblue
    },

    boxshowproduk: {
        borderWidth: 2,
        borderColor: colors.lightblue,
    },

    deskripsiitem: {
        paddingTop: 6,
        width: '45%',
    },

    texthargacolor: {
        fontSize: 16,
        fontWeight: 'bold',
        backgroundColor: colors.lightgreen,
        paddingHorizontal: 5,
        marginTop: 3
    },


})

export default kategoriStyle;