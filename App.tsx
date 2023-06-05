/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import BarcodeScanner from './components/BarcodeScanner';


function App(): JSX.Element {
  const [useBarcodeScanner,setUseBarcodeScanner] = React.useState(false);
  const toggleBarcodeScanner = () => {
    console.log(useBarcodeScanner);
    setUseBarcodeScanner(!useBarcodeScanner);
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={{alignItems:"center"}}>
        <Text style={styles.title}>
          Dynamsoft Barcode Reader Demo
        </Text>
        {!useBarcodeScanner &&(
          <BarcodeScanner></BarcodeScanner>
        )}
        <Button
          title="Scan Barcodes"
          onPress={() => toggleBarcodeScanner()}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
  },
  title:{
    textAlign: 'center',
    marginVertical: 8,
  }
});

export default App;
