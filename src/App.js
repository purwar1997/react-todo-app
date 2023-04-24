import { useState, useEffect } from 'react';
import { Container } from 'reactstrap';
import Heading from './components/Layout/Heading';
import SubHeading from './components/Layout/SubHeading';
import TodoForm from './components/Forms/TodoForm';
import Todos from './components/Lists/Todos';
import MarkedTodos from './components/Lists/MarkedTodos';

export default function App() {
  const [todos, setTodos] = useState([]);
  const [markedTodos, setMarkedTodos] = useState([]);

  useEffect(() => {
    const localTodos = localStorage.getItem('todos');

    if (localTodos) {
      setTodos(JSON.parse(localTodos));
    }

    const localMarkedTodos = localStorage.getItem('markedTodos');

    if (localMarkedTodos) {
      setMarkedTodos(JSON.parse(localMarkedTodos));
    }
  });

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    localStorage.setItem('markedTodos', JSON.stringify(markedTodos));
  }, [markedTodos]);

  return (
    <Container>
      <Heading title="Todo App" />
      <TodoForm todos={todos} setTodos={setTodos} />
      {todos.length > 0 && <SubHeading title="All Todos" />}
      <Todos
        todos={todos}
        setTodos={setTodos}
        markedTodos={markedTodos}
        setMarkedTodos={setMarkedTodos}
      />
      {markedTodos.length > 0 && <SubHeading title="Todos Completed" />}
      <MarkedTodos
        todos={todos}
        setTodos={setTodos}
        markedTodos={markedTodos}
        setMarkedTodos={setMarkedTodos}
      />
    </Container>
  );
}
