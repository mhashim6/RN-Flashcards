import 'react-native-gesture-handler'
import React, { useEffect } from 'react'
import { StyleSheet, SafeAreaView, AsyncStorage } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import decksReducer from './deck-state/reducer'
import middleware from './deck-state/middleware'

import DeckDetail from './components/DeckDetail'
import Home from './components/Home'
import { loadStoredDecks } from './deck-state/actions'
import NewQuestion from './components/NewQuestion'
import Quiz from './components/Quiz'
import { notifyTomorrow } from './utils/notifications'


const store = createStore(decksReducer, middleware)
const Stack = createStackNavigator()

const App = () => {
  useEffect(() => {
    store.dispatch(loadStoredDecks())
    notifyTomorrow()
  })
  return (<Provider store={store}>
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen name="Home" options={{ title: 'Flashcards' }} component={Home} />
          <Stack.Screen name="DeckDetail" options={({ route }) => ({ title: route.params.deck.title })} component={DeckDetail} />
          <Stack.Screen name="NewQuestion" options={({ route }) => ({ title: route.params.deck.title })} component={NewQuestion} />
          <Stack.Screen name="Quiz" options={({ route }) => ({ title: route.params.deck.title })} component={Quiz} />
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  </Provider>)
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});

export default App
