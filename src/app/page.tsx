import {  addTodo, getTodos, updateTodo,deleteTodo } from "@/facades/Todo";
import { TodoTable } from "@/components/TodoTable";
import { TodoAddForm } from "@/components/TodoAddForm";
import { Todo } from "@prisma/client";

export default async function Home(){
    const todos =  await getTodos();
    if(!todos)return <>not todos were found!</>;
    
    //Server Actions
    const addTaskHandler = async function(form:FormData){
        "use server"
        const task = form.get("task")?.toString()??"";
        const d = form.get("done")?.toString()=="on"?true:false;
        const todo = await addTodo(task,d as boolean);
        //console.log(todo);
    }
    const actionEditTodo = async (todo:Todo)=>{
        "use server"
        const t = await updateTodo(todo.id,todo.task,todo.done);
        //console.log(t);
    }
    const actionDeleteTodo = async (todo:Todo)=>{
        "use server"
        const t = await deleteTodo(todo.id);
        //console.log(t);
    }

    return <>
        <div style={{display:"flex",flex:"column"}}>
            <TodoAddForm action={addTaskHandler}/>
            <TodoTable todos={todos} actionEditTodo={actionEditTodo} actionDeleteTodo={actionDeleteTodo} />
        </div>
    </>
}