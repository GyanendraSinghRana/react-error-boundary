import React, { useState } from 'react'

type Props = {
  onAddTodo: Function
}

function AddTodo({ onAddTodo }: Props) {
  const [task, setTask] = useState<string>("");

  const handleAddTodo = () => {
    onAddTodo({
      id: new Date().valueOf(),
      completed: false,
      task
    });

    setTask("");
  }

  return (
    <div className='border border-solid border-black rounded-2xl py-5 px-10 mb-10 justify-between flex' >
        <input type='text' placeholder='type a todo..' className=' focus-visible:outline-none flex-grow' value={task} onChange={(e) => setTask(e.target.value)}/>
        <button className='border border-solid border-black w-7 h-7 rounded-full ml-2' onClick={handleAddTodo}>
            +
        </button>
    </div>
  )
}

export default AddTodo