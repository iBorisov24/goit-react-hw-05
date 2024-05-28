import { useEffect, useState } from 'react';
import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
const NotFound = lazy(() => import('../../pages/NotFound/NotFound'));
const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));
const MovieDetailsPage = lazy(() =>
	import('../../pages/MovieDetailsPage/MovieDetailsPage')
);
const Cast = lazy(() => import('../../pages/Cast/Cast'));
const Reviews = lazy(() => import('../../pages/Reviews/Reviews'));
const MoviesPage = lazy(() => import('../../pages/Movies/MoviesPage'));
const Loader = lazy(() => import('../Loader/Loader'));

function App() {
	return (
		<>
			<Navigation />
			<Suspense fallback={<Loader />}>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/movies" element={<MoviesPage />} />
					<Route path="/movies/:movieID" element={<MovieDetailsPage />}>
						<Route path="cast" element={<Cast />} />
						<Route path="reviews" element={<Reviews />} />
					</Route>
					<Route path="*" element={<NotFound />}></Route>
				</Routes>
			</Suspense>
		</>
	);
}

export default App;
