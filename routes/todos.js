const express = require('express');

const { index, addTodo, deleteTodo } = require('../controllers/todos');

const router = express.Router();

router.route('/')
    .get(index)
    .post(addTodo)
    .delete(deleteTodo)

module.exports = router;