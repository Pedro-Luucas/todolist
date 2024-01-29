import React, {useState} from 'react';
import { SafeAreaView} from 'react-native';
import { Button, Modal } from 'react-native-paper';
import { styles } from "./stylesHome.js";
import { useNavigation } from '@react-navigation/native';  

import  NewTodo  from '../../Components/NewTodo';


export default function Home() {
    const [visible, setVisible] = useState(false);
    
    const navigation = useNavigation();


    const show = () => {
        setVisible(true);
    }
    const hide = () => {
        setVisible(false);
    }




    


    return (
        <SafeAreaView style={styles.MainBody}>
            
                <Button mode="contained" onPress={ () => {show();} } style={styles.buttonNewNote} contentStyle={styles.buttonAll}>
                    Adicionar nova nota 
                </Button>
                <Button
                    mode="contained"
                    onPress={() => navigation.navigate('ListTodos')}
                    style={styles.buttonSeeNote}
                    contentStyle={styles.buttonAll}
                >
                    Ver notas adicionadas
                </Button>
            


                <Modal visible={visible} transparent={true} onDismiss={ () => {hide();} }>
                    <NewTodo
                        titulo={"Título"}
                        escrita={"Escreva!"}
                        handleClose={()=>hide()} />
                </Modal>
        </SafeAreaView>
    );
}
