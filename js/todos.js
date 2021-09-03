const todosForm=document.querySelector(".todos-form");
const todosInput=document.querySelector(".todos-input");
const todoList=document.querySelector(".todos-list")
const TODOS_KEY="key"
let todos=[];
let savedTodos=JSON.parse(localStorage.getItem("TODOS_KEY"));


if(savedTodos!==null){
    savedTodos.forEach(todo=>{
        createList(todo);
    })
}

todosForm.addEventListener("submit", handleTodos);

function handleTodos(e){
    e.preventDefault();
    const newTodo={id:String(Date.now()), todo:todosInput.value}
    console.log(newTodo)
    todosInput.value="";
    if(newTodo.todo!==null){
        
        createList(newTodo)
        localStorage.setItem("TODOS_KEY",JSON.stringify(todos))
    }
    
}

function createList(newTodo){
        todos.push(newTodo)
        const li=document.createElement("li");
        li.id=newTodo.id;
        const span=document.createElement("span");
        span.innerText=newTodo.todo;
        li.appendChild(span)
        const button=document.createElement("button")
        button.innerText="❌"
        button.addEventListener("click",removeTodo)
        li.appendChild(button)
        todoList.appendChild(li)
}

function removeTodo(e){
    const li=e.target.parentElement;
    li.remove();
    todos=todos.filter(todo=>todo.id!==li.id)
    localStorage.setItem("TODOS_KEY",JSON.stringify(todos))
}