/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import Router from './router';
import store from './store';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Router />
      </Provider>
    </NavigationContainer>
  );
}

//  const isDarkMode = useColorScheme() === 'dark';
//
//  const backgroundStyle = {
//    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
//  };
//

//<SafeAreaView style={backgroundStyle}>
//	<StatusBar
//		barStyle={isDarkMode ? 'light-content' : 'dark-content'}
//		backgroundColor={backgroundStyle.backgroundColor}
//	/>
//	<ScrollView
//		contentInsetAdjustmentBehavior="automatic"
//		style={backgroundStyle}>
//		<Header />
//		<View
//			style={{
//				backgroundColor: isDarkMode ? Colors.black : Colors.white,
//			}}
//		/>
//	</ScrollView>
//</SafeAreaView>

//const styles = StyleSheet.create({
//  sectionContainer: {
//    marginTop: 32,
//    paddingHorizontal: 24,
//  },
//  sectionTitle: {
//    fontSize: 24,
//    fontWeight: '600',
//  },
//  sectionDescription: {
//    marginTop: 8,
//    fontSize: 18,
//    fontWeight: '400',
//  },
//  highlight: {
//    fontWeight: '700',
//  },
//});

//type SectionProps = PropsWithChildren<{
//  title: string;
//}>;
//
//function Section({children, title}: SectionProps): JSX.Element {
//  const isDarkMode = useColorScheme() === 'dark';
//  return (
//    <View style={styles.sectionContainer}>
//      <Text
//        style={[
//          styles.sectionTitle,
//          {
//            color: isDarkMode ? Colors.white : Colors.black,
//          },
//        ]}>
//        {title}
//      </Text>
//      <Text
//        style={[
//          styles.sectionDescription,
//          {
//            color: isDarkMode ? Colors.light : Colors.dark,
//          },
//        ]}>
//        {children}
//      </Text>
//    </View>
//  );
//}

export default App;
