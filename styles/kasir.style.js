import { Dimensions, StyleSheet } from 'react-native'
import colors from '../constants/Colors';

const kasirStyle = StyleSheet.create({
    actionbar: {
        paddingBottom: 20,
        zIndex: 3
    },

    home: {
        width: '100%',
        height: '100%',
        backgroundColor: colors.white
    },

    leftheader: {
        flex: 1,
        left: 15
    },

    rightheader: {
        flex: 1,
        paddingRight: 15
    },

    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 15,
        backgroundColor: colors.lightgreen
    },

    content: {
        padding: 20
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
        width: '100%'
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
        paddingRight: 10,
    },

    headertext: {
        fontSize: 20,
        fontWeight: '900',
        color: colors.black,
        alignSelf: 'center',
        justifyContent: 'center'
    },

    cartheadertext: {
        fontSize: 20,
        fontWeight: '900',
        color: colors.black,
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
        flexBasis: '43%',
        flexGrow: 1,
        marginBottom: 25,
    },


    container: {
        // Important styles:
        marginRight: -20,
        flexDirection: 'row',
        flexWrap: 'wrap',
        zIndex: 3
    },

    cartsidebar: {
        position: 'absolute',
        height: '100%',
        width: '80%',
        right: 0,
        zIndex: 5,
        backgroundColor: colors.white,
        borderLeftWidth: 1,
        borderColor: colors.lightblue,
    },

    cartsideheader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 15,
        backgroundColor: colors.lightgreen,
    },

    titlecart: {
        flex: 1
    },

    rightheadercart: {
        flex: 1,
        right: 10
    },

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

    btm_cart: {
        borderWidth: 1,
        borderColor: colors.black,
        bottom: 0,
        left: 0,
        right: 0,
        position: 'absolute',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    totalhargacart: {
        paddingLeft: 10
    },

    btncheckout: {
        backgroundColor: colors.lightyellow,
        paddingTop: 4,

    },

    // Modal
    modalproduct: {
        position: "absolute",
        justifyContent: "center",

        alignSelf: "center",
        alignContent: 'center',
        height: 'auto',
        width: '75%',
        zIndex: 5,
        top: '5%',
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
        left: 15

    },

    rightheadermodal: {
        flex: 1,
        right: 10
    },

    modalproductbox: {
        paddingTop: 15,
    },

    modalproductimage: {
        resizeMode: 'contain',
        width: '100%',
        height: 200

    },

    modalproductinfo: {
        paddingVertical: 10
    },

    modalproductname: {
        fontSize: 17
    },

    modalproductbtn: {
        borderTopWidth: 2,
        borderColor: colors.lightblue
    },

    btnaddtocart: {
        backgroundColor: colors.lightyellow,
    },

    modalvariasi: {
        paddingTop: 5
    },

    modaljenisproduk: {
        flex: 1,
        flexDirection: 'row',
        paddingTop: 5
    },

    modalside: {
        paddingHorizontal: 15,
    },

    modalproductprice: {
        borderWidth: 2,
        borderColor: colors.black,
        fontSize: 18
    },

    paddingtop10: {
        paddingTop: 5
    },

    modaljumlahproduct: {
        flex: 1,
        flexDirection: 'row',
    },

    modalstokproduct: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        alignSelf: 'center',
        alignContent: 'center'
    },

    textstok: {
        fontSize: 16
    }

})

export default kasirStyle;