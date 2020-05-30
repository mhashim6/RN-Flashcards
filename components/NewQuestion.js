import React, { useState } from 'react'
import { TextInput, View, StyleSheet } from 'react-native'
import FlashyButton from './FlashyButton'
import FlashyStyles from './shared/flashyStyles'
import { connect } from 'react-redux'
import { addQuestionToDeck } from '../deck-state/actions'


const NewQuestion = ({ deck, navigation, dispatch }) => {
    const [question, setQuestion] = useState('')
    const [answer, setAnswer] = useState('')
    const isBlankQuestion = (question === '' || question === null) || (answer === '' || answer === null)
    const reset = () => {
        setQuestion('')
        setAnswer('')
    }
    const save = () => {
        dispatch(addQuestionToDeck(deck.title, { question: question, answer: answer }))
            .then(reset)
            .then(() => navigation.goBack())
    }

    return (
        <View style={styles.container}>
            <TextInput
                style={[FlashyStyles.textInput, FlashyStyles.roundedBorder, {marginBottom: 8}]}
                value={question}
                onChangeText={setQuestion}
                placeholder='Type the question here…' />
            <TextInput
                style={[FlashyStyles.textInput, FlashyStyles.roundedBorder]}
                value={answer}
                onChangeText={setAnswer}
                placeholder='Type the answer here…' />
            <FlashyButton onPress={save} disabled={isBlankQuestion} >
                Add Question
            </FlashyButton>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center'
    },

})

const mapStateToProps = (state, { route }) => ({
    deck: route.params.deck
})

export default connect(mapStateToProps)(NewQuestion)