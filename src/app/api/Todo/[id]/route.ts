import { prisma } from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

interface Props {
  params:{id:number}
}
export async function PATCH(req:NextRequest,props:Props){
  const {id}= props.params;
  if(id){
    const json = await req.json();
    const {task,done} = json;
    const todo = await prisma?.todo.update({where:{id:+id},data:{task,done}});
    return NextResponse.json({todo});
  }
  return NextResponse.json({error:'missing id param'});
}

export async function DELETE(req: NextRequest,props:Props){
  const {id}= props.params;
  if(id){
    const todo = await prisma?.todo.delete({where:{id:+id}});
    return NextResponse.json({todo});
  }
  return NextResponse.json({error:'missing id param'});
}