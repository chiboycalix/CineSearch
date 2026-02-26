import { Icon } from '@iconify/react'

const Logo = () => {
  return (
    <div className='text-2xl font-bold flex items-center gap-2'>
      <Icon icon="material-symbols:movie-outline" className='text-[#EC1313]' width={40} height={40} />
      <p className='text-[25px] font-bold text-white'>CineSearch</p>
    </div>
  )
}

export default Logo