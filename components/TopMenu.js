import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import Icons from '../assets/icons.json';
import { SvgXml } from "react-native-svg";

function TopMenu() {
      return (
        <View style={styles.container}>
            <View style={styles.logoArea}>
              <Text>LOGO</Text>
            </View>
            <View style={styles.navArea}>
              <Pressable
                onPress={() => {console.log("CAMERA")}} style={styles.settingsIcon}>
                <SvgXml xml={Icons.camera} width="30px" height="30px"/>
              </Pressable>
              <Pressable
                onPress={() => {console.log("SEARCH")}} style={styles.settingsIcon}>
                <SvgXml xml={Icons.search} width="26px" height="26px"/>
              </Pressable>
              <Pressable
                onPress={() => {console.log("SETTINGS")}} style={styles.settingsIcon}>
                <SvgXml xml={Icons.settings} width="27px" height="27px"/>
              </Pressable>
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
    justifyContent: 'center',
    alignItems: 'center'
  },
  settingsIcon: {
    padding: 7,
  }
});