import React from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';

interface Props {
  placeholder: string;
  onChangeText: (text: string) => void;
}

const RefInput: React.FC<Props> = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.input}>
                <TextInput 
                    placeholder={props.placeholder} 
                    onChangeText={props.onChangeText}
                />
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 50
    },
    input: {
        padding: 15,
        borderColor: 'rgba(0, 0, 0, 0.2)',
        borderWidth: 1,
        borderRadius: 5,
        width:'100%',
        height: '100%;',
        fontSize: 25
    },
});

export default RefInput;