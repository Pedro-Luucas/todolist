import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-paper'
import { styles } from './stylesTodoBox'
import { PropTypes } from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';





const TodoBox = ( props ) => (
        <View style={styles.todoBox}>
            <View style={styles.tituloWrapper}>

                <Text numberOfLines={1} style={styles.titulo}>{props.titulo}</Text>

                <View style={styles.botoes}> 

                    <Button mode='contained' style={styles.buttonEdit} onPress={() => { props.handleEdit();}}>
                        <Icon name="note-edit-outline" size={15}/>
                    </Button>

                    <Button mode='contained-tonal' style={styles.buttonDelete} onPress={() => { props.handleDelete();}}>
                        <Icon name="delete-forever" size={15}/>
                    </Button>

                </View>
            </View>

            <View style={styles.timeWrapper}>
                <Text style={styles.time}>{props.time}</Text>
            </View>

            <Text numberOfLines={2} style={styles.escrita}>{props.escrita}</Text>

            
        </View>
    );

TodoBox.propTypes = {

}

TodoBox.defaultProps = {

}


export default TodoBox;
