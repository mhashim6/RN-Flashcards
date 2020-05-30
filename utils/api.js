import { AsyncStorage } from 'react-native'

const DECK_KEY = 'flashcards:DECK_KEY'

export const loadDecks = () => AsyncStorage.getItem(DECK_KEY).then(JSON.parse)

export const newDeck = title => AsyncStorage.mergeItem(DECK_KEY, JSON.stringify({
    [title]: {
        title: title,
        questions: [],
    }
})).then(() => title)

export const addQuestion = (deckTitle, question) =>
    AsyncStorage.getItem(DECK_KEY)
        .then(JSON.parse).then(decks => AsyncStorage.mergeItem(DECK_KEY, JSON.stringify({
            [deckTitle]: { title: deckTitle, questions: [...decks[deckTitle].questions, question] }
        }))).then(() => { deckTitle, question })
