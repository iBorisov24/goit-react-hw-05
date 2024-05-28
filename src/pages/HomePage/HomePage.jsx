import { Link, useLocation } from 'react-router-dom';
import { fetchFilmList } from '../../fetchUrl';
import { useState, useEffect } from 'react';
import Loader from '../../components/Loader/Loader';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import css from './HomePage.module.css';
import MovieList from '../../components/MovieList/MovieList';
export default function HomePage() {
	const [collection, setCollection] = useState([]);
	const [loader, setLoader] = useState(false);
	const [error, setError] = useState(false);
	useEffect(() => {
		const request = async () => {
			try {
				setLoader(true);
				const result = await fetchFilmList();
				setCollection(result.results);
			} catch (error) {
				setError(true);
			} finally {
				setLoader(false);
			}
		};
		request();
	}, []);

	return (
		<>
			<h2 className={css.title}>Trending today:</h2>
			<ol className={css.list}>
				<MovieList collection={collection} />
				{loader && <Loader />}
				{error && <ErrorMessage />}
			</ol>
		</>
	);
}
