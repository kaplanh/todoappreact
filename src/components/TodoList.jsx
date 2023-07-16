import { ListGroup } from "react-bootstrap";

const TodoList = ({ todos, setTodos }) => {
    const checkedTodo = (id) => {
        const newTodos = todos.map((todo) =>
            todo.id == id ? { ...todo, completed: !todo.completed } : todo
        );
        setTodos(newTodos);
    };

    const deleteTodo = (id) => {
        // asagidaki gibi sekilde disrda bir degisken atayip filter layip set in icinede atabiliriz
        // const newTodos = todos.filter(todo => todo.id != id)
        // setTodos(newTodos)
        setTodos(todos.filter((todo) => todo.id != id));
    };

    return (
        <div style={{ height: "71vh" }}>
            <h2 className="text-center text-success mb-3">Todos</h2>
            {/* todos bosalirsa resim gözüksün */}
            {todos.length < 1 && (
                <img
                    className="mx-auto rounded-4"
                    src="./img/todo.jpg"
                    width="100%"
                    height="90%"
                />
            )}
            <ListGroup className="w-75 mx-auto">
                {todos.map((todo) => (
                    <ListGroup.Item
                        className="m-2 text-capitalize rounded-3 d-flex justify-content-between "
                        action
                        variant="success"
                    >
                        <svg
                            onClick={() => checkedTodo(todo.id)}
                            role="button"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="currentColor"
                            class="bi bi-check2-circle"
                            viewBox="0 0 16 16"
                        >
                            <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />
                            <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />
                        </svg>
                        <span 
                            className={
                                todo.completed
                                    ? "completed"
                                    : "text-decoration-none"
                            }
                        >
                            {todo.task}
                        </span>
                        <svg
                            role="button"
                            onClick={() => deleteTodo(todo.id)}
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="red"
                            className="bi bi-trash3-fill"
                            viewBox="0 0 16 16"
                        >
                            <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z" />
                        </svg>
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </div>
    );
};

export default TodoList;
