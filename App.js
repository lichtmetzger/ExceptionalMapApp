import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { LatLng, LeafletView } from 'react-native-leaflet-view';
import Poi from './assets/poi.json';

const DEFAULT_COORDINATE = {
  lat: "53.59171",
  lng: "12.08928",
};

const DEFAULT_ZOOMLEVEL = 12;

const parsedMarkers = Poi.map((item, i) => (
  {
    ["position"]: item.details.coordinates,
    //["icon"]: item.details.icon,
    ["icon"]: '📍',
    ["size"]: [32, 32],
    ["title"]: item.title.rendered,
    ["id"]: i,
    ["excerpt"]: item.details.excerpt,
  }
));

export default function App() {
  return (
    <View style={styles.container}>
      <LeafletView
        mapMarkers={parsedMarkers}
        mapCenterPosition={DEFAULT_COORDINATE}
        zoom={DEFAULT_ZOOMLEVEL}
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
