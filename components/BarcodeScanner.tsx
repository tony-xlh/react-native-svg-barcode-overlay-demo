import { BarcodeResult, DCVBarcodeReader, DCVCameraView } from "dynamsoft-capture-vision-react-native";
import React from "react";
import { StyleSheet } from "react-native";

interface props {
  onScanned?: (result:BarcodeResult[]) => void;
}

const  BarcodeScanner: React.FC<props> = (props: props) => {
  const reader = React.useRef<DCVBarcodeReader|null>();
  const scanner = React.useRef<DCVCameraView|null>();
  React.useEffect(() => {
    (async () => {
      console.log("mounted");
      console.log(scanner);
      try {
        await DCVBarcodeReader.initLicense("DLS2eyJvcmdhbml6YXRpb25JRCI6IjIwMDAwMSJ9");
      } catch (e) {
        console.log(e);
      }
      // Create a barcode reader instance.
      reader.current = await DCVBarcodeReader.createInstance();
      // Add a result listener. The result listener will handle callback when barcode result is returned. 
      reader.current.addResultListener((results) => {
          // Update the newly detected barcode results to the state.
          console.log(results);
      });
      // Enable video barcode scanning.
      // If the camera is opened, the barcode reader will start the barcode decoding thread when you triggered the startScanning.
      // The barcode reader will scan the barcodes continuously before you trigger stopScanning.
      reader.current.startScanning();
      return async () => { //umount
        console.log("unmounted");
        if (reader.current) {
          // Stop the barcode decoding thread when your component is unmount.
          await reader.current.stopScanning();
          // Remove the result listener when your component is unmount.
          reader.current.removeAllResultListeners();
        }
    };
    })();
  }, []);
  return (
     <DCVCameraView
      style={{flex: 1}}
      overlayVisible={false}
      ref = {(ref)=>{scanner.current = ref}}
    >
    </DCVCameraView>
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

export default BarcodeScanner;