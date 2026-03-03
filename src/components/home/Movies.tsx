import { Icon } from '@iconify/react'
import { Button } from '../ui/button'
import { useEffect, useState } from 'react'
import { Loader2 } from 'lucide-react';
import { useNavigate } from 'react-router';

type MovieProps = {
  title: string;
  vote_average: number;
  release_date: string;
  poster_path: string;
  id: number;
}
const Movies = ({ type }: { type: 'top_rated' | 'popular' | 'upcoming' }) => {
  const [movies, setMovies] = useState<MovieProps[]>([])
  const [loadingMovies, setLoadingMovies] = useState(true)
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch(`https://api.themoviedb.org/3/movie/${type}?api_key=50ab539ba371377eedd2c344d1b4826c`)
      const data = await response.json()
      setMovies(data.results)
      setLoadingMovies(false)
    }
    fetchMovies()
  }, [type])

  if (loadingMovies) {
    return <div className='flex items-center justify-center'>
      <Loader2 className='w-10 h-10 animate-spin' />
    </div>
  }

  return (
    <div>
      <div className='grid grid-cols-5 gap-4'>
        {
          movies.map((movie, idx) => (
            <div key={idx} className='rounded-lg cursor-pointer' onClick={() => navigate(`/details/${movie.id}`)}>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className='w-full border border-[#4a1111] rounded-lg'
              />
              <h1 className='mt-4 text-md'>{movie.title}</h1>
              <div className='flex items-center justify-between gap-2'>
                <p className='flex items-center gap-2'>
                  <Icon icon="material-symbols:star-outline" width={20} height={20} className='text-[#F59E0B]' />
                  <span>
                    <span className="mr-1 text-[#EC1313]">{movie.vote_average.toFixed(1)}</span>
                    <span className='text-[#831111]'>/</span>
                    <span className='text-sm ml-1 text-[#831111]'>10</span>
                  </span></p>
                <p className='text-[#94A3B8]'>{movie.release_date}</p>
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

export default Movies