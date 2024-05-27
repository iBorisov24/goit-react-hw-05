import { useEffect, useState } from 'react';
import { fetchReviewsInfo } from '../../fetchUrl';
import { useParams } from 'react-router-dom';
import Loader from '../../components/Loader/Loader';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';

export default function Reviews() {
	const { movieID } = useParams({});
	const [reviewsInfo, setReviewsInfo] = useState([]);
	const [loader, setLoader] = useState(false);
	const [error, setError] = useState(false);
	useEffect(() => {
		const fetchCast = async id => {
			try {
				setLoader(true);
				const result = await fetchReviewsInfo(movieID);
				setReviewsInfo(result.results);
			} catch (error) {
				setError(true);
				console.log(error);
			} finally {
				setLoader(false);
			}
		};
		fetchCast();
	}, [movieID]);
	return reviewsInfo.length > 0 ? (
		<ul>
			{reviewsInfo.map(item => {
				return (
					<li key={item.id}>
						<h2>{item.author}</h2>
						<p>{item.content}</p>
					</li>
				);
			})}
			{loader && <Loader />}
			{error && <ErrorMessage />}
		</ul>
	) : (
		<p>Sorry, this film not have reviews</p>
	);
}
