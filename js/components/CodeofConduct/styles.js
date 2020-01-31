import { StyleSheet } from 'react-native';
import { fonts, colors } from '../../config/styles';

const styles = StyleSheet.create({
    sign : {
        color: colors.purple,
        fontSize: 20,
        fontWeight: "400",
        textAlign: "justify"
    },

    title : {
        color: colors.purple,
        fontFamily: fonts.light,
        fontSize: 20,
        fontWeight: "bold",
        marginLeft: 10,
        marginBottom: 5,

    },

    conduct : {
        fontFamily: fonts.light,
        fontSize: 18,
        fontWeight: "300",
        lineHeight: 25,
        marginLeft: 20,
        marginBottom: 10
    },

    container: {
        flexDirection: "row"
    }
})

export default styles;