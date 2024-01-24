import React from 'react';
import { useState, useEffect } from 'react';
import { SafeAreaView, FlatList, View, Text } from 'react-native';
import { styles } from "./stylesListTodos.js";
import { Button } from 'react-native-paper';
import { collection, getDocs } from "firebase/firestore"
import { db } from '../../config.js';
import { useNavigation } from '@react-navigation/native';  

import  TodoBox  from '../../Components/TodoBox';

export default function ListTodos() {

    const navigation = useNavigation();

    const todosRef = collection(db,'todos')

    const [todos, setTodos] = useState([]);

    const getTodos = async () => {
        const data = await getDocs(todosRef)
        console.log(data)
        setTodos(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
        console.log("\n\n\n\n\n\n\n",todos,"\n\n\n\n\n\n\n")
    }
 
    useEffect( () => {
        
        getTodos()

        
        },[]);








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
                    time={Date(item.tempo)}
                    />)}
                
                keyExtractor={todoBox => todoBox.id}
            />


        </SafeAreaView>
    );
}
