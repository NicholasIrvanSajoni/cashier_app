import { StyleSheet } from 'react-native'
import colors from '../constants/Colors';


const checkoutStyle = StyleSheet.create({
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

    contentheadercheckout: {
        borderWidth: 2
    },

    content: {
        padding: 20,
        height: '100%'
    },

    totalhargacheckout: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
    },

    // Item Checkout
    img_info: {
        flexDirection: 'row'
    },

    itemcartboximage: {
        paddingRight: 10,
        paddingTop: 5
    },

    itemcartimage: {
        width: 50,
        height: 50,
        borderWidth: 1,
        borderColor: colors.black,
    },

    nama_item: {
        flex: 1
    },
    boxitem: {
        flexDirection: 'row',
        borderWidth: 2,
        borderColor: colors.black,
        flexWrap: 'wrap',
        paddingBottom: 5,
    },

    deskripsiitem: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        width: '100%'
    },

    texthargacolor: {
        fontSize: 14,
        fontWeight: 'bold',
        backgroundColor: colors.lightgreen,
        paddingHorizontal: 5,
        marginTop: 3
    },

    checkcart: {
        paddingTop: 30
    },

    transaksi_total: {
        marginLeft: 'auto',
        justifyContent: 'center',
        alignSelf: 'center'

    },

    transaksi_harga: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 3
    },

    transaksi_satuan: {

    },

    transaksivariasi: {
        flexDirection: 'row',
        marginTop: 3
    },

    transaksivariasipembelian: {
        flexDirection: 'row',
        marginTop: 5
    },

    transaksi_jenis_jumlah: {
        flexDirection: 'row',
        marginTop: 5,
    },

    jenisvariasi: {
        flexShrink: 1,

    },

    textboldcolor: {
        backgroundColor: colors.lightgreen,
        fontWeight: 'bold',
        width: 'auto',
        paddingHorizontal: 5

    },

    textbold: {
        fontWeight: 'bold',

    },

    tanggalbold: {
        fontSize: 12,
        fontWeight: 'bold'
    },

    infocheckout: {
        flexDirection: 'row'
    },
})

export default checkoutStyle;