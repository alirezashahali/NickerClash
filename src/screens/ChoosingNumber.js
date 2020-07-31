import React, {useState} from 'react'
import {View, Text, StyleSheet, TouchableOpacity, TouchableHighlight} from 'react-native'
import Input from './../components/Input'
import Button from './../components/Button'
import Color from '../constants/Colors'

const ChoosingNumber = ({playerPick, roundNum, handler }) => {
    const [pickNumber, setPickNumber] = useState("")

    const setNum=(num) => {
        num = Number(num.replace(/[^0-9]/g, ""))
        setPickNumber(num)
    }

    if(playerPick){
        return(
            <View style={styles.container} >
                {/* <Text style={{...styles.header, ...styles.outHeader}} >Round {roundNum} Pick Your Number</Text> */}
                <Text style={styles.header}>Choose a Number between 1 and 99!</Text>
                <Input setNum={setNum} val={pickNumber} style={styles.input}/>
                <View style={styles.buttons}>
                    <TouchableOpacity onPress={() => { setPickNumber("") } }>
                        <Button text="Clear" style={{...styles.button, ...styles.rejection}}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={ () => {
                            handler(pickNumber)
                        } }>
                        <Button text="Confirm" style={{...styles.button, ...styles.confirmation}} />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        top: -30
    },
    header: {
        marginVertical: 20,
        fontSize: 18,
        marginHorizontal: 10,
        alignSelf: "center",
        textAlign: "center"
    },
    input:{
        width: 40,
        fontSize: 20,
        borderBottomColor: 'grey',
        // borderRadius: 10,
        borderBottomWidth: 1
    },
    buttons:{
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: 20,
        alignSelf: "stretch"
        // width: '100%'
    },
    button:{
        fontSize: 22,
        padding: 10,
        minWidth: 100
    },
    rejection:{
        backgroundColor: Color.rejection,
        
    },
    confirmation:{
        backgroundColor: Color.secondary
    },
    outHeader: {
        position: "absolute",
        top: -20
    }
})

export default ChoosingNumber