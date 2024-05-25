import { useParams } from 'react-router-dom';
import { fetchFilmInfo } from '../../fetchUrl';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
export default function MovieDetailsPage() {
	const { movieID } = useParams({});
	const [movieInfo, setMovieInfo] = useState();
	useEffect(() => {
		const request = async () => {
			try {
				const result = await fetchFilmInfo(movieID);
				setMovieInfo(result);
			} catch (error) {}
		};
		request();
	}, [movieID, movieInfo]);

	const { title, vote_average, overview } = movieInfo;

	return (
		<div>
			<h2>{title}</h2>
			<p>{vote_average}</p>
			<p>Overview</p>
			<p>{overview}</p>
			<p>Genres</p>
			<p>{''}</p>
			<ul>
				<li>
					<Link>Cast</Link>
				</li>
				<li>
					<Link>Reviews</Link>
				</li>
			</ul>
		</div>
	);
}
