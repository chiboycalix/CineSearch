import Movie1 from '@/assets/home/popular-movies/movie-one.png'
import Movie2 from '@/assets/home/popular-movies/movie-two.png'
import { Icon } from '@iconify/react'
import { Button } from '../ui/button'

const popularMovies = [
  {
    thumbnail: Movie1,
    title: 'The Silent Echo',
    rating: "8.0",
    year: "2024",
  },
  {
    thumbnail: Movie2,
    title: 'Neon Horizon',
    rating: "7.5",
    year: "2023",
  },
  {
    thumbnail: Movie1,
    title: 'The Silent Echo',
    rating: "8.0",
    year: "2024",
  },
  {
    thumbnail: Movie2,
    title: 'Neon Horizon',
    rating: "7.5",
    year: "2023",
  },
  {
    thumbnail: Movie1,
    title: 'The Silent Echo',
    rating: "8.0",
    year: "2024",
  },
  {
    thumbnail: Movie2,
    title: 'Neon Horizon',
    rating: "7.5",
    year: "2023",
  },
  {
    thumbnail: Movie1,
    title: 'The Silent Echo',
    rating: "8.0",
    year: "2024",
  },
  {
    thumbnail: Movie2,
    title: 'Neon Horizon',
    rating: "7.5",
    year: "2023",
  },
  {
    thumbnail: Movie1,
    title: 'The Silent Echo',
    rating: "8.0",
    year: "2024",
  },
  {
    thumbnail: Movie2,
    title: 'Neon Horizon',
    rating: "7.5",
    year: "2023",
  },
]


const PopularMovies = () => {
  return (
    <div>
      <div className='grid grid-cols-5 gap-4'>
        {
          popularMovies.map((movie, idx) => (
            <div key={idx} className=' rounded-lg'>
              <img src={movie.thumbnail} alt={movie.title} className='w-full border border-[#4a1111] rounded-lg' />
              <h1 className='mt-4 text-xl'>{movie.title}</h1>
              <div className='flex items-center justify-between gap-2'>
                <p className='flex items-center gap-2'>
                  <Icon icon="material-symbols:star-outline" width={20} height={20} className='text-[#F59E0B]' />
                  <span>
                    <span className="mr-1 text-[#EC1313]">{movie.rating}</span>
                    <span className='text-[#831111]'>/</span>
                    <span className='text-sm ml-1 text-[#831111]'>10</span>
                  </span></p>
                <p className='text-[#94A3B8]'>{movie.year}</p>
              </div>
            </div>
          ))
        }

      </div>
      <div className='my-12 w-full flex items-center justify-center'>
        <Button className=' bg-[#EC1313] text-white rounded-full py-6 px-10 cursor-pointer' size='lg'>Load More Movies</Button>
      </div>
    </div>
  )
}

export default PopularMovies