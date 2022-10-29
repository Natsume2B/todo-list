import './styles/global.css'

import { v4 as uuidv4 } from 'uuid';
import { PlusCircle } from 'phosphor-react'

import { Header } from './components/Header'
import { Task } from './components/Task';
import { EmptyList } from './components/EmptyList'

import { useState } from 'react'

export function App() {
  const [newTaskText, setNewTaskText] = useState("");
  const [tasks, setTasks] = useState([]);

  const isNewTaskValid = newTaskText.length === 0

  function handleNewTaskChange() {
    setNewTaskText(event.target.value)
  }

  function handleCreateNewTask() {
    event.preventDefault()

    const newTask = {
      taskId: uuidv4(),
      taskText: newTaskText,
      taskChecked: false,
    };

    setTasks([...tasks, newTask])
    setNewTaskText("")
  }

  function deleteTask(taskId) {
    const listWithoutDeletedTask = tasks.filter(task => {
      return task.taskId !== taskId
    })
    setTasks(listWithoutDeletedTask)
  }

  function changeChecked(taskId, taskChecked){
    const index = tasks.findIndex(task => task.taskId === taskId);
    const newList = tasks;
    newList[index].taskChecked = !taskChecked
    setTasks([...newList])
  }

  function showEmptyList(){
    if(tasks.length === 0){
      return <EmptyList/>
    }
  }

  return (
    <div>
      <header>
        <Header />
      </header>
      <main className='max-w-[736px] mx-auto'>
        <div>
          <form onSubmit={handleCreateNewTask} className='flex justify-center mx-auto mt-[-1.8rem] gap-2 mb-16' >
            <input
              type="text"
              placeholder='Adicione uma nova tarefa'
              className='flex-1 p-4 rounded-lg bg-base-gray-500 border border-base-gray-700 text-base-gray-100 placeholder:text-base-gray-300 focus:border-transparent focus:outline-none focus:shadow-[0px_0px_0px_1.5px] focus:shadow-product-purple-dark'
              onChange={handleNewTaskChange}
              value={newTaskText}
              required

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
            <p className="text-product-blue">Tarefas Criadas <span className='text-sm text-base-gray-200 bg-base-gray-400 rounded-xl px-[0.575rem] ml-2'>{tasks.length}</span></p>
            <p className="text-product-purple">Concluídas <span className='text-sm text-base-gray-200 bg-base-gray-400 rounded-xl px-[0.575rem] ml-2'>0 de {tasks.length} </span></p>
          </footer>
          <div>
            {tasks.map(task => {
              return (
                <Task content={task.taskText} id={task.taskId} checked={task.taskChecked} onChangeChecked={changeChecked} onDeleteTask={deleteTask} />
              )
            })}
          </div>
        </div>
        {showEmptyList()}
      </main>
    </div>
  )

}
