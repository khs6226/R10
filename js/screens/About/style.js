import { StyleSheet } from 'react-native'
import { fonts } from '../../config/styles'

const styles = StyleSheet.create({
    logo : {
        width: 300,
        height: 70,
        marginLeft: 0,
        marginRight: 0,
        marginTop: 20
    },
    header : {
        fontSize: 30,
        fontFamily: fonts.font,
        fontWeight: "bold"
    }

})

export default styles