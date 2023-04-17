import { ListGroup, ListGroupItem, Input } from 'reactstrap';
import InfoTip from '../Layout/InfoTip';
import Icon from '../Layout/Icon';

export default function Todos({ todos, setTodos, markedTodos, setMarkedTodos }) {
  const editTodo = todoId => {
    let newTodo = prompt('Enter a new todo');

    if (!newTodo) {
      newTodo = prompt('Please provide some value');
    }

    const newTodos = todos.map(todo => {
      if (todo.id === todoId) {
        return { ...todo, task: newTodo };
      } else {
        return todo;
      }
    });

    setTodos(newTodos);
  };

  const deleteTodo = todoId => setTodos(todos.filter(todo => todo.id !== todoId));

  const markTodo = todo => {
    const markedTodo = { ...todo, markedAsComplete: true };
    setTodos(todos.filter(todo => todo.id !== markedTodo.id));
    setMarkedTodos([markedTodo, ...markedTodos]);
  };

  return (
    <ListGroup className="mt-4">
      {todos.map(todo => (
        <>
          <ListGroupItem key={todo.id}>
            <Input
              type="checkbox"
              role="button"
              id="mark"
              checked={todo.markedAsComplete}
              onChange={() => markTodo(todo)}
            />
            <span className="ms-3">{todo.task}</span>
            <div className="float-end d-flex gap-3">
              <Icon type="edit" onClick={() => editTodo(todo.id)} />
              <Icon type="delete" onClick={() => deleteTodo(todo.id)} />
            </div>
          </ListGroupItem>
          <InfoTip title="Mark as complete" target="mark" />
        </>
      ))}
    </ListGroup>
  );
}
