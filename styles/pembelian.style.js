import { StyleSheet } from 'react-native'
import colors from '../constants/Colors';

const pembelianStyle = StyleSheet.create({
    actionbar: {
        paddingBottom: 20,
        flex: 1,
        flexDirection: 'row'
    },

    searchprodukbar: {
        width: "90%"
    },

    iconfilterbox: {
        width: "15%",
        paddingTop: 7
    },

    iconfilter: {
        width: 35,
        height: 35,
        alignSelf: 'center',
    },

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

    container_2: {
        width: '100%'
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
        paddingRight: 5,

    },

    itemcartimage: {
        width: 80,
        height: 80,
        borderWidth: 1,
        borderColor: colors.black,
    },

    boxitem: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginBottom: 15,
        borderTopWidth: 2,
        borderColor: colors.black,
    },

    listpembelian: {
        borderWidth: 2,
        borderColor: colors.black,
    },

    titlepembelian: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    namatempatpembelian: {
        paddingVertical: 10,
        paddingLeft: 10,
        paddingRight: 10,
        justifyContent: 'center',
        alignSelf: 'center'
    },

    tanggalpembelian: {
        marginLeft: 'auto',
        // marginRight: 'auto',
        paddingVertical: 10,
        paddingLeft: 10,
        paddingRight: 10,
        justifyContent: 'center',
        alignSelf: 'center'
    },

    box_harga_pembelian: {


    },

    namajumlahproduk: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        paddingBottom: 5
    },

    box_harga_satuan: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    box_harga_total: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    deskripsiitem: {
        padding: 6,
        width: '70%'
    },

    namaitempembelian: {
        width: '80%',
    },

    deskripsijumlahitem: {
        paddingTop: 6,
        marginLeft: 'auto',
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

    // Modal
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

    boxheight: {
        paddingTop: 5
    },

    modaljumlahpembelianproduk: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    modaljmlhproduk: {
        width: '45%'
    },

    modaljnsproduk: {
        width: '45%'
    },

    modalhargapembelianproduk: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    modalhargasatuanproduk: {
        width: '45%'
    },

    modalhargatotalproduk: {
        width: '45%'
    },

    image_calendar: {
        width: 30,
        height: 30,
    },

    modaliconcalendar: {
        marginRight: 'auto',
        paddingLeft: 10,
        marginTop: 'auto',
    },

    modalinputtanggalcalendar: {
        borderWidth: 2,
        borderColor: colors.black,
        marginTop: 5,
        height: 25,
        justifyContent: 'center',
        paddingLeft: 5
    },

    boxiconcalendar: {
        marginTop: 10
    },

    btn_save: {
        marginTop: 15
    }
})

export default pembelianStyle;