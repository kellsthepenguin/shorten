import { RefObject } from 'react'

const LinkInput = ({ ref }: { ref?: RefObject<HTMLInputElement> }) => {
  return (
    <input
      className='outline-none bg-[#F5F5F5] border border-gray-300 px-[30px] md:w-1/2 w-3/5 h-28 rounded-[20px] text-[20pt] font-bold'
      placeholder='Link'
      ref={ref}
    />
  )
}

export default LinkInput
