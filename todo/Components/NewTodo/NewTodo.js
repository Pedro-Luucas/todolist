import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { TextInput, Text, Button } from 'react-native-paper';
import { styles } from "./stylesNewTodo.js";
import { db } from '../../config.js';
import { collection, addDoc, serverTimestamp, doc, updateDoc } from "firebase/firestore"
import { PropTypes } from 'prop-types';



// acho que esse foi o componente mais complicado que eu ja fiz até agora
// fiz ele com dois modos:
// o modo padrao de adicionar mais um ToDo
// e com o modo de edição, onde um ToDo já existente pode ser editado

function NewTodo(props) {
    const editBool = props.editMode

    const identifier = props.identifier

    const tituloEdit = props.tituloEdit
    const escritaEdit = props.escritaEdit

    const todosRef = collection(db, 'todos');

    const [timeValue, setTimeValue] = useState('');
    const [tituloValue, setTituloValue] = useState('');
    const [escritaValue, setEscritaValue] = useState('');

    // outro grande problema que tive no projeto foi o de timestamps
    // o firebase utiliza um objeto timestamp diferente do javascript normal, https://firebase.google.com/docs/reference/android/com/google/firebase/Timestamp
    // nao achei um metodo bom de transformar o timestamp do firebase em um objeto Date() do javascript
    // entao no meu db do firebase tem dois campos pra tempo:
    // um campo timestamp do firebase de quando o ToDo foi criado (inalteravel)
    // e o outro campo eh essa gambiarra de string que muda toda vez que o ToDo for alterado
    const addDate = (dateNow = new Date()) => {
        const year = dateNow.getFullYear();
        const month = String(dateNow.getMonth() + 1).padStart(2, '0');
        const date = String(dateNow.getDate()).padStart(2, '0');
        const hours = String(dateNow.getHours()).padStart(2, '0');
        const minutes = String(dateNow.getMinutes()).padStart(2, '0');
        const TempoAtual = `${year}/${month}/${date}  ${hours}:${minutes}`;
        setTimeValue(TempoAtual);
    };


    // funcao pra adicionar um ToDo
    const addTodo = async () => {
        await addDoc(todosRef, { titulo: tituloValue, escrita: escritaValue, timestamp: serverTimestamp(), time: timeValue })
    };


    // funcao pra editar um ToDo
    const editTodo = async (id, titulo, escrita, time) => {
        const todoDoc = doc(db, "todos", id);
        const updatedDoc = { titulo: titulo, escrita: escrita, time: time };
        await updateDoc(todoDoc, updatedDoc);
    };

    // funcao que verifica se esta em modo de edicao e
    // aplica o value dos dois TextInput como o do texto a
    // ser editado
    const editMode = async () => {
        if (editBool === true) {
            setTituloValue(tituloEdit);
            setEscritaValue(escritaEdit);
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
                        <Button style={styles.buttonAdd} mode='contained-tonal' onPress={() => { props.handleClose(); /*props.handleAdd();*/ !editBool ? addTodo() : editTodo(identifier, tituloValue, escritaValue, timeValue) }}>
                            <Text>{props.adicionar}</Text>
                        </Button>
                    </View>
                </View>
            </View>
        </View>
    );
}


// decidi usar propTypes nesse projeto pq queria 
// props opcionais e obrigatorios, e esse foi o unico
// jeito que eu encontrei sem mudar o projeto pra typescript
NewTodo.propTypes = {
    titulo: PropTypes.string.isRequired,
    handleClose: PropTypes.func.isRequired,
    escrita: PropTypes.string.isRequired,
    adicionar: PropTypes.string,
    editMode: PropTypes.bool,
    tituloEdit: PropTypes.string,
    escritaEdit: PropTypes.string
};

NewTodo.defaultProps = {
    adicionar: 'adicionar',
    editMode: false
};

export default NewTodo;
