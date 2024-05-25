import { useEffect, useState } from 'react';

import { Route, Routes } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import NotFound from '../../pages/NotFound/NotFound';
import HomePage from '../../pages/HomePage/HomePage';
import MovieDetailsPage from '../../pages/MovieDetailsPage/MovieDetailsPage';

function App() {
	return (
		<>
			<Navigation />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/movies" element={''} />
				<Route path="/movies/:movieID" element={<MovieDetailsPage />}>
					<Route path="cast" element={''} />
					<Route path="reviews" element={''} />
				</Route>
				<Route path="*" element={<NotFound />}></Route>
			</Routes>
		</>
	);
}

export default App;
