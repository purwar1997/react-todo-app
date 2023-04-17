import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Form, FormGroup, Input, InputGroup, Button } from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function TodoForm({ todos, setTodos }) {
  const [todo, setTodo] = useState('');

  const addTodo = event => {
    event.preventDefault();

    if (todo === '') {
      return toast.error('Please provide some value');
    }

    const newTodo = {
      id: uuidv4(),
      task: todo,
      markedAsComplete: false,
    };

    setTodos([...todos, newTodo]);
    setTodo('');
  };

  return (
    <>
      <Form className="mt-5" onSubmit={addTodo}>
        <FormGroup>
          <InputGroup>
            <Input
              type="text"
              name="todo"
              placeholder="Your next todo"
              value={todo}
              onChange={e => setTodo(e.target.value)}
            />
            <Button color="success">Add Todo</Button>
          </InputGroup>
        </FormGroup>
      </Form>
      <ToastContainer
        position="bottom-center"
        autoClose={1500}
        hideProgressBar={true}
        theme="dark"
      />
    </>
  );
}
