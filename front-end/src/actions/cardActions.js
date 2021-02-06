import { ADD_CARD } from "./types";

export const addCard = (listID,text) => {
    return {
        type: ADD_CARD,
        payload: {text, listID}
    }
}