import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  const todos = await prisma?.todo.findMany();
  return NextResponse.json({todos});
}

export async function POST(request:NextRequest){
  const json = await request.json();
  const {task,done} = json;
  const todo = await prisma?.todo.create({data:{task,done}});
  console.log(JSON.stringify(request))

  return NextResponse.json({todo});
}

// export async function PATCH(request:NextRequest){
//   const json = await request.json();
//   const {id,task,done} = json;
//   const todo = await prisma?.todo.update({where:{id},data:{task,done}});
//   return NextResponse.json({todo});
// }

// export async function DELETE(request:NextRequest){
//   const json = await request.json();
//   //const {id} = json;
//   const todo = await prisma?.todo.delete({where:{id:68}});
//   return NextResponse.json({todo});
// }