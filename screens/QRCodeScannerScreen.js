import { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';

function QRCodeScannerScreen() {
  const [hasPermission, setHasPermission] = useState(null);
  const [result, setResult] = useState('');

  useEffect(() => {
    async function checkPermissions() {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    }
    checkPermissions();
  }, []);

  const handleScan = (scanningResult) => {
    if (!scanningResult.cancelled) {
      const url = scanningResult.data;
      const match = url.match(/show=(\d+)/);
      const showParam = match ? match[1] : null;

      setResult('Die Einzigartigkeit ist: ' + showParam);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={{textAlign:'center',paddingBottom: 15}}>Scannen Sie den QR-Code der Sehenswürdigkeit</Text>
      {hasPermission === null ? (
        <Text style={styles.centerText}>Bitte um Kamera-Erlaubnis...</Text>
      ) : hasPermission === false ? (
        <Text style={styles.centerText}>Keine Kamera-Erlaubnis erteilt.</Text>
      ) : (
        <BarCodeScanner
          onBarCodeScanned={handleScan}
          barCodeTypes={'qr'}
          style={styles.cameraContainer}
        />
      )}
      {result ? (
        <View style={styles.bottomView}>
          <Text style={styles.resultText}>{result}</Text>
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  centerText: {
    flex: 1,
    fontSize: 18,
    paddingTop: 32,
    textAlign: 'center',
  },
  cameraContainer: {
    height: '90%',
  },
  bottomView: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 16,
    alignItems: 'center',
  },
  resultText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default QRCodeScannerScreen;