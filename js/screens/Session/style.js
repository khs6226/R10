import { StyleSheet } from 'react-native'
import { fonts, colors } from '../../config/styles'

const styles = StyleSheet.create({
    top : {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 20
    },
    title : {
        fontSize: 30,
        fontFamily: fonts.light,
        fontWeight: "bold",
        marginTop: 10
    },
    time : {
        fontFamily: fonts.light,
        fontSize: 20,
        fontWeight: "bold",
        color: colors.red,
        marginVertical: 20
    },
    description : {
        fontFamily: fonts.light,
        fontSize: 20,
        lineHeight: 30,
        marginBottom: 20
    },
    presenter : {
       fontFamily: fonts.light,
       fontWeight: "bold",
       fontSize: 20,
       color: colors.mediumGrey,
       marginVertical: 10
    },
    speakerContainer : {
        flexDirection: "row",
        alignItems: "center"
    },
    image : {
        width: 70,
        height: 70,
        borderRadius: 40,
    },
    name : {
        fontFamily: fonts.light,
        fontWeight: "bold",
        fontSize: 20,
        marginLeft: 15,
    },
    faveButtonContainer : {
        alignItems: "center"
    },
    faveButton : {
        borderRadius: 40,
        alignItems: "center",
        width: "75%",
        backgroundColor: colors.purple,
        paddingVertical: 20
    },
    faves : {
        fontFamily: fonts.light,
        fontSize: 20,
        fontWeight: "400",
        color: colors.white
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
        fontSize: 20,
        fontFamily: fonts.light,
        fontWeight: "bold",
        color: colors.mediumGrey,
        marginVertical: 10
    },

})

export default styles