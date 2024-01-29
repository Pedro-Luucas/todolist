import { StyleSheet } from 'react-native';
import { Colors } from '../../Shared/Colors.js';


const styles = StyleSheet.create({


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

    label: {
        flexDirection: "row",
        alignSelf: "flex-start",
        width: "100%",
    },

    titulo: {
        width: "60%",
        height: 35,
        backgroundColor: Colors.white,
        marginBottom: 20,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },

    sair: {
        alignSelf: 'flex-start',
        
    },


    modalBody: {
        width: "100%",
        height: 300,
        backgroundColor: Colors.white,
        marginBottom: 20,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },

    escritaWrapper: {
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        boxSize: 'border-box',
    },

    escrita: {
        height: 300,
        width: 250,

        textAlignVertical: 'top',
    },
    
    timeWrapper:{
        marginTop: 10,
        marginBottom:-10,
        
    },
    time:{
        flexDirection:'row-reverse'
    },

    buttonAddWrapper: {
        padding: 30,
        width: "100%",
        borderRadiusTopLeft: 20,
        borderRadiusTopRight: 20,
        borderRadiusBottomLeft: 0,
        borderRadiusBottomRight: 0,

    },

});

export { styles }