import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'

const DeckItem = ({ deck, navigation }) => (
    <TouchableOpacity onPress={() => { navigation.push('DeckDetail', { deck: deck }) }}>
        <View style={styles.container}>
            <Text style={styles.title}>
                {deck.title}
            </Text>
            <Text style={styles.count}>
                {deck.questions.length} questions
            </Text>
        </View>
    </TouchableOpacity>
)

const styles = StyleSheet.create({
    container: {
        height: 50,
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 8,
        flexWrap: 'wrap',
    },
    title: {
        fontSize: 22,
        color: '#562349'
    },
    count: {
        fontSize: 18,
        color: '#ad6989',
    }
})


export default DeckItem