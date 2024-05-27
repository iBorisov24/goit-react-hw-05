import { Link } from 'react-router-dom';
export default function MoviesList({ location, filmListByQuery }) {
	return (
		<ul>
			{filmListByQuery.map(item => {
				return (
					<li key={item.id}>
						<Link to={`${item.id}`} state={location}>
							{item.original_title}
						</Link>
					</li>
				);
			})}
		</ul>
	);
}
