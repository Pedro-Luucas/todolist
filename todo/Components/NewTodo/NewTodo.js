import React, { useState, useEffect } from 'react';
import { View, Keyboard } from 'react-native';
import { TextInput, Text, Button } from 'react-native-paper';
import { styles } from "./stylesNewTodo.js";
import { db } from '../../config.js';
import { collection, addDoc } from "firebase/firestore"
import { PropTypes } from 'prop-types';

function NewTodo(props) {



    const todosRef = collection(db, 'todos');

    const [time, setTime] = useState(new Date);
    const [tituloValue, setTituloValue] = useState('')
    const [escritaValue, setEscritaValue] = useState('');

    const addTodo = async () => {
        await addDoc(todosRef, { titulo: tituloValue, escrita: escritaValue, tempo: time })
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

                    <Button mode="contained-tonal" onPress={() => { props.handleClose(); }} style={styles.sair}>
                        <Text>X</Text>
                    </Button>

                </View>

                <View style={styles.modalBody}>
                    <View style={styles.escritaWrapper}>
                        <TextInput
                            dense={true}
                            multiline={true}
                            mode="flat"
                            style={styles.escrita}
                            label={
                                <Text style={styles.label}>{props.escrita}</Text>
                            }
                            value={escritaValue}
                            onEndEditing={time => setTime(Date.now())}
                            onChangeText={escritaValue => setEscritaValue(escritaValue)}
                        />
                    </View>

                    <View style={styles.timeWrapper}>
                        <Text style={styles.time}>{time.toLocaleString('pt-BR', { hour: 'numeric', minute: 'numeric', day: 'numeric', month: 'numeric', year: 'numeric' })}</Text>
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
};

NewTodo.propTypes = {
    titulo: PropTypes.string.isRequired,
    handleClose: PropTypes.func.isRequired,
    escrita: PropTypes.string.isRequired,
    adicionar: PropTypes.string
};

NewTodo.defaultProps = {
    adicionar: 'adicionar'
};




export default NewTodo;
