import type { NextPage } from 'next'
import { useRef } from 'react'
import LinkInput from '../components/LinkInput'
import ShortenButton from '../components/ShortenButton'

const Home: NextPage = () => {
  const linkInput = useRef<HTMLInputElement>(null)
  const shortenedLinkText = useRef<HTMLParagraphElement>(null)

  const handleShorten = () => {
    const linkToShorten = linkInput.current?.value

    fetch('/api/shorten', {
      method: 'POST',
      body: JSON.stringify({ url: linkToShorten }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((res) => res.json())
      .then((result) => {
        if (shortenedLinkText.current !== null) {
          console.log(result)
          shortenedLinkText.current.innerHTML = new URL(location.href).origin + '/s/' + result.id
        }
      })
  }

  return (
    <div className='overflow-hidden'>
      <p className='relative left-8 top-6 font-semibold'>Shorten!</p>
      <div className='flex justify-center items-center min-h-[60vh] flex-col'>
        <p className='font-semibold md:text-[48pt] text-[32pt] text-[15pt]'>
          Shorten your link!
        </p>
        <LinkInput innerRef={linkInput} /> <br />
        <ShortenButton onClick={handleShorten} />
        <p ref={shortenedLinkText}></p>
      </div>
    </div>
  )
}

export default Home
