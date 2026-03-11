import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Routes, Route } from "react-router";
import Movies from './pages/Movies.tsx';
import Home from './pages/Home.tsx';
import TvShows from './pages/TvShows.tsx';
import MovieDetails from './components/home/MovieDetails.tsx';
import SearchResult from './pages/SearchResult.tsx';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/details/:movieId" element={<MovieDetails />} />
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/tv-shows" element={<TvShows />} />
          <Route path="/search-result" element={<SearchResult />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
