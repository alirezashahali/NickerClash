import React from 'react'
import {View, Text, StyleSheet, Modal, TouchableOpacity} from 'react-native'
import Button from '../components/Button'

const StartRoundAsker = ({ visible, roundsSetter }) => {
    return(
        <Modal visible={visible} animationType="slide">
            <View style={styles.container} >
                <Text style={styles.header} >Choose The Number of rounds!</Text>
                <View style={ styles.buttons }>
                    <TouchableOpacity style={styles.button} onPress={()=>{roundsSetter(1)}}>
                        <Button text="1 Kill" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={()=>{roundsSetter(3)}}>
                        <Button text="3 / 5" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={()=>{roundsSetter(5)}}>
                        <Button text="5 / 9" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={()=>{roundsSetter(10)}}>
                        <Button text="10 / 19" />
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    container:{
        justifyContent: "center",
        flex: 1,
        top: -100
    },
    buttons:{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        flexWrap: "wrap"
    },
    button:{
        width: "22%"
    },
    header:{
        fontSize: 22,
        marginBottom: 20,
        alignSelf: "center"
    }
})

export default StartRoundAsker