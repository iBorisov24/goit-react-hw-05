import css from './MovieList.module.css';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
export default function MovieList({ collection }) {
	const location = useLocation();
	return collection.map(item => {
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
	});
}
