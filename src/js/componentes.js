const divTodolist = document.querySelector('.todo-list');


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


