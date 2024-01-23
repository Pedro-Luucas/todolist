import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './stylesTodoBox'




const TodoBox = ( props ) => (
        <View style={styles.todoBox}>
            <Text style={styles.titulo}>{props.titulo}</Text>
            <Text style={styles.escrita}>{props.escrita}</Text>
            <Text style={styles.time}>{props.time}</Text>
        </View>
    );


export default TodoBox;
