
import './style.css';
import { saludar } from './js/componentes.js'

import { Todo, TodoList } from './classes'

const todoList = new TodoList();

const tarea = new Todo('Aprender Javascript');
console.log( tarea );

todoList.nuevoTodo( tarea );
console.log( todoList );
