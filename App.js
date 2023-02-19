import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { LatLng, LeafletView } from 'react-native-leaflet-view';

const DEFAULT_COORDINATE = {
  lat: 53.59171,
  lng: 12.08928,
};

export default function App() {
  return (
    <View style={styles.container}>
      <LeafletView
        mapMarkers={[
          {
            position: DEFAULT_COORDINATE,
            icon: '📍',
            size: [32, 32],
          },
        ]}
        mapCenterPosition={DEFAULT_COORDINATE}
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
