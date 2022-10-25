import { PlusCircle } from 'phosphor-react'

export function NewTask() {
  return (
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
  )

}