import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Text, View, StyleSheet } from 'react-native'
import FlashyButton from './FlashyButton'
import FlashyStyles from './shared/flashyStyles'
import { TouchableOpacity } from 'react-native-gesture-handler'

const Quiz = ({ deck, navigation }) => {
    const questions = deck.questions
    const [index, setIndex] = useState(0)
    const [showAnswer, setShowAnswer] = useState(false) //man! I really wanted to use `useReducer` :-(
    const toggleShowAnswer = () => setShowAnswer(!showAnswer)

    const [score, updateScore] = useState(0)
    const correctAnswer = () => {
        updateScore(score + 1)
        setIndex(index + 1)
    }
    const incorrectAnswer = () => {
        setIndex(index + 1)
    }

    const retake = () => {
        updateScore(0)
        setIndex(0)
    }

    const question = questions[index]

    return (
        <View style={styles.container}>
            {(index === questions.length) ?
                (<View>
                    <Text style={styles.score}>You scored {score}/{questions.length}</Text>
                    <FlashyButton onPress={retake}>Retake</FlashyButton>
                    <FlashyButton onPress={() => navigation.goBack()}>Go back</FlashyButton>
                </View>
                ) : (<View>
                    <Text style={styles.index}>Question {index}/{questions.length}</Text>
                    <TouchableOpacity onPress={toggleShowAnswer}>
                        <Text style={styles.card}>
                            {showAnswer ? question.answer : question.question}
                        </Text>
                    </TouchableOpacity>
                    <FlashyButton onPress={correctAnswer}>Correct</FlashyButton>
                    <FlashyButton onPress={incorrectAnswer}>Incorrect</FlashyButton>
                </View>
                )}
        </View >)
}

const styles = StyleSheet.create({
    container: {
        padding: 8,
    },
    index: {
        textAlign: 'center',
        fontSize: 30,
    },
    card: {
        fontSize: 50,
        height: 300,
        backgroundColor: 'white',
        textAlign: 'center',
        ...FlashyStyles.roundedBorder,
    },
    score: {
        textAlign: 'center',
        fontSize: 40,
    },
})

const mapStateToProps = (state, { route }) => ({
    deck: route.params.deck,
})

export default connect(mapStateToProps)(Quiz)