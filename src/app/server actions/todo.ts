"use server"
import {  add as a, findMany as f, edit as e,remove as r} from "@/facades/Todo";
import { Todo } from "@prisma/client";

export const add = async function(form:FormData){
    const task = form.get("task")?.toString()??"";
    const d = form.get("done")?.toString()=="on"?true:false;
    return a(task,d as boolean);
}
export const edit = async (todo:Todo)=>{
    return e(todo.id,todo.task,todo.done);
}
export const remove = async (todo:Todo)=>{
    return r(todo.id);
}
export const findMany = async ()=>{
    return f();
}