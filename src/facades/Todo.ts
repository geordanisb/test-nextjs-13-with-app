import { Todo } from "@prisma/client";
import { revalidateTag } from "next/cache";

const api_url = `${process.env.NEXT_PUBLIC_API_BASE}/Todo`;

export const getTodos = async ():Promise<Todo[]>=>{
    return fetch(api_url,{
        next:{
            tags:['TODOS'],
        },
    }).then(res=>res.json()).then(json=>json.todos);
};
export const addTodo = async (task:string,done?:boolean):Promise<Todo>=>{
    return fetch(api_url,{
        cache:"no-store",
        method:"POST",
        body:JSON.stringify({task,done}),
    }).then(res=>res.json()).then(json=>{
        try{
            revalidateTag('TODOS');
        }
        catch(e){
            console.error((e as Error));
        }
        return json.todo
    });
};
export const updateTodo = async (id:number,task:string,done?:boolean):Promise<Todo>=>{
    return fetch(`${api_url}/${id}`,{
        cache:"no-store",
        method:"PATCH",
        body:JSON.stringify({task,done}),
    }).then(res=>res.json()).then(json=>{
        try{
            revalidateTag('TODOS');
        }
        catch(e){
            console.error((e as Error));
        }
        return json.todo
    });
};
export const deleteTodo = async (id:number):Promise<Todo>=>{
    return fetch(`${api_url}/${id}`,{
        cache:"no-store",
        method:"DELETE",
    }).then(res=>res.json()).then(json=>{
        try{
            revalidateTag('TODOS');
        }
        catch(e){
            console.error((e as Error));
        }
        return json.todo
    });
};
