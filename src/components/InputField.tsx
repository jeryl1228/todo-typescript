import React from 'react'
import '.././styles.css'

interface Props{
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

export const InputField = ({todo, setTodo, handleAdd}: Props) => {
  // todo, setTodo will have an error if not instantiate the type of variable due to TS
  // do {todo, setTodo}: Props

  return (

    <div>

        <form className='input' onSubmit={handleAdd}>
        <input type='input' placeholder="Enter a task" className='input_box'
        value={todo}
        onChange={(e)=>setTodo(e.target.value)}
        />
        <button className='input_submit' type='submit'>Go</button>
        </form>

    </div>
  )
}
