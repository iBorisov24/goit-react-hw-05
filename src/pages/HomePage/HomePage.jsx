import { Link, useLocation } from 'react-router-dom';
import { fetchFilmList } from '../../fetchUrl';
import { useState, useEffect } from 'react';
import Loader from '../../components/Loader/Loader';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import css from './HomePage.module.css';
export default function HomePage() {
	const [collection, setCollection] = useState([]);
	const [loader, setLoader] = useState(false);
	const [error, setError] = useState(false);
	const location = useLocation();
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
				{collection.map(item => {
					return (
						<li key={item.id} className={css.listItem}>
							<Link
								className={css.link}
								to={`/movies/${item.id}`}
								state={location.pathname}
							>
								{item.original_title}
							</Link>
						</li>
					);
				})}
				{loader && <Loader />}
				{error && <ErrorMessage />}
			</ol>
		</>
	);
}
