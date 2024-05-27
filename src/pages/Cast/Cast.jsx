import { useEffect, useState } from 'react';
import { fetchCastInfo } from '../../fetchUrl';
import { useParams } from 'react-router-dom';
import Loader from '../../components/Loader/Loader';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
export default function Cast() {
	const { movieID } = useParams({});
	const [castInfo, setCastInfo] = useState([]);
	const [loader, setLoader] = useState(false);
	const [error, setError] = useState(false);
	const linkImg = `https://image.tmdb.org/t/p/w500`;
	useEffect(() => {
		const fetchCast = async id => {
			try {
				setLoader(true);
				const result = await fetchCastInfo(movieID);
				setCastInfo(result.cast);
			} catch (error) {
				setError(true);
				console.log(error);
			} finally {
				setLoader(false);
			}
		};
		fetchCast();
	}, [movieID]);
	return (
		castInfo && (
			<ul>
				{castInfo.map(item => {
					return (
						<li key={item.id}>
							<img
								src={`${linkImg}${item.profile_path}`}
								alt="actor_avatar"
								width={150}
								height={150}
							/>
							<p>{item.original_name}</p>
							<p>{item.character}</p>
						</li>
					);
				})}
				{loader && <Loader />}
				{error && <ErrorMessage />}
			</ul>
		)
	);
}
