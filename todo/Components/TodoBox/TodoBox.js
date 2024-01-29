import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-paper'
import { styles } from './stylesTodoBox'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';



// componente que renderiza cada ToDo na FlatList do ../../Screens/ListTodos

const TodoBox = ( props ) => (
        <View style={styles.todoBox}>
            <View style={styles.tituloWrapper}>

                <Text numberOfLines={1} style={styles.titulo}>{props.titulo}</Text>

                {/* os dois botoes, editar e excluir respectivamente */}
                <View style={styles.botoes}> 
                    
                    {/* botao de editar */}
                    <Button mode='contained' style={styles.buttonEdit} onPress={() => { props.handleEdit();}}>
                        <Icon name="note-edit-outline" size={15}/>
                    </Button>

                    {/* botao de excluir */}
                    <Button mode='contained-tonal' style={styles.buttonDelete} onPress={() => { props.handleDelete();}}>
                        <Icon name="delete-forever" size={15}/>
                    </Button>

                </View>
            </View>

            <View style={styles.timeWrapper}>
                <Text style={styles.time}>{props.time}</Text>
            </View>

            <Text numberOfLines={2}>{props.escrita}</Text>

            
        </View>
    );


export default TodoBox;
