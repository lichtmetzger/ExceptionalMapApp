import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { LatLng, LeafletView } from 'react-native-leaflet-view';
import Poi from './assets/poi.json';

const DEFAULT_COORDINATE = {
  lat: "53.59171",
  lng: "12.08928",
};

const DEFAULT_ZOOMLEVEL = 12;

const MAP_LAYERS = [
  {
    //url: 'https://tile.qbus.io/{z}/{x}/{y}.png',
    url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    attribution: 'Daten von <a href="https://www.openstreetmap.org/">OpenStreetMap</a> - Veröffentlicht unter <a href="https://opendatacommons.org/licenses/odbl/">ODbL</a>'
  }
];

const parsedMarkers = Poi.map((item, i) => (
  {
    ["position"]: {
      ["lat"]: item.details.coordinates.lat,
      ["lng"]: item.details.coordinates.long 
    },
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
        mapLayers={MAP_LAYERS}
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
