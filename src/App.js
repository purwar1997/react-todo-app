import { v4 as uuidv4 } from 'uuid';
import { useState, useEffect } from 'react';
import Heading from './components/Layout/Heading';
import SubHeading from './components/Layout/SubHeading';
import TodoForm from './components/Forms/TodoForm';
import Todos from './components/Lists/Todos';
import MarkedTodos from './components/Lists/MarkedTodos';
import { Container } from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState('');

  useEffect(() => {
    const localTodos = localStorage.getItem('todos');

    if (localTodos) {
      setTodos(JSON.parse(localTodos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

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

  const editTodo = todoId => {
    let newTodo = prompt('Enter a new todo');

    if (!newTodo) {
      newTodo = prompt('Please provide some value');
    }

    const todoList = [...todos];
    const todo = todoList.find(todo => todo.id === todoId);
    const todoIndex = todoList.findIndex(todo => todo.id === todoId);
    todoList.splice(todoIndex, 1, { ...todo, task: newTodo });

    setTodos(todoList);
  };

  const deleteTodo = todoId => setTodos(todos.filter(todo => todo.id !== todoId));

  const markOrUnmarkTodo = todoId => {
    const todoList = [...todos];
    const todo = todoList.find(todo => todo.id === todoId);
    const todoIndex = todoList.findIndex(todo => todo.id === todoId);
    todoList.splice(todoIndex, 1, { ...todo, markedAsComplete: !todo.markedAsComplete });

    setTodos(todoList);
  };

  return (
    <>
      <Container>
        <Heading title="Todo App" />
        <TodoForm todo={todo} setTodo={setTodo} addTodo={addTodo} />
        {todos.some(todo => !todo.markedAsComplete) ? <SubHeading title="All Todos" /> : ''}
        <Todos
          todos={todos}
          editTodo={editTodo}
          deleteTodo={deleteTodo}
          markOrUnmarkTodo={markOrUnmarkTodo}
        />
        {todos.some(todo => todo.markedAsComplete) ? <SubHeading title="Todos Completed" /> : ''}
        <MarkedTodos todos={todos} deleteTodo={deleteTodo} markOrUnmarkTodo={markOrUnmarkTodo} />
      </Container>
      <ToastContainer
        position="bottom-center"
        autoClose={1500}
        hideProgressBar={true}
        theme="dark"
      />
    </>
  );
}
