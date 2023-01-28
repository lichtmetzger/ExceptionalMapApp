import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { LatLng, LeafletView } from 'react-native-leaflet-view';

export default function App() {
  return (
    <View style={styles.container}>
      <LeafletView
        // The rest of your props, see the list below
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
