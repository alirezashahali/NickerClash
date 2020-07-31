import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import Color from './src/constants/Colors'
import Header from './src/components/Header'
import StartRoundAsker from './src/screens/StartRoundAsker'
import ChoosingNumber from './src/screens/ChoosingNumber'
import Card from './src/components/Card'
import Acclaimer from './src/components/Acclaimer'

export default function App() {
  // state
  // number of rounds to win
  const [rounds, setRounds] = useState(0)
  //should it ask for number of rounds
  const [isRoundAsker, setIsRoundAsker] = useState(true)
  //is player picking the number
  const [playerPick, setPlayerPick] = useState(true)
  //the number of round they are in
  const [roundNum, setRoundNum]= useState(1)
  // number they should guess
  const [pickedNumber, setPickedNumber] = useState("")
  // is the number to be guessed picked
  const [isNumberPicked, setIsNumberPicked] = useState(false)

  //functions
  const roundsSetter = (num) => {
    setRounds(num)
    setIsRoundAsker(!isRoundAsker)
  }

  const pickedNumberSetter = (num) => {
    console.log(typeof num)
    setPickedNumber(num)
    setIsNumberPicked(true)
  }

  //View
  return (
    <View style={styles.container}>
      <Header title="NickerClasher" />
      <StartRoundAsker roundsSetter={roundsSetter} visible={isRoundAsker}/>
      {
        isNumberPicked ? null : 
        <View>
          <Acclaimer playerPick={playerPick} roundNum={roundNum} />
          <Card><ChoosingNumber handler={pickedNumberSetter}
          playerPick={playerPick} roundNum={roundNum} /></Card>
        </View>
      }
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center'
  },
});
