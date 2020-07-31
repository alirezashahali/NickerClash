import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Card = ({ children }) => {
    return(
        <View style={styles.container}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginVertical: 60,
        marginHorizontal: 20,
        width: "80%",
        elevation: 10,
        backgroundColor: "#f5f5f5",
        marginTop: 50,
        alignItems: "center",
        height: 200,
    }
})

export default Card