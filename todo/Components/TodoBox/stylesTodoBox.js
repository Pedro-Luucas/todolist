import { StyleSheet } from 'react-native';
import { Colors } from '../../Shared/Colors.js';


const styles = StyleSheet.create({
    todoBox: {
        padding: 10,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: Colors.primary,
        marginTop: 20
    },
    tituloWrapper: {
        width:"100%",
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-center',
        backgroundColor: Colors.white,
        marginBottom: 10,
    },
    titulo: {
        padding:10,
        alignSelf: 'center',
        width: '70%',
    },
    botoes:{
        flexDirection: 'row',
    },
    buttonEdit: {
        marginLeft:25,
    },
    buttonDelete: {
        marginLeft:10,
    },

    timeWrapper: {
        marginBottom: 20,
        flexDirection:'row-reverse'
        
    },
    time: {
        opacity: 0.7
    },




})

export {styles};