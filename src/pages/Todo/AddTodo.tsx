import React from 'react'

function AddTodo() {
  return (
    <div className='border border-solid border-black rounded-2xl py-5 px-10 mb-10 justify-between flex' >
        <input type='text' placeholder='type a todo..' className=' focus-visible:outline-none' />
        <button className='border border-solid border-black w-7 h-7 rounded-full' >
            +
        </button>
    </div>
  )
}

export default AddTodo