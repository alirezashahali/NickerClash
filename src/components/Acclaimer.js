import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const Acclaimer = ({playerPick, roundNum}) => {
        return(
            <View style={styles.container}>
                { playerPick ? <Text style={styles.text} >Your Turn Round {roundNum}</Text> : null }
            </View>
        )
}

const styles = StyleSheet.create({
    container:{
        position: "absolute",
        alignSelf: "center",
        top: 10
    },
    text:{
        fontSize: 20,
        fontWeight: "bold"
    }
})

export default Acclaimer