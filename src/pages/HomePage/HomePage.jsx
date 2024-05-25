import { Link } from 'react-router-dom';
import { fetchFilmList } from '../../fetchUrl';
import { useState, useEffect } from 'react';

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
		<ul>
			Trending today:
			{collection.map(item => {
				return (
					<li key={item.id}>
						<Link to={`/movies/${item.id}`}>{item.original_title}</Link>
					</li>
				);
			})}
		</ul>
	);
}
