import { Link } from 'react-router-dom';

export default function NotFound() {
	return (
		<>
			<p>Sorry, not founded page</p>
			<Link to={'/'}>Go Home</Link>
		</>
	);
}
