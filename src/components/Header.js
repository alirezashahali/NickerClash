import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Color from '../constants/Colors'

const Header = ({ title }) => {
    return (
    <View style={styles.container}>
        <Text style={styles.text}>{title}</Text>
    </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: Color.primary,
        height: 50,
        width: '100%',
        elevation: 10,
        justifyContent: "flex-end"
    },
    text:{
        fontSize: 20,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center"
    }
})

export default Header