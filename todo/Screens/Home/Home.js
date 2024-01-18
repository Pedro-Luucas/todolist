import React, {useState, useEffect} from 'react';
import { SafeAreaView, View, Text, FlatList, TouchableOpacity, Keyboard } from 'react-native';
import { TextInput, Button, Modal } from 'react-native-paper';
import { styles } from "./stylesHome.js";
import { useNavigation } from '@react-navigation/native';  
import { FontAwesome } from '@expo/vector-icons';
import { db } from '../../config.js';


export default function Home() {
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

                <Button onPress={show}>
                    <Text> Add new note </Text>
                </Button>

                <Modal visible={visible} transparent={true} onDismiss={hide}>
                    <View style={styles.modalParent}>
                        <View style={styles.modalChild}>

                            <View style={styles.modalHeader}>
                                <TextInput
                                    mode="outlined"
                                    label='Titulo'
                                    value={titulo}
                                    style={styles.titulo}
                                    onChangeText={titulo => setTitulo(titulo)}
                                />
                                <Button mode="contained-tonal" onPress={hide} style={styles.sair}>
                                    <Text>X</Text>
                                </Button>
                            </View>

                            <View style={styles.modalBody}>
                                <TextInput
                                    mode="flat"
                                    label='Escrita'
                                    value={escrita}
                                    style={styles.escrita}
                                    onChangeText={escrita => setEscrita(escrita)}
                                />
                            </View>

                            <Button mode="contained" onPress={() => { hide(); setTime(Date.now())}}>
                                <Text> Add </Text>
                            </Button>

                        </View>
                    </View>
                </Modal>
        </SafeAreaView>
    );
}
