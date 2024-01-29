import React, {useState} from 'react';
import { SafeAreaView} from 'react-native';
import { Button, Modal } from 'react-native-paper';
import { styles } from "./stylesHome.js";
import { useNavigation } from '@react-navigation/native';  

import  NewTodo  from '../../Components/NewTodo';


export default function Home() {
    
    
    const navigation = useNavigation();


    // funcoes pro modal do NewTodo
    const [visible, setVisible] = useState(false);

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
                
                {/* botao que vai pra lista de todos os ToDos */}
                <Button
                    mode="contained"
                    onPress={() => navigation.navigate('ListTodos')}
                    style={styles.buttonSeeNote}
                    contentStyle={styles.buttonAll}
                >
                    Ver notas adicionadas
                </Button>
            

                {/* Modal com um componenente que permite o usuario
                    adicionar um ToDo */}
                <Modal visible={visible} transparent={true} onDismiss={ () => {hide();} }>
                    <NewTodo
                        titulo={"Título"}
                        escrita={"Escreva!"}
                        handleClose={()=>hide()} />
                </Modal>
        </SafeAreaView>
    );
}
