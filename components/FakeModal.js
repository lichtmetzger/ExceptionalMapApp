import { StyleSheet, View } from 'react-native';

const FakeModal = ({ children }) => {
  return (
    <View style={styles.modal}>
      {children}
    </View>
  );
};

export default FakeModal;

const styles = StyleSheet.create({
  modal: {
    backgroundColor: '#ffffff',
    padding: 20,
    height: 500,
    width: '100%',
    marginTop: 58,
    zIndex: 9999
  }
});