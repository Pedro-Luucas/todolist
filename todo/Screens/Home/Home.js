import React, {useState, useEffect} from 'react';
import { SafeAreaView, View, Text, FlatList, TouchableOpacity, Keyboard } from 'react-native';
import { TextInput, Button, Modal } from 'react-native-paper';
import { styles } from "./stylesHome.js";
import { useNavigation } from '@react-navigation/native';  
import { FontAwesome } from '@expo/vector-icons';
import { db } from '../../config.js';
import NewTodo from '../../Components/NewTodo/NewTodo.js';
//import { FixedBottom } from '../../Components/FixedBottom/index.js';


export default function Home() {
    const [heigh, setHeigh] = useState(300);
    const [numLines, setNumLines] = useState(1);
    const [visible, setVisible] = useState(false);
    const [todos, setTodos] = useState([]);
    const [todo, setTodo] = useState([]);
    const [time, setTime] = useState(new Date);
    const [titulo, setTitulo] = useState('');
    const [escrita, setEscrita] = useState('');
    const todosRef = db.collection('todos');
    const [texto, setTexto] = useState('');
    const navigation = useNavigation();


    const show = () => setVisible(true);
    const hide = () => setVisible(false);





    useEffect( () => {
        
        const getTodos = async () => {
            const data = await db.getDocs(todosRef)
            console.log(data)
            setTodos(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
            console.log("\n\n\n\n\n\n\n",todos,"\n\n\n\n\n\n\n")
        }
        getTodos()
    
    })
    

    return (
        <SafeAreaView style={styles.MainBody}>

                <Button mode="contained" onPress={show} style={styles.buttonNewNote}>
                    Adicionar nova nota 
                </Button>

                <Modal visible={visible} transparent={true} onDismiss={hide}>
                    <NewTodo titulo={titulo} escrita={escrita} />
                </Modal>
        </SafeAreaView>
    );
}
