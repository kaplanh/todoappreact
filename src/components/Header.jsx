// react-bootstrap comps.
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
// usestate hook
import { useState } from "react";

// *uniq id icin uuid library sitesi ve kullanimi icin => *https://www.npmjs.com/package/uuid
import { v4 as uuidv4 } from "uuid";

const Header = ({ setTodos, todos }) => {
    const [task, setTask] = useState("");
    const addTodo = () => {
        const newTodo = {
            // id: new Date.getTime(),milisecond cinsinden uniq deger olusturur
            //uuid uniq bir deger olusturur⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
            id: uuidv4(),
            task: task,
            completed: false,
        };
        setTodos([...todos, newTodo]);
        setTask("");
    };

    const addTodoEnter = (e) => {
        e.keyCode === 13  && addTodo();
    };
    

   
    return (
        <div onKeyDown={addTodoEnter} >
            <h1 className="text-danger text-center m-5">Todo App</h1>
            <InputGroup className="w-50 mx-auto mb-4">
                <Form.Control
                    placeholder="Enter new todo..."
                    autoFocus
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    onChange={(e) => setTask(e.target.value)}
                    value={task}
                />
                <Button
                    onClick={addTodo}
                    variant="success"
                    id="button-addon2"
                    disabled={!task.trim()} //kullanicinin bos newTodo eklememesi icin buton'u disabled yaptik
                >
                    Add Todo
                </Button>
            </InputGroup>
        </div>
    );
};

export default Header;
