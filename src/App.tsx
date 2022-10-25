import './styles/global.css'

import { Header } from './components/Header'
import { NewTask } from './components/NewTask'
import { List } from './components/List'

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
          <List />
        </main>
      </div>


    </div>
  )
}
