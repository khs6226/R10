import { StyleSheet } from 'react-native'
import { fonts, colors } from '../../config/styles'

const styles = StyleSheet.create({
    title : {
        fontSize: 20,
        fontFamily: fonts.light,
        fontWeight: "bold",
        marginTop: 10
    },
    header : {
        fontSize: 17,
        fontFamily: fonts.light,
        fontWeight: "bold",
        padding: 20,
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: colors.lightGrey
    },
    container : {
        marginLeft: 15,
        marginRight: 15
    },
    locationContainer : {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    location : {
        fontSize: 17,
        fontFamily: fonts.light,
        fontWeight: "bold",
        color: colors.mediumGrey,
        marginVertical: 10
    },

})

export default styles