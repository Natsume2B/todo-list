import './styles/global.css'

import { Header } from './components/Header'
import { NewTask } from './components/NewTask'

import { useState } from 'react'




export function App() {

  return (
    <div>
      <header>
        <Header />
      </header>
      <NewTask />
      <main>

      </main>

    </div>
  )
}
