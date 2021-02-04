import { ADD_CARD } from "../actions/types";
let listID = 3;
const initialState = [
    {
        title: "Last Episode",
        id: 0,
        cards: [
            {
                id: 0,
                text: "We created a static list shit"
            },
            {
                id: 1,
                text: "Ashland is obsessed with reeces asjdf;laksjdf asdf;lkjasd f;lkjasd f;lksajdfl;k"
            }
        ]
    },
    {
        title: "Next Episode",
        id: 0,
        cards: [
            {
                id: 0,
                text: "We created a static list shit"
            },
            {
                id: 1,
                text: "What a bad ass"
            },
            {
                id: 2,
                text: "What a bad ass"
            }
        ]
    }
]

const listsReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_CARD:
            const newList = {
                title: action.payload.title,
                cards: [],
                id: listID++
            }
            return [...state, newList]
        default:
            return state;
    }
}
export default listsReducer;