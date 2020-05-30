import { loadDecks, newDeck, addQuestion } from "../utils/api"

export const LOAD_STORED_DECKS = 'LOAD_STORED_DECKS'
export const CREATE_DECK = 'CREATE_DECK'
export const ADD_QUESTION_TO_DECK = 'ADD_QUESTION_TO_DECK'

export const loadStoredDecks = () => dispatch =>
    loadDecks().then(decks => dispatch({
        type: LOAD_STORED_DECKS,
        decks,
    }))

export const createDeck = deckTitle => dispatch =>
    newDeck(deckTitle).then(() => {
        return dispatch({
            type: CREATE_DECK,
            deckTitle: deckTitle,
        })
    })

export const addQuestionToDeck = (deckTitle, question) => dispatch =>
    addQuestion(deckTitle, question)
        .then(() => dispatch({
            type: ADD_QUESTION_TO_DECK,
            deckTitle: deckTitle,
            question: question,
        }))