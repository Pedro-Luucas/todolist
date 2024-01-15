import { StyleSheet } from 'react-native';
import { Colors } from '../../Shared/Colors.js';


const styles = StyleSheet.create({

    MainBody: {
        flexDirection: 'column',
        fontFamily: "Roboto",
    },

    container: {
        
        paddingTop: 70,
        marginTop: -25,
        backgroundColor: Colors.white,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        
    },

    textAprenda: {
        color: Colors.black,
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 75,
        marginBottom: 150

    },

    textCadastro: {
        color: Colors.black,
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 20,
    },

    buttonContainer: {
        backgroundColor: Colors.primary,
        width: 200,
        height: 50,
        borderRadius: 20,
        alignSelf: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    
    button: {
        marginTop: 5,
        backgroundColor: Colors.primary,
        flexDirection: 'row',
        alignItems: 'center',
        
    },
    

    textButton: {
        color: '#fff',
        fontSize: 20,
        textAlign: 'center',
        marginTop: 10,
    },

});

export { styles }