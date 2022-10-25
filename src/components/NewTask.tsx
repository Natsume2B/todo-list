import { PlusCircle } from 'phosphor-react'

export function NewTask() {
  return (
    <div>
      <form className='flex justify-center mx-auto mt-[-1.8rem] gap-2 mb-16'>
        <input
          type="text"
          placeholder='Adicione uma nova tarefa'
          className='flex-1 p-4 rounded-lg bg-base-gray-500 border border-base-gray-700 text-base-gray-100 placeholder:text-base-gray-300 focus:border-transparent focus:outline-none focus:shadow-[0px_0px_0px_1.5px] focus:shadow-product-purple-dark'
        />
        <button
          type='submit'
          className='flex items-center gap-2 p-4 rounded-lg text-base-gray-100 bg-product-blue-dark hover:bg-product-blue duration-[0.3s]'
        >
          Criar
          <PlusCircle size={20} />
        </button>
      </form>

      <footer className="flex justify-between font-bold pb-6">
        <p className="text-product-blue">Tarefas Criadas <span className='text-sm text-base-gray-200 bg-base-gray-400 rounded-lg py-[0.01rem] px-[0.6rem]'>0</span></p>
        <p className="text-product-purple">Concluídas <span className='text-sm text-base-gray-200 bg-base-gray-400 rounded-lg py-[0.01rem] px-[0.6rem]'>0</span></p>
      </footer>

    </div>

  )

}