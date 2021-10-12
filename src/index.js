import './style.css';

import { crearTodoHtml } from './js/componentes.js'
import { Todo, TodoList } from './classes'

const todoList = new TodoList();

const tarea = new Todo('Aprender Javascript');
todoList.nuevoTodo( tarea );
console.log( todoList );

crearTodoHtml( tarea );
