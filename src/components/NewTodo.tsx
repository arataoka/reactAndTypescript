import React, { useRef } from 'react';
import './NewTodo.css';

interface NewTodoProps {
  onAddTodo: (todoText: string) => void;
}

const NewTodo: React.FC<NewTodoProps> = (props) => {
  const textInputRef = useRef<HTMLInputElement>(null);
  const todoSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    const enteredText = textInputRef.current!.value;
    props.onAddTodo(enteredText);
  };
  return (
    <form>
      <div className="form-control">
        <label htmlFor="todo-text">Todoの内容</label>
        <input type="text" id="todo-text" ref={textInputRef} />
      </div>
      <button type="submit" onClick={todoSubmitHandler}>
        追加
      </button>
    </form>
  );
};

export default NewTodo;
