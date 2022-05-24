import { StyleSheet } from 'react-native'
import colors from '../constants/Colors';


const homeStyle = StyleSheet.create({
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

    home_image: {
        alignSelf: 'center',
        width: 100,
        height: 100
    },

    headertext: {
        fontSize: 20,
        fontWeight: '900',
        color: colors.black
    },

    item: {
        // Just for visual representation:
        borderRadius: 10,
        height: 200,
        backgroundColor: colors.lightorange,
        shadowColor: colors.black,
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,

        // Important styles:
        marginRight: 20,
        flexBasis: 'auto',
        flexGrow: 1,
        marginBottom: 25,
    },

    item_text: {
        textAlign: 'center',
        fontSize: 20,
        paddingTop: 20
    },

    container: {
        // Important styles:
        marginRight: -20,
        flexDirection: 'row',
        flexWrap: 'wrap',
    }
})

export default homeStyle;