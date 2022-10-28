import { Trash } from "phosphor-react"

export function Task({ content, id, isChecked, onDeleteTask }) {

  function handleDeleteTask() {
    onDeleteTask(content)
  }

  function verifyAndCreateTask(){
    if(isChecked === false){
      return <p key={id}>{content}</p>
    } else if (isChecked === true){
      return <p key={id} className="text-base-gray-300 line-through">{content}</p>
    }
  }

  return (
    <div className="flex justify-between p-4 mb-3 rounded-lg border bg-base-gray-500 border-base-gray-400">
      <label className="flex text-base-gray-100">
        <div>
          <input
            className="flex justify-center items-center mt-[0.275rem] text-[0.625rem] font-bold cursor-pointer w-[1.20rem] h-[1.20rem] appearance-none mr-3 bg-transparent rounded-full border-2 border-product-blue after:content-['\2713'] after:opacity-0 checked:after:opacity-100 checked:bg-product-purple-dark checked:border-transparent duration-[0.1s]"
            type="checkbox"
          />
        </div>
        <div>
          {verifyAndCreateTask()}
        </div>

      </label>
      <div>
        <button
          className="cursor-pointer leading-[0] ml-3 hover:text-base-danger duration-[0.2s]"
          onClick={handleDeleteTask}
        >
          <Trash size={19} />
        </button>
      </div>
    </div>
  )
}