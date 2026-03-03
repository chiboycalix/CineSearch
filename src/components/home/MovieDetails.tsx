import { Icon } from '@iconify/react';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import moment from 'moment';
type MovieDetailsProps = {
  title: string;
  vote_average: number;
  release_date: string;
  poster_path: string;
  backdrop_path: string;
  id: number;
  tagline: string;
  runtime: number;

}

const MovieDetails = () => {
  const params = useParams();
  const [movieDetails, setMovieDetails] = useState<MovieDetailsProps | null>(null)


  useEffect(() => {
    const fetchMovieDetails = async () => {
      const response = await fetch(`https://api.themoviedb.org/3/movie/${params.movieId}?api_key=50ab539ba371377eedd2c344d1b4826c`)
      const data = await response.json()
      setMovieDetails(data)
    }
    fetchMovieDetails()
  }, [params])
  console.log({ movieDetails })
  return (
    <div className='w-full min-h-screen'>
      <div className='w-full h-[88vh] relative'>
        <img src={`https://image.tmdb.org/t/p/w500${movieDetails?.backdrop_path}`} alt={movieDetails?.title} className='w-full h-full object-cover' />
        <div className='absolute bottom-0 left-0 flex items-center justify-start gap-2 w-full'>
          <img src={`https://image.tmdb.org/t/p/w500${movieDetails?.poster_path}`} alt={movieDetails?.title} className='w-56 h-56 object-cover border-4 border-[#4a1111] rounded-lg' />
          <div>
            <h1 className='text-3xl font-bold text-white'>{movieDetails?.title}</h1>
            <p className='text-base text-[#ec1313]'>{movieDetails?.tagline}</p>
            <div className='flex items-center justify-start gap-6'>
              <div className='flex items-center justify-start gap-2'>
                <Icon icon="ci:calendar" width={20} height={20} className='text-[#cbd5a1]' />
                <p className='text-sm text-[#94A3B8]'>{moment(movieDetails?.release_date).format('MMM DD, YYYY')}</p>
              </div>
              <div className='flex items-center justify-start gap-2'>
                <Icon icon="mdi:clock-outline" width={20} height={20} className='text-[#cbd5a1]' />
                <p className='text-sm text-[#94A3B8]'>{movieDetails?.runtime} minutes</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieDetails