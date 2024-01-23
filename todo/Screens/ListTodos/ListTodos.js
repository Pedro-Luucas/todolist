import React from 'react';
import { useState, useEffect } from 'react';
import { SafeAreaView, FlatList, View, Text } from 'react-native';
import { styles } from "./stylesListTodos.js";
import { collection, getDocs } from "firebase/firestore"
import { db } from '../../config.js';

export default function ListTodos() {

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

        
        },[])

    const TodoBox = ({titulo, escrita, time}) => (
        <View style={styles.todoBox}>
          <Text style={styles.titulo}>{titulo}</Text>
          <Text style={styles.escrita}>{escrita}</Text>
          <Text style={styles.time}>{time}</Text>
        </View>
      );








    return (
        <SafeAreaView styles={styles.mainBody}>

            <FlatList
                data={todos}
                renderItem={({item}) => 
                <TodoBox 
                    titulo={item.titulo} 
                    escrita={item.escrita} 
                    time={item.time}
                />}
                keyExtractor={todoBox => todoBox.id}
            />

        </SafeAreaView>
    );
}
