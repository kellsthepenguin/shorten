import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <div>
      <p className='relative left-8 top-6 font-semibold'>
        Shorten!
      </p>
      <div className='flex justify-center items-center min-h-[60vh] flex-col'>
        <p className='font-semibold text-[64pt] sm:text-[20pt] text-[15pt]'>
          Shorten your link!
        </p>
        <input className='bg-[#F5F5F5] text-center w-[50vw] h-[10vh] rounded-[20px]' />
      </div>
    </div>
  )
}

export default Home
