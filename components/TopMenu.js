import { StyleSheet, Text, View } from 'react-native';

function TopMenu() {
      return (
        <View style={styles.container}>
            <View style={styles.logoArea}>
              <Text>LOGO</Text>
            </View>
            <View style={styles.navArea}>
              <Text>Button</Text>
              <Text>Button</Text>
              <Text>Button</Text>
            </View>
        </View>);
};

export default TopMenu;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 999,
    backgroundColor: '#ffffff'
  },
  logoArea: {
    width: '66.6%',
    flexDirection: 'row',
    alignSelf: 'flex-start',
    padding: 20
  },
  navArea: {
    width: '33.3%',
    flexDirection: 'row',
    paddingTop: 20
  }
});