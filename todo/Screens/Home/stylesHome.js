import { StyleSheet } from 'react-native';
import { Colors } from '../../Shared/Colors.js';


const styles = StyleSheet.create({

    MainBody: {
        flex: 1,
        justifyContent: 'flex-end',
    },


    header: {
        
        paddingTop: 70,
        marginTop: -25,
        backgroundColor: Colors.white,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        
    },

    modalParent: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    modalChild: {
        width: 300,
        height: 500,
        backgroundColor: Colors.white,
        borderRadius: 20,
        padding: 20,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    
    modalHeader: {
        width:"100%",
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-center',
        backgroundColor: Colors.white,
        marginBottom: 20,
    },

    sair: {
        alignSelf: 'flex-start',
        
    },

    titulo: {
        width: "60%",
        height: 35,
        backgroundColor: Colors.white,
        marginBottom: 20,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },

    modalBody: {
        width: "100%",
        height: 300,
        backgroundColor: Colors.white,
        marginBottom: 20,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },

    escrita: {
        width: "100%",
        height: 300,
        marginBottom: 20,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    

});

export { styles }