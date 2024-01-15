import React, {useState, useEffect} from 'react';
import { View, Text, FlatList, TouchableOpacity, Keyboard } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { styles } from "./stylesHome.js";
import { db } from '../../config.js';
import { useNavigation } from '@react-navigation/native';  
import { FontAwesome } from '@expo/vector-icons';


var indexes = []

export default function Home() {
    const [todos, setTodos] = useState([]);
    const todosRef = db.collection('todos');
    const [texto, setTexto] = useState('');
    const navigation = useNavigation();


    
    // delete data from firebase
    const deleteTodo = (todo) => {
        todosRef
        .doc(todo.id)
        .delete()
        .then(() => {
            alert('Todo deleted!')
        })
        .catch((error) => {
            alert(error)
        })
    }

    // add a todo
    /*const addTodo = ()  => {
        if (texto.length > 0){
            console.log('aaaaaaaaaaaaaaaa')
            const timeStamp = db.FieldValue.serverTimestamp();
            console.log(timeStamp)
            const data = {
                heading: texto,
                createdAt: timeStamp
            }
        };
        setTexto('');
        Keyboard.dismiss();

        todosRef
            .add(data)

            
        }*/

        const addTodo = () {
            try {
                if (texto.length > 0){
                    console.log('aaaaaaaaaaaaaaaa')
                    const timeStamp = db.FieldValue.serverTimestamp();
                    console.log(timeStamp)
                    todoRef = todosRef.collection(`todo`)
                    todoRef.add({
                        id:
                    })
                }
                
                
            }
        }




    return (
        <View>
            <View style={styles.container}>
                <TextInput
                    placeholder='New Todo'
                    onChangeText={(textoEscrito) => setTexto(textoEscrito)}
                    value={texto}
                    underlineColorAndroid='transparent'
                />
                <Button onPress={addTodo}>
                    <Text> Add </Text>
                </Button>
            </View>
            <FlatList
                data={todos}
                numColumns={1}
                renderItem={({item}) => {
                    (
                    <View>
                        <Button onPress={() => navigation.navigate('Details', {item})}>
                            <FontAwesome
                            name='trash-o'
                            color='red'
                            onPress={() => deleteTodo(item)}
                            />
                        </Button>
                    </View>
                )}
            }
            />
        </View>
    );}
