import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions, SafeAreaView, TouchableOpacity } from 'react-native';
import React, {useState} from 'react';

const windowWidth = Dimensions.get('window').width;

export default function App() {

  const [answerValue, setAnswerValue] = useState(0);
  const [readyToReplace, setReadyToReplace] = useState(true);
  const [memoryValue, setMemoryValue] = useState(0);
  const [operatorValue, setOperatorValue] = useState(0);
  const [Mathequation, setMathEquation] = useState('');

  const [fontSize, setFontSize] = useState(80);

  const buttonPressed = (value) => {
    if (answerValue.length >= 8) {
      setFontSize(30);
    }
    else {
      setFontSize(50);
    }

    if(operatorValue != 0) {
      handleNumber(value);
      setMemoryValue(calculateEquals());
    }

    if(!isNaN(value) || value === '.') {
      if (value !== '.' || answerValue !== '.') {
        setReadyToReplace(false);
      }
      handleNumber(value);
      setMathEquation(Mathequation + value);
    }
    else if(value == "C") {
      setAnswerValue(0);
      setMemoryValue(0);
      setOperatorValue(0);
      setMathEquation('');
      setReadyToReplace(true);
      // setAnswerValue(value == "C" ? String(answerValue) : String(0));
      // setMemoryValue(value == "C" ? memoryValue : String(0));
      // setOperatorValue(value == "C" ? operatorValue : String(0));
      // setReadyToReplace(value == "C" ? readyToReplace : 'true');
    }
    else if(value == "+" || value == "-" || value == "x" || value == "/" || value == "+/-" || value == "%" || value == "^2" || value == "^3" || value == "√" || value == "3√") {
      setMemoryValue(answerValue);
      setReadyToReplace(true);
      setOperatorValue(value);
      if(value != "+/-") {
        setMathEquation(Mathequation + value);
      }
      else if(answerValue == 0 && value == "+/-") {
        setMathEquation("-");
      }
    }
    else if(value == "=") {
      handleNumber();
      calculateEquals();
      setMemoryValue(0);
      setMathEquation(Mathequation + value);
      setReadyToReplace(true);
    }
  }

  const handleNumber = (value) => {
    //when resultsField = 0, set answerValue to replace resultsField
    //else, set answerValue to append resultsField
    if(readyToReplace) {
      setAnswerValue(value);
      setReadyToReplace(false);
      // setAnswerValue(readyToReplace == true ? String(answerValue) : String(value));
      // setReadyToReplace(readyToReplace == true ? readyToReplace : 'false');
    }
    else {
      setAnswerValue("" + answerValue + value);
      setMathEquation(Mathequation + value);
      // setAnswerValue(readyToReplace == false ? String(answerValue) : String(answerValue) + String(value));
    }
  }

  const calculateEquals = () => {
    var previous;
    var current;

    previous = parseFloat(memoryValue);
    current = parseFloat(answerValue);

    if(operatorValue == "+") {
      setAnswerValue(previous + current);
    }
    if(operatorValue == "-") {
      setAnswerValue(previous - current);
    }
    if(operatorValue == "x") {
      setAnswerValue(previous * current);
    }
    if(operatorValue == "/") {
      setAnswerValue(previous / current);
    }
    if(operatorValue == "+/-") {
      if(current == 0) {
        setMathEquation("-" + current);
      }
      //if positive, make neg
      if(Math.sign(current) == 1) {
        setAnswerValue(-current);
      }
      //else if neg, set positive
      else if(Math.sign(current) == -1) {
        setAnswerValue(current*-1);
      }
    }
    if(operatorValue == "%") {
      setAnswerValue(current*0.01);
    }
    if(operatorValue == "π") {
      setAnswerValue(Math.pi);
    }
    if(operatorValue == "^2") {
      setAnswerValue(current*current);
    }
    if(operatorValue == "^3") {
      setAnswerValue(current*current*current);
    }
    if(operatorValue == "√") {
      setAnswerValue(Math.sqrt(current));
    }
    if(operatorValue == "3√") {
      setAnswerValue(Math.cbrt(current));
    }

    return answerValue;
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
          <Text style={styles.equationField}> {Mathequation} </Text>
          <Text style={[styles.resultsField, {fontSize: fontSize}]}> {answerValue} </Text>

          <View style={styles.row}>
            <TouchableOpacity style={[styles.buttonContainer, styles.rowOperations]}
                              onPress={()=>buttonPressed("C")}>
              <Text style={[styles.button, {color: "black"}]}>C</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.buttonContainer, styles.rowOperations]}
                              onPress={()=>buttonPressed("+/-")}>
              <Text style={[styles.button, {color: "black"}]}>+/-</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.buttonContainer, styles.rowOperations]}
                              onPress={()=>buttonPressed("%")}>
              <Text style={[styles.button, {color: "black"}]}>%</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.buttonContainer, styles.columnOperations]}
                              onPress={()=>buttonPressed("/")}>
              <Text style={styles.button}>/</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.row}>
            <TouchableOpacity style={styles.buttonContainer} onPress={()=>buttonPressed("^2")}>
                <View style={styles.subscript}>
                    <Text style={styles.button}>x</Text>
                    <Text style={styles.button, styles.subscriptText}>2</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonContainer} onPress={()=>buttonPressed("^3")}>
              <View style={styles.subscript}>
                  <Text style={styles.button}>x</Text>
                  <Text style={styles.button, styles.subscriptText}>3</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonContainer} onPress={()=>buttonPressed("√")}>
              <View style={styles.subscript}>
                  <Text style={styles.button, styles.subscriptText}>2</Text>
                  <Text style={styles.button}>√</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonContainer} onPress={()=>buttonPressed("3√")}>
              <View style={styles.subscript}>
                  <Text style={styles.button, styles.subscriptText}>3</Text>
                  <Text style={styles.button}>√</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.row}>
            <TouchableOpacity style={styles.buttonContainer} onPress={()=>buttonPressed(7)}>
              <Text style={styles.button}>7</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonContainer} onPress={()=>buttonPressed(8)}>
              <Text style={styles.button}>8</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonContainer} onPress={()=>buttonPressed(9)}>
              <Text style={styles.button}>9</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonContainer} onPress={()=>buttonPressed("x")}>
              <Text style={styles.button}>x</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.row}>
            <TouchableOpacity style={styles.buttonContainer} onPress={()=>buttonPressed(4)}>
              <Text style={styles.button}>4</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonContainer} onPress={()=>buttonPressed(5)}>
              <Text style={styles.button}>5</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonContainer} onPress={()=>buttonPressed(6)}>
              <Text style={styles.button}>6</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonContainer} onPress={()=>buttonPressed("-")}>
              <Text style={styles.button}>-</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.row}>
            <TouchableOpacity style={styles.buttonContainer} onPress={()=>buttonPressed(1)}>
              <Text style={styles.button}>1</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonContainer} onPress={()=>buttonPressed(2)}>
              <Text style={styles.button}>2</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonContainer} onPress={()=>buttonPressed(3)}>
              <Text style={styles.button}>3</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonContainer} onPress={()=>buttonPressed("+")}>
              <Text style={styles.button}>+</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.row}>
            <TouchableOpacity style={[styles.buttonContainer, styles.longbuttonContainer]}
                              onPress={()=>buttonPressed(0)}>
              <Text style={styles.button}>0</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonContainer} onPress={()=>buttonPressed(".")}>
              <Text style={styles.button}>.</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonContainer} onPress={()=>buttonPressed("=")}>
              <Text style={styles.button}>=</Text>
            </TouchableOpacity>
          </View>

          <StatusBar style="auto" barStyle="light-content"/>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  equationField: {
    color: "white",
    textAlign: 'right',
    marginRight: 25,
    marginBottom: 50,
    fontSize: 30,
  },
  resultsField: {
    color: "white",
    textAlign: 'right',
    marginRight: 25,
    marginBottom: 5,
    fontSize: 50,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "dimgray",
    width: (windowWidth-8*5) / 4,
    height: (windowWidth-8*5) / 4,
    borderRadius: (windowWidth-8*5) / 4,
    margin: 5,
  },
  longbuttonContainer:{
    width: ((windowWidth-8*5)/4)*2 + 2*5,
    paddingRight: ((windowWidth-8*5)/4 + 2*5),
  },
  button: {
    fontSize: 30,
    color: "white",
    textAlign: 'center',
  },
  subscript: {
    flexDirection: 'row',
    alignItems: 'flex-start'
  },
  subscriptText: {
    fontSize: 15,
    color: "white",
  },
  rowOperations: {
    backgroundColor: "silver",
  },
  columnOperations: {
    backgroundColor: "dodgerblue",
  },
});
