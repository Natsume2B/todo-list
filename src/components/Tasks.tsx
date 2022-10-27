import { PlusCircle } from 'phosphor-react'
import { Trash } from "phosphor-react"

import { useState } from 'react'


export function NewTask() {

  const [newTaskText, setNewTaskText] = useState("");
  const [tasks, setTasks] = useState([])
  const [taskCount, setTaskCount] = useState(0);

  const isNewTaskValid = newTaskText.length === 0

  function handleNewTaskChange() {
    setNewTaskText(event.target.value)
  }

  function handleCreateNewTask() {
    event.preventDefault()

    setTasks([...tasks, newTaskText])
    setNewTaskText('')
    setTaskCount(taskCount + 1)
  }

  function handleNewInvalidTask(){
    event.target.setCustomValidity('Você precisa digitar algo!')
  }

  return (
    <div>
      <form onSubmit={handleCreateNewTask} className='flex justify-center mx-auto mt-[-1.8rem] gap-2 mb-16' >
        <input
          type="text"
          placeholder='Adicione uma nova tarefa'
          className='flex-1 p-4 rounded-lg bg-base-gray-500 border border-base-gray-700 text-base-gray-100 placeholder:text-base-gray-300 focus:border-transparent focus:outline-none focus:shadow-[0px_0px_0px_1.5px] focus:shadow-product-purple-dark'
          onChange={handleNewTaskChange}
          value={newTaskText}
          required
          onInvalid={handleNewInvalidTask}

        />
        <button
          type='submit'
          className='flex items-center gap-2 p-4 rounded-lg text-base-gray-100 bg-product-blue-dark hover:bg-product-blue duration-[0.3s] disabled:opacity-20 disabled:hover:bg-product-blue-dark disabled:hover:cursor-not-allowed'
          disabled={isNewTaskValid}
        >
          Criar
          <PlusCircle size={20} />
        </button>
      </form>

      <footer className="flex justify-between font-bold pb-6">
        <p className="text-product-blue">Tarefas Criadas <span className='text-sm text-base-gray-200 bg-base-gray-400 rounded-xl px-[0.575rem] ml-2'>{taskCount}</span></p>
        <p className="text-product-purple">Concluídas <span className='text-sm text-base-gray-200 bg-base-gray-400 rounded-xl px-[0.575rem] ml-2'>0 de {taskCount}</span></p>
      </footer>
      <div>
        {tasks.map(task => <Task content={task} tasks={tasks} />)}
      </div>
    </div>

  )

}

export function Task({ content, tasks }) {

  const [isChecked, setIsChecked] = useState(false)

  function handleTaskChange() {
    setIsChecked(!isChecked)
  }

  return (
    <div className="flex justify-between p-4 mb-3 rounded-lg border bg-base-gray-500 border-base-gray-400">
      <label className="flex text-base-gray-100">
        <div>
          <input
            id="task"
            className="flex justify-center items-center mt-[0.275rem] text-[0.625rem] font-bold cursor-pointer w-[1.20rem] h-[1.20rem] appearance-none mr-3 bg-transparent rounded-full border-2 border-product-blue after:content-['\2713'] after:opacity-0 checked:after:opacity-100 checked:bg-product-purple-dark checked:border-transparent duration-[0.1s]"
            type="checkbox"
            onClick={handleTaskChange}
          />
        </div>
        {tasks.map(() => {
          if (isChecked === false) {
            return <p>{content}</p>
          } else if (isChecked === true) {
            return <p className="text-base-gray-300 line-through">{content}</p>
          }
        })}
      </label>
      <div>
        <button className="cursor-pointer leading-[0] ml-3 hover:text-base-danger duration-[0.2s]">
          <Trash size={19} />
        </button>
      </div>
    </div>
  )
}
