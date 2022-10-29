import { Trash } from "phosphor-react"

export function Task({ content, id, checked, onChangeChecked, onDeleteTask }) {

  function handleDeleteTask() {
    onDeleteTask(id)
  }

  function handleChangeCheck(){
    onChangeChecked(id, checked)
  }

  function verifyAndCreateTask(){
    if(checked === false){
     return <p>{content}</p>
    } else if(checked === true){
     return <p className="text-base-gray-300 line-through">{content}</p>
    }
  }



  return (
    <div className="flex justify-between p-4 mb-3 rounded-lg border bg-base-gray-500 border-base-gray-400">
      <label className="flex text-base-gray-100">
        <div>
          <input
            className="flex justify-center items-center mt-[0.275rem] text-[0.625rem] font-bold cursor-pointer w-[1.20rem] h-[1.20rem] appearance-none mr-3 bg-transparent rounded-full border-2 border-product-blue after:content-['\2713'] after:opacity-0 checked:after:opacity-100 checked:bg-product-purple-dark checked:border-transparent duration-[0.1s]"
            type="checkbox"
            onClick={handleChangeCheck}
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