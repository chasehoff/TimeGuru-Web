import { ADD_CARD, DELETE_CARD, DELETE_COLUMN } from "./types";

export const addCard = (listID,text) => {
    return {
        type: ADD_CARD,
        payload: {text, listID}
    }
}
export const deleteCard = (listID, cardIndex) => {
    return {
        type: DELETE_CARD,
        payload: {listID, cardIndex}
    }
}
