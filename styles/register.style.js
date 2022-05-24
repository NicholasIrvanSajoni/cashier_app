import { StyleSheet } from 'react-native'
import colors from '../constants/Colors';
import { Dimensions } from 'react-native';

const registerStyle = StyleSheet.create({

    wall: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        position: 'absolute'
    },

    logo: {
        marginTop: '25%',
        justifyContent: 'center',
        alignItems: 'center',
        width: Dimensions.get('window').width,
    },

    home_image: {
        alignSelf: 'center',
        width: 125,
        height: 125,
    },

    inputlogin: {
        paddingHorizontal: 25,
        marginTop: 30
    },

    boxheight: {
        paddingTop: 5
    },

    item: {
        // Just for visual representation:
        borderRadius: 10,
        backgroundColor: colors.white,
        shadowColor: colors.black,
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,

        // Important styles:
        width: '100%',
        height: 300,
        paddingTop: 20,
        paddingBottom: 40
    },

    insidecard: {
        paddingHorizontal: 10
    },

    forgetpassword: {
        marginTop: 8,
        textAlign: 'right'
    },

    btn_login: {
        marginTop: 25,
        marginBottom: 10
    },

    boxinput: {
        height: 40,
        marginVertical: 8
    },

    signuphere: {
        textAlign: 'center',
        marginTop: 25
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

    box_pendapatan: {
        borderRadius: 10,
        height: 100,
        backgroundColor: colors.lightred,
        shadowColor: colors.black,
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,

        // Important styles:
        marginBottom: 25,
        paddingHorizontal: 15,
        paddingVertical: 8
    },

    pendapatan: {
        fontSize: 24,
        color: colors.black
    },

    nilaipendapatan: {
        fontSize: 30,
        color: colors.black
    },

    home_card: {
        borderWidth: 2,
        borderColor: colors.black,
        flexDirection: 'row',
        width: '50%',
        height: 200

    },

    box_image: {
        paddingTop: 30
    },

    headertext: {
        fontSize: 20,
        fontWeight: '900',
        color: colors.black
    },


    item_text: {
        textAlign: 'center',
        fontSize: 20,
        paddingTop: 20
    }
})

export default registerStyle;