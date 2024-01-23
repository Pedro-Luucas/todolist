import { StyleSheet } from 'react-native';
import { Colors } from '../../Shared/Colors.js';


const styles = StyleSheet.create({

    MainBody: {
        flex: 1,
    },

    buttonNewNote: {
        width: "100%",
        height: 150,
        position: 'absolute',
        bottom: 0,
        left: 0,
        backgroundColor: Colors.black,
        color: Colors.white,
        borderRadius: 0,
        justifyContent: 'center',
        
    },

    newNote: {
        fontSize: 20,
        fontWeight: 'bold',
        color: Colors.black,
        padding: 20,
        textAlign: 'center',
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
        paddingBottom: 0,
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
        height: 300,
        width: 250,
        marginBottom: 20,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        textAlignVertical: 'top',
        boxSize: 'border-box',
    },
    
    label: {
        flexDirection: "row",
        alignSelf: "flex-start",
        width: "100%",
    },

    modalFooter: {
        width: "100%",
        height: 77,
        alignItems: 'flex-center',
        backgroundColor: Colors.accept,
        
    },

    buttonAdd: {
        
        width: "100%",
        borderRadiusTopLeft: 20,
        borderRadiusTopRight: 20,
        borderRadiusBottomLeft: 0,
        borderRadiusBottomRight: 0,

    },

});

export { styles }