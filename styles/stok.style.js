import { StyleSheet } from 'react-native'
import colors from '../constants/Colors';

const stokStyle = StyleSheet.create({
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

})

export default stokStyle;