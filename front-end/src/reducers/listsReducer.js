import { ADD_CARD, ADD_LIST, DELETE_CARD, DRAG_HAPPENED } from "../actions/types";
let listID = 2;
let cardID = 5;
const initialState = [
    {
        title: "Last Episode",
        id: `list-${0}`,
        cards: [
            {
                id: `card-${0}`,
                title: "Finish test",
                text: "We created a static list shit"
            },
            {
                id: `card-${1}`,
                title: "Run Errands",
                text: "Ashland is obsessed with reeces asjdf;laksjdf asdf;lkjasd f;lkjasd f;lksajdfl;k"
            }
        ]
    },
    {
        title: "Next Episode",
        id: `list-${1}`,
        cards: [
            {
                id: `card-${2}`,
                title: "finisdaslkdfj",
                text: "We created a static list shit"
            },
            {
                id: `card-${3}`,
                title: "Finish Homework",
                text: "What a bad ass"
            },
            {
                id: `card-${4}`,
                title: "WTF BOI",
                text: "What a bad ass"
            }
        ]
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


        default:
            return state;
    }
}
export default listsReducer;