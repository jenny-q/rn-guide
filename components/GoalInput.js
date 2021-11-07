import React, {useState} from 'react';
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native';

const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('');
    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
    };

    return (
        <Modal visible={props.visible}>
            <View style={styles.inputContainer}>
                <TextInput placeholder="Course Goals" 
                style={styles.inputText} 
                onChangeText={goalInputHandler}
                value={enteredGoal} />
                <Button title="add" onPress={props.onAddGoal.bind(this, enteredGoal)}/>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    inputText: {
        width: "80%",
        borderColor: "black",
        borderWidth: 1,
        padding: 10,
    }
});

export default GoalInput;