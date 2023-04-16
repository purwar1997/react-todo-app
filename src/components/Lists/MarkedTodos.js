import { ListGroup, ListGroupItem, Input } from 'reactstrap';
import InfoTip from '../Layout/InfoTip';
import Icon from '../Layout/Icon';

export default function MarkedTodos({ todos, deleteTodo, markOrUnmarkTodo }) {
  return (
    <ListGroup className="mt-4">
      {todos.map(
        todo =>
          todo.markedAsComplete && (
            <>
              <ListGroupItem key={todo.id}>
                <Input
                  type="checkbox"
                  role="button"
                  id="unmark"
                  checked={todo.markedAsComplete}
                  onChange={() => markOrUnmarkTodo(todo.id)}
                />
                <span className="ms-3">{todo.task}</span>
                <div className="float-end d-flex gap-3">
                  <Icon type="delete" onClick={() => deleteTodo(todo.id)} />
                </div>
              </ListGroupItem>
              <InfoTip title="Mark as incomplete" target="unmark" />
            </>
          )
      )}
    </ListGroup>
  );
}
