import Clipboard from '../assets/Clipboard.svg'

export function List() {
  return (
    <div className=" flex flex-col items-center border-t border-t-base-gray-400">
      <img className='mt-16' src={Clipboard} alt="" />
      <div className="flex flex-col items-center mt-4">
        <strong>Você ainda não tem tarefas cadastradas</strong>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </div>

    </div>
  )
}