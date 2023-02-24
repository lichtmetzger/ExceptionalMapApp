import { LeafletView } from 'react-native-leaflet-view';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native';
import Poi from '../assets/poi.json';
import Icons from '../assets/icons.json';

function OSMap() {
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
          ["icon"]: Icons[item.details.icon],
          ["title"]: item.title.rendered,
          ["id"]: i,
          ["excerpt"]: item.details.excerpt,
        }
      ));

      return (
        <SafeAreaView style={styles}>
            <LeafletView
                mapMarkers={parsedMarkers}
                mapCenterPosition={DEFAULT_COORDINATE}
                zoom={DEFAULT_ZOOMLEVEL}
                mapLayers={MAP_LAYERS}/>
        </SafeAreaView>);
};

export default OSMap;

const styles = StyleSheet.create({
    width: "100%",
    height: "100%"
});