import rocket from '../assets/rocket.svg'

export function Header() {
  return (
    <header className='flex justify-center items-center gap-3 bg-base-gray-700 pt-[4.5rem] pb-20'>
      <img className='w-[1.375rem]' src={rocket} alt="rocket logo" />
      <h1 className='text-[2.5rem] font-bold'>
        <span className='text-product-blue'>to</span><span className='text-product-purple-dark'>do</span>
      </h1>
    </header>
  )
}