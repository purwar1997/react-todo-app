import { ListGroup, ListGroupItem, Input } from 'reactstrap';
import InfoTip from '../Layout/InfoTip';
import Icon from '../Layout/Icon';

export default function MarkedTodos({ todos, setTodos, markedTodos, setMarkedTodos }) {
  const deleteMarkedTodo = todoId => setMarkedTodos(markedTodos.filter(todo => todo.id !== todoId));

  const unmarkTodo = todo => {
    const unmarkedTodo = { ...todo, markedAsComplete: false };
    setMarkedTodos(markedTodos.filter(todo => todo.id !== unmarkedTodo.id));
    setTodos([...todos, unmarkedTodo]);
  };

  return (
    <ListGroup className="mt-4">
      {markedTodos.map(todo => (
        <>
          <ListGroupItem key={todo.id}>
            <Input
              type="checkbox"
              role="button"
              id="unmark"
              checked={todo.markedAsComplete}
              onChange={() => unmarkTodo(todo)}
            />
            <span className="ms-3">{todo.task}</span>
            <div className="float-end d-flex gap-3">
              <Icon type="delete" onClick={() => deleteMarkedTodo(todo.id)} />
            </div>
          </ListGroupItem>
          <InfoTip title="Mark as incomplete" target="unmark" />
        </>
      ))}
    </ListGroup>
  );
}
