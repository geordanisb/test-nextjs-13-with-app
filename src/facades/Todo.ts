import { Todo } from "@prisma/client";
import { revalidatePath } from "next/cache";
import {prisma} from '../lib/prisma';

export const findMany = (async ():Promise<Todo[]>=>{
    return prisma.todo.findMany();
});
export const add = async (task:string,done?:boolean):Promise<Todo>=>{
    return prisma.todo.create({data:{task,... done && {done}}}).finally(()=>{
        revalidatePath('/')
    });
}
export const edit = async (id:number,task:string,done?:boolean):Promise<Todo>=>{
    return prisma.todo.update({where:{id},data:{task,... done!=undefined && {done}}}).finally(()=>{
        revalidatePath('/');
    });
}
export const remove = async (id:number):Promise<Todo>=>{
    return prisma.todo.delete({where:{id}}).finally(()=>{
        revalidatePath('/');
    });
}