const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BoardSchema = new Schema({
    userId: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
        default: "default"
    },
    lists: {
        type: Array,
        required: true
    }
}, {timestamps: true});

module.exports = Board = mongoose.model(BoardSchema);
