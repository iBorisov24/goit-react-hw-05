import { Link } from 'react-router-dom';
import css from './MoviesList.module.css';
export default function MoviesList({ location, filmListByQuery }) {
	return (
		<ol className={css.list}>
			{filmListByQuery.map(item => {
				return (
					<li className={css.item} key={item.id}>
						<Link className={css.listItem} to={`${item.id}`} state={location}>
							{item.original_title}
						</Link>
					</li>
				);
			})}
		</ol>
	);
}
