import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { View, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import OSMap from './components/OSMap';
import TopMenu from './components/TopMenu';

export default function App() {
  return (
      <SafeAreaProvider>
        <StatusBar style="auto"></StatusBar>
        <SafeAreaView style={styles.container}>
          {/* Make sure topMenu stays below StatusBar */}
          <View style={styles.topMenuWrap}>
            <TopMenu />
          </View>
          <OSMap />
        </SafeAreaView>
      </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff'
  },
  topMenuWrap: {
    flex: 1
  }
});
