import { useEffect, useState } from 'react';

import { Route, Routes } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import NotFound from '../../pages/NotFound/NotFound';
import HomePage from '../../pages/HomePage/HomePage';
import MovieDetailsPage from '../../pages/MovieDetailsPage/MovieDetailsPage';
import Cast from '../../pages/Cast/Cast';
import Reviews from '../../pages/Reviews/Reviews';
import MoviesPage from '../../pages/Movies/MoviesPage';

function App() {
	return (
		<>
			<Navigation />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/movies" element={<MoviesPage />} />
				<Route path="/movies/:movieID" element={<MovieDetailsPage />}>
					<Route path="cast" element={<Cast />} />
					<Route path="reviews" element={<Reviews />} />
				</Route>
				<Route path="*" element={<NotFound />}></Route>
			</Routes>
		</>
	);
}

export default App;
