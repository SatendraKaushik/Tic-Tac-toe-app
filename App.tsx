import React, { useEffect, useState } from "react";
import { TextInput, View, Text, StyleSheet, StatusBar, Button } from "react-native";

import Box from "./components/Student";

const App = () => {
  const [boxes, setBoxes] = useState(Array(9).fill(null));
  const [isXChance, setIsXChance] = useState(true);
  const [winner, setWinner] = useState(null);

  function PlayBox(no) {
    return (
      <Box
        no={no}
        boxInfo={{ boxes, setBoxes }}
        chance={{ isXChance, setIsXChance }}
        winner={winner}
      />
    );
  }

  const winposition = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ];

  function calulatewin() {
    for (let i = 0; i < winposition.length; i++) {
      if (
        boxes[winposition[i][0]] !== null &&
        boxes[winposition[i][0]] === boxes[winposition[i][1]] &&
        boxes[winposition[i][0]] === boxes[winposition[i][2]]
      ) {
        setWinner(boxes[winposition[i][0]]);
        
        return;
      }
    }
    if (!boxes.includes(null) && winner === null) {
      setWinner("Draw");
    }
  }

  function resetValue() {
    setWinner(null);
    setBoxes(Array(9).fill(null));
    setIsXChance(true);
  }

  useEffect(() => {
    calulatewin();
  }, [isXChance]);

  return (
   
  
    <View style={styles.container}>
     
      <StatusBar backgroundColor="orange" />
      <View style={styles.featureContainer}>
        <Text style={[styles.primaryText, styles.winnerText]}>
          {winner !== null ?
            (winner === "Draw" ? "It's a Draw" : `${winner} WON`) :
            `Chance: ${isXChance ? "X" : "O"}`}
        </Text>

      </View>
      <View style={styles.playborad}>
        <View style={styles.row}>
          {PlayBox(0)}
          {PlayBox(1)}
          {PlayBox(2)}
        </View>
        <View style={styles.row}>
          {PlayBox(3)}
          {PlayBox(4)}
          {PlayBox(5)}
        </View>
        <View style={styles.row}>
          {PlayBox(6)}
          {PlayBox(7)}
          {PlayBox(8)}
        </View>
      </View>
      <View style={styles.btn}>
        <Button title="Reset" onPress={resetValue} color="orange" />
      </View>
    </View>
     
  );
};

const styles = StyleSheet.create({
  btn: {
    paddingTop: 30,
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  playborad: {
    borderWidth: 10,
    borderRadius: 10,
    borderColor: 'orange'
  },
  row: {
    flexDirection: 'row',
  },
 
  featureContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    marginBottom: 20,
  },
  primaryText: {
    fontSize: 36,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  winnerText: {
    color: 'darkorange',
    fontSize: 48,
  }
});

export default App;
