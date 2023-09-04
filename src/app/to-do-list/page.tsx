'use client';

import { RootState } from '@/redux/store';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add, remove } from '@/redux/features/todos/todosSlice';

interface Props {
  item: {
    title: string;
    content: string;
  };
  index: number;
  onRemove: (index: number) => void;
}

function TodoItem({ item, index, onRemove }: Props) {
  return (
    <li key={index}>
      <h1 className="text-xl">Title: {item.title}</h1>
      <p>Index: {index}</p>
      <p>Content: {item.content}</p>
      <button className="border p-2 rounded-xl" onClick={() => onRemove(index)}>
        Remove
      </button>
    </li>
  );
}

export default function Page() {
  const todos = useSelector((state: RootState) => state.todos);
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleAddTodo = () => {
    if (title && content) {
      dispatch(add({ title, content }));
      setTitle('');
      setContent('');
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1>To Do List</h1>
      <ul>
        {todos.map((item, index) => (
          <TodoItem
            key={index}
            item={item}
            index={index}
            onRemove={index => dispatch(remove(index))}
          />
        ))}
      </ul>
      <form
        onSubmit={e => {
          e.preventDefault();
          handleAddTodo();
        }}
      >
        <input
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder="Title"
        />
        <input
          value={content}
          onChange={e => setContent(e.target.value)}
          placeholder="Content"
        />
        <button type="submit">Submit</button>
      </form>
    </main>
  );
}
