// import React, {ReactNode} from 'react';
// import {Federated} from '@callstack/repack/client';
// import {
//   SafeAreaView,
//   TouchableOpacity,
//   StatusBar,
//   ScrollView,
//   View,
//   Text,
//   StyleSheet,
// } from 'react-native';
// import {Header} from 'react-native/Libraries/NewAppScreen';

// type SectionProps = {
//   children: ReactNode;
//   title: string;
// };

// function Section({children, title}: SectionProps) {
//   return (
//     <View style={styles.sectionContainer}>
//       <Text style={styles.sectionTitle}>{title}</Text>
//       <Text style={styles.sectionDescription}>{children}</Text>
//     </View>
//   );
// }

// function App(): React.JSX.Element {
//   const handleButtonPressShell = async () => {
//     const Shell = React.lazy(() => Federated.importModule('shell', './App'));
//     <Shell />;
//   };
//   const handleButtonPressHost = () => {
//     const Host = React.lazy(() => Federated.importModule('host', './App'));
//     <Host />;
//   };
//   return (
//     <SafeAreaView style={styles.container}>
//       <Header />
//       <StatusBar barStyle="dark-content" />
//       <ScrollView contentInsetAdjustmentBehavior="automatic">
//         <View style={styles.contentContainer}>
//           <Section title="Host">
//             <Text>Host</Text>
//           </Section>
//           <TouchableOpacity
//             onPress={handleButtonPressShell}
//             style={styles.buttonTouchable}>
//             <Text style={styles.buttonTouchableText}>Shell</Text>
//           </TouchableOpacity>
//           <TouchableOpacity
//             onPress={handleButtonPressHost}
//             style={styles.buttonTouchable}>
//             <Text style={styles.buttonTouchableText}>Host</Text>
//           </TouchableOpacity>
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//     // <SafeAreaView>
//     //   <TouchableOpacity onPress={() => handleButtonPressShell()}>
//     //     <Shell />
//     //   </TouchableOpacity>
//     //   <TouchableOpacity onPress={() => handleButtonPressHost()}>
//     //     <Host />
//     //   </TouchableOpacity>
//     // </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   contentContainer: {
//     flex: 1,
//     rowGap: 24,
//     paddingHorizontal: 24,
//     paddingVertical: 32,
//   },
//   sectionContainer: {
//     marginTop: 32,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//     marginBottom: 8,
//   },
//   sectionDescription: {
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
//   button: {
//     flex: 1,
//     rowGap: 16,
//     marginTop: 12,
//   },
//   buttonTouchable: {
//     flex: 1,
//     backgroundColor: '#ffc600',
//     borderRadius: 4,
//     paddingVertical: 16,
//     paddingHorizontal: 24,
//     textAlign: 'center',
//   },
//   buttonTouchableText: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     alignSelf: 'center',
//     textTransform: 'uppercase',
//   },
// });

// export default App;

/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState, ReactNode} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
} from 'react-native';
import {Header} from 'react-native/Libraries/NewAppScreen';

import {Federated} from '@callstack/repack/client';

const Host = React.lazy(() => Federated.importModule('host', './App'));
const Shell = React.lazy(() => Federated.importModule('shell', './App'));

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

function App(): JSX.Element {
  const [visibleApp, setVisibleApp] = useState<string>('');

  const renderRelevantApp = () => {
    switch (visibleApp) {
      case 'host':
        return (
          <View style={styles.miniAppWrapper}>
            <React.Suspense fallback={<Text>Loading app1...</Text>}>
              <Host />
            </React.Suspense>
          </View>
        );
      case 'shell':
        return (
          <View style={styles.miniAppWrapper}>
            <React.Suspense fallback={<Text>Loading app2...</Text>}>
              <Shell />
            </React.Suspense>
          </View>
        );
      default:
        return (
          <SafeAreaView style={styles.container}>
            <Header />
            <StatusBar />
            <View style={styles.contentContainer}>
              <Section title="Host">
                <Text>Host</Text>
              </Section>
              <TouchableOpacity
                onPress={() => setVisibleApp('host')}
                style={styles.buttonTouchable}>
                <Text style={styles.buttonTouchableText}>Host</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setVisibleApp('shell')}
                style={styles.buttonTouchable}>
                <Text style={styles.buttonTouchableText}>Shell</Text>
              </TouchableOpacity>
            </View>
          </SafeAreaView>
        );
    }
  };

  const renderBackToHome = () => {
    if (visibleApp) {
      return (
        <View style={styles.backWrapper}>
          <Button title="<- Back To Home" onPress={() => setVisibleApp('')} />
        </View>
      );
    }
  };

  return (
    <View>
      {renderBackToHome()}
      {renderRelevantApp()}
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    height: '100%',
    justifyContent: 'center',
  },
  miniAppWrapper: {
    // flex:1,
  },
  backWrapper: {
    backgroundColor: '#E1F8DC',
    marginTop: 50,
  },
  container: {
    flex: 1,
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
  contentContainer: {
    flex: 1,
    rowGap: 24,
    paddingHorizontal: 24,
    paddingVertical: 32,
  },
  buttonTouchable: {
    flex: 1,
    backgroundColor: '#ffc600',
    borderRadius: 4,
    paddingVertical: 16,
    paddingHorizontal: 24,
    textAlign: 'center',
  },
  buttonTouchableText: {
    fontSize: 18,
    color: '#000',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
});

export default App;
