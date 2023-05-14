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
