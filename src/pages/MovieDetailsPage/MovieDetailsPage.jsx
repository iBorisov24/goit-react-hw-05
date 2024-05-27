import { Outlet, useLocation, useParams } from 'react-router-dom';
import { fetchFilmInfo } from '../../fetchUrl';
import { useEffect, useRef, useState } from 'react';
import MovieDetailsPageItem from '../../components/MovieDetailsPageItem/MovieDetailsPageItem';
import { Link } from 'react-router-dom';
import Loader from '../../components/Loader/Loader';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
export default function MovieDetailsPage() {
	const { movieID } = useParams({});
	const [movieInfo, setMovieInfo] = useState();
	const [loader, setLoader] = useState(false);
	const [error, setError] = useState(false);
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
			<Link to="/">Go back</Link>
			{movieInfo && <MovieDetailsPageItem movieInfo={movieInfo} />}
			<p>Additional information</p>
			<ul>
				<li>
					<Link to={'cast'}>Cast</Link>
				</li>
				<li>
					<Link to={'reviews'}>Reviews</Link>
				</li>
			</ul>
			{loader && <Loader />}
			{error && <ErrorMessage />}
			<Outlet />
		</div>
	);
}
