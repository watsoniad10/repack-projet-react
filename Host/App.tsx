/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {ReactNode} from 'react';
// import {Federated} from '@callstack/repack/client';
import {NavigationContainer} from '@react-navigation/native';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Alert,
  TouchableOpacity,
} from 'react-native';

type SectionProps = {
  children: ReactNode;
  title: string;
};

function Section({children, title}: SectionProps) {
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <Text style={styles.sectionDescription}>{children}</Text>
    </View>
  );
}

function App(): React.JSX.Element {
  const handleButtonPressHome = () => {
    Alert.alert('Back home');
  };
  const handleButtonPressShell = () => {
    Alert.alert('Button SHELL pressed');
  };
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <View style={styles.contentContainer}>
            <Section title="Host">
              <Text>Host</Text>
            </Section>
            <TouchableOpacity
              onPress={handleButtonPressShell}
              style={styles.buttonTouchable}>
              <Text style={styles.buttonTouchableText}>Shell</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={handleButtonPressHome}
              style={styles.buttonTouchable}>
              <Text style={styles.buttonTouchableText}>Back home</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </NavigationContainer>
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
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 8,
  },
  sectionDescription: {
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  button: {
    flex: 1,
    rowGap: 16,
    marginTop: 12,
  },
  buttonTouchable: {
    flex: 1,
    backgroundColor: '#0fd600',
    borderRadius: 4,
    paddingVertical: 16,
    paddingHorizontal: 24,
    textAlign: 'center',
  },
  buttonTouchableText: {
    fontSize: 18,
    color: '#ffffff',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
});

export default App;
