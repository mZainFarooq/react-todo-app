import { useState } from "react";

export const TodoApp = () => {
    const [todo, settodo] = useState<string>('');
    const [todoList, settodoList] = useState<string[]>([]);
  
    const handleAddTodo = () => {
      if (todo.trim() !== '') {
        settodoList([...todoList , todo]);
        settodo('');
      }
    };
  
    const handleDeleteTodo = (index:any) => {
      const newList = [...todoList];
      newList.splice(index, 1);
      settodoList(newList);
    };
  
    const handleEditTodo = (index:any) => {
      const editedTodo = prompt('Edit the todo:', todoList[index]);
      if (editedTodo !== null) {
        const newList = [...todoList];
        newList[index] = editedTodo;
        settodoList(newList);
      }
    };
  
    return (
      <div>
        <h1>To Do App</h1>
        <input
          type="text"
          value={todo}
          onChange={(e) => settodo(e.target.value)}
        />
        <button onClick={handleAddTodo}>Add</button>
        <div>
          {todoList.map((todo, index) => (
            <p key={index}>
              {todo}
              <button onClick={() => handleDeleteTodo(index)}>Delete</button>
              <button onClick={() => handleEditTodo(index)}>Edit</button>
            </p>
          ))}
        </div>
      </div>
    );
  };
  