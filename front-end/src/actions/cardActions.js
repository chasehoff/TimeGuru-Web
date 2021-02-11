import { ADD_CARD, DELETE_CARD, EDIT_CARD_TITLE, EDIT_CARD_TEXT } from "./types";

export const addCard = (listID,title,text) => {
    return {
        type: ADD_CARD,
        payload: { listID,title,text }
    }
}
export const deleteCard = (listID, cardIndex) => {
    return {
        type: DELETE_CARD,
        payload: { listID, cardIndex }
    }
}
export const editCardTitle = (listID, cardIndex, newTitle) => {
    return {
        type: EDIT_CARD_TITLE,
        payload: { listID, cardIndex, newTitle }
    }
}
export const editCardText = (listID, cardIndex, newText) => {
    return {
        type: EDIT_CARD_TEXT,
        payload: { listID, cardIndex, newText }
    }
}
