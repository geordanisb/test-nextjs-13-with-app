"use client"
import { Todo } from "@prisma/client";
import { FC, useRef } from "react"
import { Button, Form, FormCheckProps, FormControlProps } from "react-bootstrap"

interface Props{
    todo:Todo;
    action:(form:FormData)=>void
}
export const TodoUpdateForm:FC<Props>=({todo,action})=>{
    const refTask = useRef(null);
    const refDone = useRef(null);

    const onSubmit = (form:FormData)=>{
        action(form);
        var taskinput = refTask.current! as FormControlProps;
        taskinput.value = "";
        var doneinput = refDone.current! as FormCheckProps;
        doneinput.checked = false;
    }
    return <Form action={onSubmit}>
        <Form.Group controlId="id" hidden={true}>
            <Form.Control type="text" name="id" defaultValue={todo.id} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="task">
            <Form.Label>Task</Form.Label>
            <Form.Control ref={refTask} type="text" placeholder="Task" name="task" defaultValue={todo.task} />
            <Form.Text className="text-muted">
                Enter the task title.
            </Form.Text>
        </Form.Group>

    <Form.Group className="mb-3" controlId="done">
        <Form.Check ref={refDone} type="checkbox" label="It is done?" name="done" defaultChecked={todo.done} />
    </Form.Group>

    <Button variant="primary" type="submit">
        Submit
    </Button>
</Form>
}