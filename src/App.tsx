import './styles/global.css'

import { Header } from './components/Header'
import { NewTask } from './components/NewTask'
import { EmptyList } from './components/EmptyList'
import { Task } from './components/Task'


import { useState } from 'react'



export function App() {

  return (
    <div>
      <header>
        <Header />
      </header>
      <div className='max-w-[736px] mx-auto'>
        <NewTask />
        <main>
          <Task />
          <Task />
        </main>
      </div>
    </div>
  )
}
