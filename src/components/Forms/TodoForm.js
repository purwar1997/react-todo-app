import { Form, FormGroup, Input, InputGroup, Button } from 'reactstrap';

export default function TodoForm({ todo, setTodo, addTodo }) {
  return (
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
  );
}
