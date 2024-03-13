/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
// import {Federated} from '@callstack/repack/client';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import {Header} from 'react-native/Libraries/NewAppScreen';

function HomeScreen(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Header />
        <View style={styles.contentContainer}>
          <Text>Home host</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    rowGap: 24,
    paddingHorizontal: 24,
    paddingVertical: 32,
  },
  sectionContainer: {
    marginTop: 32,
  },
});

export default HomeScreen;
