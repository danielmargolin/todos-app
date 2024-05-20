import express from 'express';

import { index, createTodo, deleteTodoById } from '../controllers/todos.controller.js'

const router = express.Router();

router.route('/')
    .get(index)
    .post(createTodo)
    .delete(deleteTodoById)

export default router;