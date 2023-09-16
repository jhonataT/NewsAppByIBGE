import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationBar } from './src/components/NavigationBar';
import { HomeScreen } from './src/screens/Home';
import { FavoritesScreen } from './src/screens/Favorites';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NewsContextProvider } from './src/core/providers/news';

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64;

const Stack = createNativeStackNavigator();

export default function App() {
  return <SafeAreaProvider style={styles.container}>
    <NewsContextProvider>
      <NavigationContainer>
        <StatusBar style="auto" />
        <Stack.Navigator
          initialRouteName='Home'
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen
            name='Home'
            component={HomeScreen}
            options={{ contentStyle:{backgroundColor: "#ebf0f5"} }}
          />
          <Stack.Screen
            name='Favorites'
            component={FavoritesScreen}
            options={{ contentStyle:{backgroundColor: "#ebf0f5"} }}
          />
        </Stack.Navigator>
        <NavigationBar/>
      </NavigationContainer>
    </NewsContextProvider>
  </SafeAreaProvider>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ebf0f5",
    paddingVertical: statusBarHeight,
  },
});
