import { useEffect, useState } from 'react';
import { fetchCastInfo } from '../../fetchUrl';
import { useParams } from 'react-router-dom';
import Loader from '../../components/Loader/Loader';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import css from './MovieCast.module.css';

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
				if (result.cast.length < 1) {
					alert('Sorry, we dont have cast for this movie');
				} else {
					setCastInfo(result.cast);
				}
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
		<ul className={css.list}>
			{castInfo.map(item => {
				return (
					<li className={css.item} key={item.id}>
						<img
							className={css.img}
							src={`${linkImg}${item.profile_path}`}
							alt="actor_avatar"
							width={150}
							height={150}
						/>
						<p className={css.name}>{item.original_name}</p>
						<p className={css.char}>{item.character}</p>
					</li>
				);
			})}
			{loader && <Loader />}
			{error && <ErrorMessage />}
		</ul>
	);
}
