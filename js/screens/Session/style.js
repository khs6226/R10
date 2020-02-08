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
    speakerName : {
        fontFamily: fonts.light,
        fontSize: 30,
        alignSelf: "center"
    },
    speakerBio : {
        fontFamily: fonts.light,
        fontSize: 20,
        alignSelf: "center",
        marginHorizontal: 15,
        marginTop: 20,
        lineHeight: 30
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
        alignItems: "center",
        marginTop: 30
    },
    faveButton : {
        borderRadius: 40,
        alignItems: "center",
        width: "75%",
        backgroundColor: colors.purple,
        paddingVertical: 15
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
    modalContainer : {
        backgroundColor: colors.black,
        height: "100%",

    },
    modalTopContainer : {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 30,
        marginBottom: 30,
        backgroundColor: colors.black,
    },
    modalScrollView : {
        width: "90%",
        height: "90%",

        alignSelf: "center",
        backgroundColor: colors.white,
        borderRadius: 20
    },
    modalX : {
        color: colors.white,
        alignContent: "flex-end",
        marginLeft: 20,
        marginRight: 50
    },
    modalText : {
        fontFamily: fonts.light,
        fontSize: 22,
        fontWeight: "bold",
        textAlign: "justify",
        marginLeft: 20,
        color: colors.white,
    },
    modalImage : {
        width: 130,
        height: 130,
        borderRadius: 100,
        alignSelf: "center",
        marginVertical: 20
    }
})

export default styles