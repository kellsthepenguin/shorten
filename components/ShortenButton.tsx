const ShortenButton = ({ onClick }: { onClick: any }) => {
  return (
    <button className='px-[5vw] py-[1vh] bg-blue-500 hover:bg-blue-600 font-semibold text-[20pt] rounded-[10px] text-white' onClick={onClick}>
      Shorten!
    </button>
  )
}

export default ShortenButton
