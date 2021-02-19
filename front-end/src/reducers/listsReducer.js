import axios from "axios";
import { ADD_CARD, ADD_LIST, DELETE_CARD, DELETE_COLUMN, DRAG_HAPPENED, EDIT_CARD_TEXT, EDIT_CARD_TITLE, EDIT_COLUMN_NAME } from "../actions/types";
let listID = 5;
let cardID = 5;
const initialState = [
    {
        title: "To Do",
        id: `list-${0}`,
        cards: [
            {
                id: `card-${0}`,
                title: "Welcome Card",
                text: "This is your first task! Drag it to the doing category to get started!"
            }
        ]
    },
    {
        title: "Doing",
        id: `list-${1}`,
        cards: []
    },
    {
        title: "Done",
        id: `list-${2}`,
        cards: []
    }
]

const listsReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_LIST: {
            console.log("action working")
            const newList = {
                title: action.payload,
                cards: [],
                id: `list-${listID}`
            }
            listID += 1;
            
            return [...state, newList ]
        }
        case ADD_CARD: {
            const newCard = {
                title: action.payload.title,
                text: action.payload.text,
                id: cardID
            }
            cardID += 1;

            const newState = state.map(list => {
                if(list.id === action.payload.listID) {
                    return { ...list, cards: [...list.cards, newCard]}
                } else {
                    return list;
                }
            })
            return newState;
        }
        case DRAG_HAPPENED: {
            const { droppableIdStart,
                droppableIdEnd,
                droppableIndexStart,
                droppableIndexEnd,
                draggableId,
                type } = action.payload;

            const newState = [...state];

            //dragging lists around
            if (type === "list") {
                const list = newState.splice(droppableIndexStart, 1);
                newState.splice(droppableIndexEnd, 0, ...list);
                return newState;
            }
            
            // drag n drop happens in the same list
            if(droppableIdStart === droppableIdEnd) {
                const list = state.find(list => droppableIdStart === list.id);
                const card = list.cards.splice(droppableIndexStart, 1);
                list.cards.splice(droppableIndexEnd, 0, ...card);
            }

            // drag n drop into different list
            if (droppableIdStart !== droppableIdEnd) {
                // find list where drag started
                const listStart = state.find(list => droppableIdStart === list.id);

                //pull out card from list
                const card = listStart.cards.splice(droppableIndexStart, 1);

                //find list where the drag ended
                const listEnd = state.find(list => droppableIdEnd === list.id)

                //put card in new list
                listEnd.cards.splice(droppableIndexEnd, 0, ...card)
            }

            return newState;
        }
        
        case DELETE_CARD: {
            //destructre payload
            const { listID, cardIndex } = action.payload;
            
            //copy state
            const newState = [...state];

            //find the list the card belongs too
            const list = newState.find( list => list.id === listID)

            //splice the card from the list
            list.cards.splice(cardIndex,1)

            return newState;
        }

        case DELETE_COLUMN: {
            //destructuring payload
            const { listID, index } = action.payload;

            const newState = [...state];

            newState.splice(index,1);
            return newState;


        }
        
        case EDIT_COLUMN_NAME: {
            //destructure payload
            const { listID, title } = action.payload;
            
            //copy state
            const newState = [...state];
            
            const list = newState.find(list => list.id === listID);

            list.title = title;
            return newState;
        }

        case EDIT_CARD_TITLE: {
            //destructure
            const { listID, cardIndex, newTitle } = action.payload;

            //copy state
            const newState = [...state];

            const list = newState.find(list => list.id === listID);

            const card = list.cards[cardIndex];
            card.title = newTitle;

            return newState;
        }

        case EDIT_CARD_TEXT: {
            //DESTRUCTURE FOR THE 40000 TIME
            const { listID, cardIndex, newText} = action.payload;

            //copy state again...
            const newState = [...state];

            const list = newState.find(list => list.id === listID);

            const card = list.cards[cardIndex];

            card.text = newText;

            return newState;
        }
        default:
            return state;
    }
}
export default listsReducer;


// //thunk actions
// const saveList = () => (dispatch, getState) => {
//     const board = getState().lists;
//     axios
//       .post("")
//       .then(res => )
//       .catch(err => console.error(err));
// }