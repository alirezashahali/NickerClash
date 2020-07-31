import React from 'react'
import {View, Text, TextInput, StyleSheet} from 'react-native'

const Input = ({setNum, val, style}) => {
    return(
        <View>
            <TextInput keyboardType="number-pad" value={val}
                maxLength={2} onChangeText={(text)=>setNum(text)}
                style={{...styles.text, ...style}}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    text:{
        textAlign: "center",
        height: 30,
        backgroundColor: "#f5f5f5",
    }
})

export default Input