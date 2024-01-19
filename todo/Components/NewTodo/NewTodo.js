import React, { useState, useEffect } from 'react';
import { View, Keyboard } from 'react-native';
import { TextInput, Text, Button } from 'react-native-paper';
import { styles } from "./stylesNewTodo.js";

const NewTodo = (titulo, escrita) => {

    const [time, setTime] = useState(new Date);
    const [tituloValue, setTituloValue] = useState(titulo);
    const [escritaValue, setEscritaValue] = useState(escrita);




    return (
    <View style={styles.modalParent}>
        <View style={styles.modalChild}>

            <View style={styles.modalHeader}>
                <TextInput
                    mode="outlined"
                    label='Titulo'
                    value={tituloValue}
                    style={styles.titulo}
                    onChangeText={tituloValue => setTituloValue(tituloValue)}
                />
            </View>

            <View style={styles.modalBody}>
                <TextInput
                    dense={true}
                    multiline={true}
                    mode="flat"
                    label={
                        <Text style={styles.label}>{"Escreva aqui"}</Text>
                    }
                    value={escritaValue}
                    style={styles.escrita}
                    onChangeText={escritaValue => setEscritaValue(escritaValue)}
                />
            </View>

                <Button  style={styles.buttonAdd} onPress={() => { hide(); setTime(Date.now()); Keyboard.dismiss();}}>
                    <Text>Adicionar</Text>
                </Button>

        </View>
    </View>
    );
};

export default NewTodo;
