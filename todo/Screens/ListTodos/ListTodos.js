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

    const [identifier, setIndentifier] = useState('')

    // funcao assincrona que adiciona o proprio ID
    // como atributo de cada documento e guarda todos os ToDos no hook {todos}
    const getTodos = async () => {
        const data = await getDocs(todosRef)
        console.log(data)
        setTodos(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
        console.log("\n\n\n\n\n\n\n",todos,"\n\n\n\n\n\n\n")
    }
 
    //funcao pra deletar um ToDo
    const handleDelete = async (id) => {
        const todoDoc = doc(db, "todos", id);
        await deleteDoc(todoDoc);
        getTodos();
    }


    // funcoes para o modal do NewTodo
    const [visible, setVisible] = useState(false);

    const show = () => {
        setVisible(true);
    }
    const hide = () => {
        setVisible(false);
    }



    // fetching
    useEffect(() => {
        getTodos();
    }, []);


    return (
        <SafeAreaView styles={styles.mainBody}>
            <Button mode="contained" style={styles.buttonVoltar} onPress={() => navigation.navigate('Home')}>
                <Text>Voltar</Text>
            </Button>

            {/* FlatList que renderiza todos os ToDos do firebase em
                uma lista com o componente TodoBox localizado em '../../Components/TodoBox'.
                o handleEdit() mostra o mesmo modal NewTodo porém em modo de edicao */}
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
                            setNewTitulo(item.titulo);
                            setNewEscrita(item.escrita);
                            show();
                        }} 
                        
                    />
                )}>
            </FlatList>

            <Modal visible={visible} transparent={true} onDismiss={ () => {hide();}}>
                {/* NewTodo em modo de edicao */}
                <NewTodo
                        editMode={true}
                        identifier={identifier}
                        titulo={"Título:"}
                        tituloEdit={newTitulo}
                        escrita={"Edite:"}
                        escritaEdit={newEscrita}
                        adicionar={"Editar"}
                        handleClose={() => {hide(); getTodos();}} />
            </Modal>


        </SafeAreaView>
    );
}
