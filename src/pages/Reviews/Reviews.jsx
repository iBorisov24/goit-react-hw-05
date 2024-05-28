import { useEffect, useState } from 'react';
import { fetchReviewsInfo } from '../../fetchUrl';
import { useParams } from 'react-router-dom';
import Loader from '../../components/Loader/Loader';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import toast, { Toaster } from 'react-hot-toast';
import css from './Reviews.module.css';
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
				if (result.results.length < 1) {
					// toast.error('Sorry, we dont have reviews to this film');
					alert('Sorry, we dont have reviews info for this movie');
				} else {
					setReviewsInfo(result.results);
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
			{reviewsInfo.map(item => {
				return (
					<li className={css.block} key={item.id}>
						<h2 className={css.title}>{item.author}</h2>
						<p className={css.review}>{item.content}</p>
					</li>
				);
			})}
			{loader && <Loader />}
			{error && <ErrorMessage />}
		</ul>
	);
}
