import React, { useState, useEffect } from 'react';
import { View, Keyboard } from 'react-native';
import { TextInput, Text, Button } from 'react-native-paper';
import { styles } from "./stylesNewTodo.js";
import { db } from '../../config.js';
import { collection, getDocs, addDoc} from "firebase/firestore"

function NewTodo  ( props )  {


    const todosRef = collection(db,'todos');

    const [time, setTime] = useState(new Date);
    const [tituloValue, setTituloValue] = useState('')
    const [escritaValue, setEscritaValue] = useState('');

    const [todos, setTodos] = useState([]);
    const [todo, setTodo] = useState([]);


    /*useEffect( () => {
        
        const getTodos = async () => {
            const data = await getDocs(todosRef)
            console.log(data)
            setTodos(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
            console.log("\n\n\n\n\n\n\n",todos,"\n\n\n\n\n\n\n")
        }
        getTodos()

    })*/

    const addTodo = async () => {
        await addDoc(todosRef, {titulo: tituloValue, escrita: escritaValue, tempo: time})
    }
    

















    return (
    <View style={styles.modalParent}>
        <View style={styles.modalChild}>

            <View style={styles.modalHeader}>
                <TextInput
                    mode="outlined"
                    label={
                        <Text style={styles.label}>{props.titulo}</Text>
                    }
                    value={tituloValue}
                    style={styles.titulo}
                    onChangeText={tituloValue => setTituloValue(tituloValue)}
                />
                <Button mode="contained-tonal" onPress={() => { props.handleClose();}} style={styles.sair}>
                    <Text>X</Text>
                </Button>
            </View>

            <View style={styles.modalBody}>
                <TextInput
                    dense={true}
                    multiline={true}
                    mode="flat"
                    style={styles.escrita}
                    label={
                        <Text style={styles.label}>{props.escrita}</Text>
                    }
                    value={escritaValue}
                    
                    onChangeText={escritaValue => setEscritaValue(escritaValue)}
                />
            </View>

                <Button style={styles.buttonAdd} onPress={() => { props.handleClose(); setTime(Date.now()); addTodo(); }}>
                    <Text>Adicionar</Text>
                </Button>

        </View>
    </View>

    
    );
};

export default NewTodo;
