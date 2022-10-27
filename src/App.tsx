import { v4 as uuidv4 } from 'uuid';

import './styles/global.css'

import { Header } from './components/Header'
import { NewTask } from './components/NewTask'
import { EmptyList } from './components/EmptyList'

import { useState } from 'react'

export function App() {

  return (
    <div>
      <header>
        <Header />
      </header>
      <div className='max-w-[736px] mx-auto'>
        <NewTask />
      </div>
    </div>
  )
}
