import { TodoTable } from "@/components/TodoTable";
import { TodoAddForm } from "@/components/TodoAddForm";
import { remove, edit, add, findMany } from "./server actions/todo";

export default async function Home(){
    const todos =  await findMany();
    if(!todos)return <>not todos were found!</>;

    return <>
        <div style={{display:"flex",flex:"column"}}>
            <TodoAddForm action={add}/>
            <TodoTable todos={todos} actionEditTodo={edit} actionDeleteTodo={remove} />
        </div>
    </>
}