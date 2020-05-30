import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { connect } from 'react-redux'

import FlashyButton from './FlashyButton'

const DeckDetail = ({ deck, navigation }) => {

    const addQuestion = () => {
        navigation.push('NewQuestion', { deck: deck, })
    }
    const takeQuiz = () => {
        navigation.push('Quiz', { deck: deck, })

    }
    return (<View style={styles.container}>
        <View >
            <Text style={styles.title}>
                {deck.title}
            </Text>
            <Text style={styles.count}>
                {`${deck.questions ? deck.questions.length : 0} questions`}
            </Text>
        </View>

        <View style={styles.controls} >
            <FlashyButton onPress={addQuestion}>
                Add questions
                </FlashyButton>
            <FlashyButton disabled={deck.questions.length === 0}
                onPress={takeQuiz}>
                Take Quiz
        </FlashyButton>
        </View>
    </View>)
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 8,
        justifyContent: "space-between",
    },
    title: {
        fontSize: 40,
        fontWeight: 'bold',
        color: '#562349'
    },
    count: {
        fontSize: 18,
        paddingStart: 8,
        color: '#ad6989',
    }
})

const mapStateToProps = (state, { route }) => {
    const deck = state[route.params.deck.title]
    return ({
        deck,
    })
}

export default connect(mapStateToProps)(DeckDetail)