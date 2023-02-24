import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native';
import OSMap from './components/OSMap';

export default function App() {
  return (
      <SafeAreaView style={styles.container}>
        <OSMap />
      </SafeAreaView>
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
