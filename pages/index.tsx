import type { NextPage } from 'next'
import LinkInput from '../components/LinkInput'
import ShortenButton from '../components/ShortenButton'

const Home: NextPage = () => {
  return (
    <div className='overflow-hidden'>
      <p className='relative left-8 top-6 font-semibold'>
        Shorten!
      </p>
      <div className='flex justify-center items-center min-h-[60vh] flex-col'>
        <p className='font-semibold md:text-[48pt] text-[32pt] text-[15pt]'>
          Shorten your link!
        </p>
        <LinkInput /> <br />
        <ShortenButton />
      </div>
    </div>
  )
}

export default Home
