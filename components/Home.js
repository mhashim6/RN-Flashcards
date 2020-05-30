import React from 'react'
import { Platform } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Ionicons } from '@expo/vector-icons'

import NewDeck from './NewDeck'
import DeckList from './DeckList'
import Tabs from './Tabs'


const Home = () => {
    return (
        <Tabs.Navigator initialRouteName='Decks'
            tabBarOptions={{
                activeTintColor: Platform.OS === 'ios' ? '#562349' : 'white',
                style: {
                    backgroundColor: Platform.OS === 'ios' ? 'white' : '#562349'
                }
            }}
            activeColor="white" //android
            inactiveColor="darkgrey"//android
            barStyle={{ backgroundColor: '#562349' }} //android
        >
            <Tabs.Screen
                name="Decks"
                component={DeckList}
                options={() => ({
                    title: 'Decks',
                    tabBarIcon: ({ color }) => <MaterialCommunityIcons name="cards-outline" size={24} color={color} />
                })}
            />
            <Tabs.Screen
                name="NewDeck"
                options={() => ({
                    title: 'Create new deck',
                    tabBarIcon: ({ color }) => Platform.select({
                        ios: <Ionicons name="ios-create" size={24} color={color} />,
                        android: <Ionicons name="md-create" size={24} color={color} />
                    })
                })}
                component={NewDeck}
            />
        </Tabs.Navigator >
    );
}

export default Home