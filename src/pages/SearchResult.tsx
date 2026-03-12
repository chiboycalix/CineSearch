import { Loader2 } from 'lucide-react';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import NoResult from './NoResult';


type MovieCardProps = {
  id: number;
  title: string;

  release_date: string;
  genre_ids: string[];
  poster_path: string;
}

const MovieCard = ({ movie }: { movie: MovieCardProps }) => {
  console.log({ movie })
  return (
    <div className='h-[350px] w-full'>
      <div className='w-full h-[70%] bg-gray-500 rounded-lg'>
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className='w-full h-full object-cover rounded-lg' />
      </div>
      <div>
        <h1 className='text-white text-sm font-bold mt-4'>{movie.title}</h1>
        <div className='flex items-center justify-start gap-2'>
          <p className='text-[#94A3B8] text-sm'>{movie.release_date.split('-')[0]}</p>
          <span className='text-[#94A3B8] text-sm w-1.5 h-1.5 bg-gray-500 rounded-full'></span>
        </div>
      </div>
    </div>
  )
}

const SearchResult = () => {
  const [searchResult, setSearchResult] = useState([])
  const [loading, setLoading] = useState(true)
  const [totalResults, setTotalResults] = useState(0)
  const [releaseYear, setReleaseYear] = useState('')
  const location = useLocation();
  const query = location.search.split('=')[1]

  useEffect(() => {
    const fetchSearchResult = async () => {

      const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1&year=${releaseYear}&api_key=50ab539ba371377eedd2c344d1b4826c`)
      const data = await response.json()
      console.log({ data })
      setSearchResult(data.results)
      setTotalResults(data.total_results)
      setLoading(false)
    }
    fetchSearchResult()
  }, [query, releaseYear])


  if (loading) {
    return <div className='flex items-center justify-center'>
      <Loader2 className='w-10 h-10 animate-spin' />
    </div>
  }

  if (totalResults === 0) {
    return <NoResult query={query.split("%20").join(" ")} />
  }


  return (
    <div className='text-white py-10'>
      <div>
        <h1 className='text-2xl font-bold text-white'>Search results for <span className='text-[#EC1313]'>"{query.split("%20").join(" ")}"</span></h1>
        <div className='mt-2'>
          <p className='text-[#94A3B8]'>{totalResults} movies found in our database</p>
        </div>
      </div>

      <div>
        <Select onValueChange={(value) => setReleaseYear(value)}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Release Year" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="2025">2025</SelectItem>
              <SelectItem value="2024">2024</SelectItem>
              <SelectItem value="2023">2023</SelectItem>
              <SelectItem value="2022">2022</SelectItem>
              <SelectItem value="2021">2021</SelectItem>
              <SelectItem value="2020">2020</SelectItem>
              <SelectItem value="2019">2019</SelectItem>
              <SelectItem value="2018">2018</SelectItem>
              <SelectItem value="2017">2017</SelectItem>
              <SelectItem value="2016">2016</SelectItem>
              <SelectItem value="2015">2015</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className='mt-10 grid grid-cols-5 gap-8'>

        {
          searchResult.map((movie: MovieCardProps) => (
            <MovieCard key={movie.id} movie={movie} />
          ))
        }
      </div>


    </div>
  )
}

export default SearchResult