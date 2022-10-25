import rocket from '../assets/rocket.svg'

export function Header() {
  return (
    <div>
      <header className='flex  items-center justify-center gap-3 bg-base-gray-700 pt-[4.5rem] pb-20'>
        <img src={rocket} alt="" />
        <h1 className='text-[2.5rem] font-bold'>
          <span className='text-product-blue'>to</span><span className='text-product-purple-dark'>do</span>
        </h1>
      </header>
    </div>

  )
}