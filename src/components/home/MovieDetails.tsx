import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import moment from "moment";
type MovieDetailsProps = {
  title: string;
  vote_average: number;
  release_date: string;
  poster_path: string;
  backdrop_path: string;
  id: number;
  tagline: string;
  runtime: number;
  genres: { id: number; name: string }[];
  status: string;
  original_language: string;
  budget: number;
  revenue: number;
  overview: string;
};

const MovieDetails = () => {
  const params = useParams();
  const [movieDetails, setMovieDetails] = useState<MovieDetailsProps | null>(
    null,
  );

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${params.movieId}?api_key=50ab539ba371377eedd2c344d1b4826c`,
      );
      const data = await response.json();
      setMovieDetails(data);
    };
    fetchMovieDetails();
  }, [params]);

  return (
    <div className="w-full min-h-screen ">
      <div className="w-full h-[88vh] relative ">
        <img
          src={`https://image.tmdb.org/t/p/w500${movieDetails?.backdrop_path}`}
          alt={movieDetails?.title}
          className="w-full h-full object-cover  bg-linear-to-t from-[#221111] to-white"
        />
        <div className="absolute bottom-2 left-10 flex items-center justify-start gap-2 w-full">
          <img
            src={`https://image.tmdb.org/t/p/w500${movieDetails?.poster_path}`}
            alt={movieDetails?.title}
            className="w-56 h-56 object-cover border-4 border-[#4a1111] rounded-lg"
          />
          <div>
            <h1 className="text-3xl font-bold text-white">
              {movieDetails?.title}
            </h1>
            <p className="text-base text-[#ec1313] font-bold">
              {movieDetails?.tagline}
            </p>
            <div className="flex items-center justify-start gap-6 mt-4">
              <div className="flex items-center justify-start gap-2">
                <Icon
                  icon="ci:calendar"
                  width={20}
                  height={20}
                  className="text-[#cbd5a1]"
                />
                <p className="text-sm text-[#ffffff]">
                  {moment(movieDetails?.release_date).format("MMM DD, YYYY")}
                </p>
              </div>
              <div className="flex items-center justify-start gap-2">
                <Icon
                  icon="mdi:clock-outline"
                  width={20}
                  height={20}
                  className="text-[#cbd5a1]"
                />
                <p className="text-sm text-[#ffffff] font-bold">
                  {movieDetails?.runtime} minutes
                </p>
                <div>
                  <h1 className="flex items-center gap-4  text-[#CBD5E1]  ">
                    {movieDetails?.genres?.map((genre) => {
                      return (
                        <div
                          className="border border-[#EC1313] bg-[#311717] rounded-lg px-2 py-1 text-sm font-bold"
                          key={genre.id}
                        >
                          {genre.name}
                        </div>
                      );
                    })}
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex items-center justify-center gap-4 mb-6 ">
          <div className="">
            <button className=" flex gap-2 bg-[#EC1313] text-white text-xl py-4 px-10 rounded-md hover:bg-[#d31010] transition-colors">
              <Icon
                icon="octicon:play-24"
                width={25}
                height={25}
                className="text-white inline-block  font-bold"
              />
              <h1> Watch Trailer</h1>
            </button>
          </div>
          <div>
            <button className="blur-[0.5px] flex gap-2 text-white text-xl py-4 px-8 rounded-md hover:bg-[#d31010] transition-colors ml-4 border border-[#4a1111] ">
              <Icon
                icon="stash:save-ribbon"
                width={25}
                height={25}
                className="text-white inline-block  font-bold"
              />
              <h1> Add to Watchlist</h1>
            </button>
          </div>
        </div>
        px-2
        <div className="flex items-start justify-start gap-6 px-10">
          <div className="basis-[70%] px-30 ">
            <h1 className="text-white text-2xl  font-bold pl-4 border-l-4 border-[#EC1313] ">
              Overview
            </h1>
            <div className="text-white text-xl mt-3">
              {movieDetails?.overview}
            </div>
            <div>
              <div className="text-white text-2xl font-bold mt-10 pl-4 border-l-4 border-[#EC1313]">
                Top Cast
              </div>
            </div>
          </div>

          <div className="basis-[30%] border border-[#4a1111]  border-md bg-[#311717]  rounded-lg p-4 ">
            <h1 className="text-white text-xl"> Movie Details</h1>
            <h1 className="text-xl  text-white mt-4">
              <h1 className="text-sm text-[#94A3B8]">Status</h1>
              {movieDetails?.status}
            </h1>
            <p className="text-base text-white mt-4 ">
              <h1 className="text-sm text-[#94A3B8]">Original Language</h1>
              {movieDetails?.original_language.toUpperCase()} |{" "}
              {movieDetails?.vote_average}
            </p>
            <p className="text-base text-white mt-4 ">
              <h1 className="text-sm text-[#94A3B8]">Budget</h1>
              {movieDetails?.budget}
            </p>
            <p className="text-base text-white mt-4 border-b border-[#4a1111] pb-4 ">
              <h1 className="text-sm text-[#94A3B8]">Revenue</h1>
              {movieDetails?.revenue}
            </p>
            <div className="flex items-center justify-start gap-2 mt-4">
              <h1 className="text-xl text-[#94A3B8]">Keywords</h1>
            </div>
            <div className="mb-10">
              <div className=" flex items-center justify-start gap-2 mt-4 ">
                <h1 className="text-sm text-[#94A3B8] border border-[#4a1111] rounded-lg p-2 w-[80%]">
                  Artifitial Intelligence
                </h1>
                <h1 className="text-sm text-[#94A3B8] flex border border-[#4a1111] rounded-lg p-2">
                  Blackhole
                </h1>
              </div>
              <div className=" flex items-center justify-start gap-2 mt-4 ">
                <h1 className="text-sm text-[#94A3B8] border border-[#4a1111] rounded-lg p-2 w-[80%]">
                  Space Time
                </h1>
                <h1 className="text-sm text-[#94A3B8] flex border border-[#4a1111] rounded-lg p-2">
                  Nasa
                </h1>
                <h1 className="text-sm text-[#94A3B8] flex border border-[#4a1111] rounded-lg p-2">
                  Warmhole
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
