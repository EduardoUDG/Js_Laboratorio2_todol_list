import './style.css';

import { crearTodoHtml } from './js/componentes.js'
import { Todo, TodoList } from './classes'

export const todoList = new TodoList();
// const newTodo = new Todo('Aprender JavaScript');
// todoList.nuevoTodo( newTodo );
// todoList.nuevoTodo( tarea );
todoList.todos[0].imprimirClase();
// crearTodoHtml( tarea );

console.log('todos', todoList.todos );
todoList.todos.forEach( crearTodoHtml );
