// React comp
import Header from "./components/Header";
import TodoList from "./components/TodoList";
// react-bootstrap comp.
import Container from "react-bootstrap/Container";
// useState hook.
import { useEffect, useState } from "react";

const App = () => {
    const [todos, setTodos] = useState(
        JSON.parse(localStorage.getItem("todos") || [])
    );
    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    return (
        <Container>
            <Header setTodos={setTodos} todos={todos} />
            <TodoList todos={todos} setTodos={setTodos} />
        </Container>
    );
};

export default App;
