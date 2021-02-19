const express = require("express");
const router = express.Router();


//bring in user model
const User = require("../../models/User");

router.post("/add-list", (req,res) => {
    const newList = {
        listId: req.body.listId,
        title: req.body.title,
        cards: []
    };
    User.findOne({ _id : req.body.userId }).then(user => {
        user.lists.push(newList);
        user.save()
        .then(res.sendStatus(200))
        .catch(err => console.log(err));
    })
})

router.delete("/delete-list", (req,res) => {
    User.findOne({ _id : req.body.userId }).then(user => {
        const listIndex = user.lists.findIndex(list => list.listId === req.body.listId);
        user.lists.splice(listIndex, 1);
        user.save()
        .then(res.sendStatus(200))
        .catch(err => console.log(err));
    })
})

router.post("/add-card", (req,res) => {
    const lists = req.body.lists;

    User.findOne({ _id : req.body.userId }).then(user => {
        const newList = user.lists;
        user.lists = lists;
        user.save()
        .then(res.sendStatus(200))
        .catch(err => console.log(err));
    })
})

module.exports = router;