import { ADD_LIST } from "../actions/types";
import { DRAG_HAPPENED } from "../actions/types";
import { DELETE_COLUMN } from "../actions/types";
import { EDIT_COLUMN_NAME } from "../actions/types";

export const addList = (title) => {
    return {
        type: ADD_LIST,
        payload: title
    };
};

export const sort = (droppableIdStart,
    droppableIdEnd,
    droppableIndexStart,
    droppableIndexEnd,
    draggableId,
    type) => {
        return {
            type: DRAG_HAPPENED,
            payload: {
                droppableIdStart,
                droppableIdEnd,
                droppableIndexStart,
                droppableIndexEnd,
                draggableId,
                type
            }
        }
};
export const deleteColumn = (listID, index) => {
    return {
        type: DELETE_COLUMN,
        payload: {listID, index}
    }
}
export const editColumnName = (listID, index, title) => {
    return {
        type: EDIT_COLUMN_NAME,
        payload: {listID, index, title}
    }
}