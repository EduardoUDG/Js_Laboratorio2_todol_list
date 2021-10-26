import { Todo } from '../classes';
import { todoList } from '../index'


const divTodolist   = document.querySelector('.todo-list');
const txtInput      = document.querySelector('.new-todo');
const btnBorrar     = document.querySelector('.clear-completed');

export const crearTodoHtml = ( todo ) => {

    const status    = (todo.completado) ? 'completed' : '';
    const checked   = (todo.completado) ? 'checked' : '';

    const htmlTodo = `
    <li class="${ status }" data-id="${ todo.id }">
            <div class="view">
                <input class="toggle" type="checkbox" ${ checked }>
                <label>${ todo.tarea }</label>
                <button class="destroy"></button>
            </div>
            <input class="edit" value="Create a TodoMVC template">
    </li>`;

    const div = document.createElement('div');
    div.innerHTML = htmlTodo;

    divTodolist.append( div.firstElementChild );
    return div.firstElementChild;
}


/*---------------------------------------*/
//* Eventos */
/*---------------------------------------*/

txtInput.addEventListener('keyup', (event)=> {
    
    if( event.code === "Enter" && txtInput.value.length > 0 ) {

        const nuevoTodo = new Todo( txtInput.value );
        todoList.nuevoTodo( nuevoTodo );

        // console.log(todoList);
        crearTodoHtml( nuevoTodo );
        txtInput.value = '';
    }
    
});


divTodolist.addEventListener('click', event => {
    
    const nombreElemento = event.target.localName; // label, input, button
    const todoElemento = event.target.parentElement.parentElement; // <li>
    const todoId = todoElemento.getAttribute('data-id'); // data-id="1236549894"

    if( nombreElemento.includes('input') ) { // click en check
        todoList.marcarCompletado( todoId );
        todoElemento.classList.toggle('completed');

    } else if( nombreElemento.includes('button') ) { // click en check
        todoList.eliminarTodo( todoId );
        divTodolist.removeChild( todoElemento );
    }
    
});


btnBorrar.addEventListener('click', () => {

    todoList.eliminarCompletados();

    for( let i = divTodolist.children.length-1; i >= 0; i--) {

        const elemento = divTodolist.children[i];

        if ( elemento.classList.contains('completed') ) {
            divTodolist.removeChild( elemento );
        }
    }
});