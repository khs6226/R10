import { StyleSheet } from 'react-native'
import { fonts } from '../../config/styles'

const styles = StyleSheet.create({
    logo : {
        width: 300,
        height: 70,
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: 50,
        marginBottom: 20
    },
    header : {
        fontSize: 30,
        fontFamily: fonts.light,
        fontWeight: "bold",
        marginBottom: 20
    },
    container : {
        marginLeft: 15,
        marginRight: 15
    },
    text : {
        fontFamily: fonts.light,
        fontSize: 18,
        fontWeight: "300",
        lineHeight: 25,
        marginBottom: 20
    }

})

export default styles