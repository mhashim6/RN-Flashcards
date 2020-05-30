import { LOAD_STORED_DECKS, ADD_QUESTION_TO_DECK, CREATE_DECK } from "./actions";

const decks = (state = {}, action) => {
    switch (action.type) {
        case LOAD_STORED_DECKS: {
            return action.decks || {}
        }
        case CREATE_DECK: {
            const { deckTitle } = action
            return {
                ...state,
                [deckTitle]: {
                    title: deckTitle,
                    questions: []
                }
            }
        }
        case ADD_QUESTION_TO_DECK: {
            const { deckTitle, question } = action
            const deck = state[deckTitle]
            return {
                ...state,
                [deckTitle]: {
                    ...deck,
                    questions: [...deck.questions, question]
                }
            }
        }
        default: return state
    }
}

export default decks