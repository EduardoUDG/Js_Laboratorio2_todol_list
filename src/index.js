import './style.css';

import { crearTodoHtml } from './js/componentes.js'
import { Todo, TodoList } from './classes'

export const todoList = new TodoList();

const tarea = new Todo('Aprender Javascript');
todoList.nuevoTodo( tarea );

crearTodoHtml( tarea );
