/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import BarcodeScanner from './components/BarcodeScanner';


function App(): JSX.Element {
  const [useBarcodeScanner,setUseBarcodeScanner] = React.useState(false);
  const toggleBarcodeScanner = () => {
    setUseBarcodeScanner(!useBarcodeScanner);
  }
  return (
    <SafeAreaView>
      {!useBarcodeScanner &&(
        <BarcodeScanner></BarcodeScanner>
      )}
      <button onClick={toggleBarcodeScanner}>Scan Barcodes</button>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
