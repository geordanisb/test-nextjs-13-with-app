"use client"
import { FC, useRef } from "react"
import { Button, Form, FormCheckProps, FormControlProps } from "react-bootstrap"

interface Props{
    action:(form:FormData)=>void
}
export const TodoAddForm:FC<Props>=({action})=>{
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
        <Form.Group className="mb-3" controlId="task">
            <Form.Label>Task</Form.Label>
            <Form.Control ref={refTask} type="text" placeholder="Task" name="task" />
            <Form.Text className="text-muted">
                Enter the task title.
            </Form.Text>
        </Form.Group>

    <Form.Group className="mb-3" controlId="done">
        <Form.Check ref={refDone} type="checkbox" label="It is done?" name="done" />
    </Form.Group>

    <Button variant="primary" type="submit">
        Submit
    </Button>
</Form>
}