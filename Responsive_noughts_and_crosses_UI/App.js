import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Tic-Tac-Toe</Text>
        </View>

        <View style={styles.piecesContainer}>
          <View style={[styles.box, {borderTopWidth: 0, borderLeftWidth: 0}]}>
            <Text style={[styles.pieces, styles.Opieces]}>O</Text>
          </View>
          <View style={[styles.box, {borderTopWidth: 0}]}>
            <Text style={[styles.pieces, styles.Opieces]}>O</Text>
          </View>
          <View style={[styles.box, {borderTopWidth: 0, borderRightWidth: 0}]}>
            <Text style={[styles.pieces, styles.Xpieces]}>X</Text>
          </View>
          <View style={[styles.box, {borderLeftWidth: 0}]}>
            <Text style={[styles.pieces, styles.Xpieces]}>X</Text>
          </View>
          <View style={styles.box}>
            <Text style={[styles.pieces, styles.Opieces]}>O</Text>
          </View>
          <View style={[styles.box, {borderRightWidth: 0}]}>
            <Text style={[styles.pieces, styles.Opieces]}>O</Text>
          </View>
          <View style={[styles.box, {borderBottomWidth: 0, borderLeftWidth: 0}]}>
            <Text style={[styles.pieces, styles.Xpieces]}>X</Text>
          </View>
          <View style={[styles.box, {borderBottomWidth: 0}]}>
            <Text style={[styles.pieces, styles.Xpieces]}>X</Text>
          </View>
          <View style={[styles.box, {borderBottomWidth: 0, borderRightWidth: 0}]}>
            <Text style={[styles.pieces, styles.Opieces]}>O</Text>
          </View>
        </View>
      </SafeAreaView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ebf4ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleContainer: {
    top: '-30%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    position: 'absolute',
    fontSize: 40,
    fontWeight: 'bold',
    textDecorationLine: 'underline'
  },
  piecesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#d9eaff',
    borderWidth: 3,
    borderRadius: 30,
    borderColor: '#fff',
    marginLeft: '10%',
    marginRight: '10%',
    shadowColor: "#8a8a8a",
    shadowOffset: {
      width: 20,
      height: 20,
    },
    shadowOpacity: 0.7,
    shadowRadius: 20,
  },
  box: {
    width: '33%',
    paddingTop: '6%',
    paddingBottom: '6%',
    borderWidth: 3,
    alignItems: 'center',
    justifyContent: 'center'
  },
  pieces: {
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  Xpieces: {
    color: '#ff69bb'
  },
  Opieces: {
    color: '#cc54ff'
  }
});
