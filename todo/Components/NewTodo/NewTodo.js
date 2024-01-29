import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { TextInput, Text, Button } from 'react-native-paper';
import { styles } from "./stylesNewTodo.js";
import { db } from '../../config.js';
import { collection, addDoc, serverTimestamp, doc, updateDoc } from "firebase/firestore"
import { PropTypes } from 'prop-types';
import { AsyncStorage } from 'react-native';

function NewTodo(props) {
    const editBool = props.editMode
    const identifier = props.identifier
    const tituloEdit = props.tituloEdit

    const todosRef = collection(db, 'todos');

    const [timeValue, setTimeValue] = useState('');
    const [tituloValue, setTituloValue] = useState('');
    const [escritaValue, setEscritaValue] = useState('');

    


    const addDate = (dateNow = new Date()) => {
        const year = dateNow.getFullYear();
        const month = String(dateNow.getMonth() + 1).padStart(2, '0');
        const date = String(dateNow.getDate()).padStart(2, '0');
        const hours = String(dateNow.getHours()).padStart(2, '0');
        const minutes = String(dateNow.getMinutes()).padStart(2, '0');
        const TempoAtual = `${year}/${month}/${date}  ${hours}:${minutes}`;
        setTimeValue(TempoAtual);
    };

    const addTodo = async () => {
        await addDoc(todosRef, { titulo: tituloValue, escrita: escritaValue, timestamp: serverTimestamp(), time: timeValue })
    };

    const editTodo = async (id, titulo, escrita, time) => {
        const todoDoc = doc(db, "todos", id);
        const updatedDoc = { titulo: titulo, escrita: escrita, time: time };
        await updateDoc(todoDoc, updatedDoc);
    };

    const editMode = async () => {
        if (editBool === true) {
            setTituloValue(props.tituloEdit);
            setEscritaValue(props.escritaEdit);
        }
    };

    useEffect(() => {
        addDate();
        editMode();
        console.log(editBool);
        console.log(timeValue);
        console.log(tituloValue);
        console.log(escritaValue);
    }, []);

    return (
        <View style={styles.modalParent}>
            <View style={styles.modalChild}>
                <View style={styles.modalHeader}>
                    <TextInput
                        editable={true}
                        mode="outlined"
                        label={
                            <Text style={styles.label}>{props.titulo}</Text>
                        }
                        placeholder={props.placeholderTitulo}
                        value={tituloValue}
                        style={styles.titulo}
                        onChangeText={tituloValue => setTituloValue(tituloValue)}
                    />

                    <Button mode="contained-tonal" onPress={() => { props.handleClose(); }} style={styles.sair}>
                        <Text>X</Text>
                    </Button>
                </View>

                <View style={styles.modalBody}>
                    <View style={styles.escritaWrapper}>
                        <TextInput
                            editable={true}
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

                    <View style={styles.timeWrapper}>
                        <Text style={styles.time}>{timeValue}</Text>
                    </View>

                    <View style={styles.buttonAddWrapper}>
                        <Button style={styles.buttonAdd} mode='contained-tonal' onPress={() => { props.handleClose(); /*props.handleAdd();*/ addTodo(); }}>
                            <Text>{props.adicionar}</Text>
                        </Button>
                    </View>
                </View>
            </View>
        </View>
    );
}

NewTodo.propTypes = {
    titulo: PropTypes.string.isRequired,
    handleClose: PropTypes.func.isRequired,
    escrita: PropTypes.string.isRequired,
    adicionar: PropTypes.string,
    editMode: PropTypes.bool.isRequired,
    tituloEdit: PropTypes.string,
    escritaEdit: PropTypes.string,
};

NewTodo.defaultProps = {
    adicionar: 'adicionar',
    editMode: false
};

export default NewTodo;
