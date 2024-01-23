import { StyleSheet } from 'react-native';
import { Colors } from '../../Shared/Colors.js';


const styles = StyleSheet.create({

    MainBody: {
        flex: 1,
    },

    buttonAll: {
        width: "100%",
        height: 150,
        justifyContent: 'center',
    },

    buttonNewNote: {
        width: "100%",
        position: 'absolute',
        bottom: 0,
        left: 0,
        backgroundColor: Colors.black,
        color: Colors.white,
        borderRadius: 0,
        
        
    },

    buttonSeeNote: {
        width: "100%",
        position: 'absolute',
        bottom: 150,
        left: 0,
        backgroundColor: Colors.primary,
        color: Colors.white,
        borderRadius: 0,
        justifyContent: 'center',
    }


    
});

export { styles }