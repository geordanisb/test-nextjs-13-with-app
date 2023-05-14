"use client"
import { Todo } from "@prisma/client"
import { FC } from "react"
import { Button, Card } from "react-bootstrap"

interface Props{
    todo:Todo
}
export const TodoMosaic:FC<Props> =({todo})=>{
    return <Card style={{ width: '18rem' }}>
    <Card.Body>
      <Card.Title>{todo.task}</Card.Title>
      <Card.Text>
        {todo.done ? "Completed" : "Not completed"}
      </Card.Text>
      <Button variant={`/Todo/edit/${todo.id}`}>Edit</Button>
    </Card.Body>
  </Card>
}