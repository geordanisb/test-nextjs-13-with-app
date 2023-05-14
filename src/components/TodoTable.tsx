"use client"
import { Todo } from '@prisma/client';
import { FC, useState } from 'react';
import { Button, ButtonGroup, Modal } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';

import {GiGearHammer} from "react-icons/gi";
import {BiEditAlt} from "react-icons/bi";
import {RiDeleteBin2Line} from "react-icons/ri";
import { TodoUpdateForm } from './TodoUpdateForm';

interface Props{
    todos:Todo[];
    actionEditTodo:(todo:Todo)=>Promise<void>;
    actionDeleteTodo:(todo:Todo)=>Promise<void>;
}

interface TodoModalProps{
  todo:Todo;
}


export const TodoTable:FC<Props> = ({todos,actionEditTodo,actionDeleteTodo}) => {
  const [show, setShow] = useState<Record<number,boolean>>({});

  const onEditHandler = async (todo:Todo)=>{
    setShow(prev=>({...prev,[`${todo.id}`]:true}));

  }
  const actionEditTodoHandler = async (form:FormData)=>{
    const id = form.get("id")?.toString()??"0";
    const task = form.get("task")?.toString()??"";
    const d = form.get("done")?.toString()=="on"?true:false;
    await actionEditTodo({id:+id,task,done:d});
    setShow(prev=>({...prev,[`${id}`]:false}));
  }
  const onDeleteHandler = async (todo:Todo)=>{
    const confirm = window.confirm(`Confirm removing Todo: ${todo.task}`);
    if(confirm)
      await actionDeleteTodo(todo);
  }

  const TodoModal:FC<TodoModalProps> = ({todo})=>{
    const handleClose = () => setShow(prev=>({...prev,[`${todo.id}`]:false}));
    const handleShow = () => setShow(prev=>({...prev,[`${todo.id}`]:true}));
    return (
      <>
        <Button variant="info" onClick={(e)=>onEditHandler(todo)}><BiEditAlt/></Button>
  
        <Modal show={show[todo.id]} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Todo</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <TodoUpdateForm todo={todo} action={actionEditTodoHandler} />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }

  return <>
    
    <Table bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Task</th>
          <th>It is done?</th>
          <th><GiGearHammer/></th>
        </tr>
      </thead>
      <tbody>
        {todos.map(todo=><tr key={todo.id}>
            <td>{todo.id}</td>
            <td>{todo.task}</td>
            <td>{todo.done?"Completed":"Not completed"}</td>
            <td>
              <ButtonGroup size="sm">
                <TodoModal todo={todo} />
                <Button variant='warning' onClick={(e)=>onDeleteHandler(todo)}><RiDeleteBin2Line/></Button>
              </ButtonGroup>
            </td>
        </tr>)}
      </tbody>
    </Table>
  </>;
}