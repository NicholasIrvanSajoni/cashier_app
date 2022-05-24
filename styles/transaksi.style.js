import { StyleSheet } from 'react-native'
import colors from '../constants/Colors';

const transaksiStyle = StyleSheet.create({
    actionbar: {
        paddingBottom: 20
    },

    transaksi: {
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
        flexBasis: '40%',
        flexGrow: 1,
        marginBottom: 25,
    },


    container: {
        // Important styles:
        marginRight: -20,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },

    // Action Bar
    actionbar: {
        paddingBottom: 15,
    },

    searchprodukbar: {
        borderWidth: 2,
        marginTop: 10
    },


    // Penjualan

    itempenjualan: {
        flex: 1,
        backgroundColor: 'white',
        marginTop: 5
    },

    itemcartboximage: {
        paddingVertical: 10,
        paddingLeft: 15,
        paddingRight: 5,
        width: '27%'
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
        width: '70%'
    },

    texthargacolor: {
        fontSize: 16,
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
        marginTop: 5
    },

    jenisvariasi: {
        flexShrink: 1
    },

    textboldcolor: {
        backgroundColor: colors.lightgreen,
        fontWeight: 'bold',
        width: 'auto',
        paddingHorizontal: 5

    },

    textbold: {
        fontWeight: 'bold'
    },

    tanggalbold: {
        fontSize: 12,
        fontWeight: 'bold'
    },
})

export default transaksiStyle;