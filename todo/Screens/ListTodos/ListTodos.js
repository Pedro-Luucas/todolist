import React from 'react';
import { useState, useEffect } from 'react';
import { SafeAreaView, FlatList, View, Text, Modal } from 'react-native';
import { styles } from "./stylesListTodos.js";
import { Button } from 'react-native-paper';
import { collection,
         getDocs,
         getDoc,
         updateDoc,
         deleteDoc,
         doc } from "firebase/firestore"
import { db } from '../../config.js';
import { useNavigation } from '@react-navigation/native';  

import  TodoBox  from '../../Components/TodoBox';
import  NewTodo  from '../../Components/NewTodo';

export default function ListTodos() {

    const navigation = useNavigation();

    const todosRef = collection(db,'todos')

    const [todos, setTodos] = useState([]);

    const [newTitulo, setNewTitulo] = useState('')
    const [newEscrita, setNewEscrita] = useState('')
    const [newTime, setNewTime] = useState('')

    const [identifier, setIndentifier] = useState('')


    const getTodos = async () => {
        const data = await getDocs(todosRef)
        console.log(data)
        setTodos(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
        console.log("\n\n\n\n\n\n\n",todos,"\n\n\n\n\n\n\n")
    }
 

    const handleDelete = async (id) => {
        const todoDoc = doc(db, "todos", id);
        await deleteDoc(todoDoc);
        getTodos();
    }

    const handleEdit = async (id, titulo, escrita, time) => {

    }

    const tituloEdit = async (identifier) => {

            const docRef = doc(db, 'todos', identifier);
            const docSnapshot = await getDoc(docRef)
            const tituloString = docSnapshot.data().titulo;
            setNewTitulo(tituloString)
            console.log(newTitulo)

    }



    const [visible, setVisible] = useState(false);

    const show = () => {
        setVisible(true);
    }
    const hide = () => {
        setVisible(false);
    }




    useEffect(() => {
        getTodos();
    }, []);


    return (
        <SafeAreaView styles={styles.mainBody}>
            <Button mode="contained" style={styles.buttonVoltar} onPress={() => navigation.navigate('Home')}>
                <Text>Voltar</Text>
            </Button>

            <FlatList
                data={todos}
                renderItem={({item}) => (
                    <TodoBox 
                        titulo={item.titulo} 
                        escrita={item.escrita}
                        time={(item.time)}
                        handleDelete={() => {
                            handleDelete(item.id);
                        }}
                        handleEdit={() => {
                            setIndentifier(String(item.id));
                            tituloEdit(item.id);
                            console.log(newTitulo, identifier)
                            show();
                        }} 
                        
                    />
                )}>
            </FlatList>

            <Modal visible={visible} transparent={true} onDismiss={ () => {hide();}}>
                <NewTodo
                        editMode={true}
                        identifier={identifier}
                        titulo={"Título:"}
                        tituloEdit={newTitulo}
                        escrita={"Edite:"}
                        escritaEdit={'escrita do edit oprraraaaaa'}
                        adicionar={"Editar"}
                        handleClose={()=>hide()} />
            </Modal>


        </SafeAreaView>
    );
}
