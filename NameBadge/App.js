import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';
import * as ScreenOrientation from 'expo-screen-orientation';

export default function App() {
  ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE_LEFT);
  return (
    <View style={styles.container}>
      <Image style={styles.imageOverlay} source={require('./assets/background.png')}/>
      <SafeAreaView style={styles.safeViewContainer}>
        <View style={styles.leftContainer}>
          <View style={styles.introContainer}>
            <Text style={styles.welcomeText}>👋🏻Hello</Text>
            <Text style={styles.subtitleText}>my name is...</Text>
          </View>
        </View>
        <View style={styles.rightContainer}>
          <View style={styles.nameContainer}>
            <Text style={styles.nameText}>WanQian{"\n"}🇸🇬👩🏻‍💻💕</Text>
          </View>
          <StatusBar style="auto" />
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'salmon',
    alignItems: 'center',
    justifyContent: 'center'
  },
  imageOverlay: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    opacity: 0.3
  },
  safeViewContainer: {
    flex:1,
    flexDirection: 'row',
    width:"100%",
    height:"100%"
  },
  leftContainer: {
    flex: 1
  },
  rightContainer: {
    flex: 0.8
  },
  introContainer: {
    marginTop: 'auto',
    marginBottom: 'auto'
  },
  welcomeText: {
    fontSize: 80,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginBottom: '3%',
    fontFamily: "Copperplate"
  },
  subtitleText: {
    fontSize: 30,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    fontFamily: "Copperplate"
  },
  nameContainer: {
    marginTop: 'auto',
    marginBottom: 'auto',
    backgroundColor: "rgba(255,255,255,0.7)",
    borderRadius: 15,
    justifyContent: "center",
    padding: 40
  },
  nameText: {
    fontSize: 60,
    fontFamily: "Courier New",
    textAlign: "center",
    fontWeight: "bold",
    color: "rgba(250,128,114,1)"
  }
});
