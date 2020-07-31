import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import Color from '../constants/Colors'

const Button = ({ text, style, insideStyle }) => {
    return(
        <View style={{...styles.button, ...style}}>
            <Text style={{ ...styles.text, ...insideStyle }}>{text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    button:{
        backgroundColor: Color.tertiary,
        elevation: 10,
        borderRadius: 5,
        paddingVertical: 5
    },
    text:{
        fontSize: 17,
        color: "#fff",
        alignSelf: "center"
    }
})

export default Button