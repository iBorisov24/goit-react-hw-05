import { Outlet, useLocation, useParams } from 'react-router-dom';
import { fetchFilmInfo } from '../../fetchUrl';
import { Suspense, useEffect, useRef, useState } from 'react';
import MovieDetailsPageItem from '../../components/MovieDetailsPageItem/MovieDetailsPageItem';
import { Link } from 'react-router-dom';
import Loader from '../../components/Loader/Loader';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import css from './MovieDetailsPage.module.css';
export default function MovieDetailsPage() {
	const { movieID } = useParams({});
	const [movieInfo, setMovieInfo] = useState();
	const [loader, setLoader] = useState(false);
	const [error, setError] = useState(false);
	const location = useLocation();
	const backLocation = useRef(location.state ?? '/');
	useEffect(() => {
		const request = async () => {
			try {
				setLoader(true);
				const result = await fetchFilmInfo(movieID);
				setMovieInfo(result);
			} catch (error) {
				setError(true);
				console.log(error);
			} finally {
				setLoader(false);
			}
		};
		request();
	}, [movieID]);
	return (
		<div>
			<Link to={backLocation.current} className={css.link}>
				Go back
			</Link>
			{movieInfo && <MovieDetailsPageItem movieInfo={movieInfo} />}

			<ul className={css.list}>
				<h2 className={css.title}>Additional information:</h2>
				<li className={css.item}>
					<Link to={'cast'}>Cast</Link>
				</li>
				<li className={css.item}>
					<Link to={'reviews'}>Reviews</Link>
				</li>
			</ul>
			{error && <ErrorMessage />}
			<Suspense fallback={<Loader />}>
				<Outlet />
			</Suspense>
		</div>
	);
}
