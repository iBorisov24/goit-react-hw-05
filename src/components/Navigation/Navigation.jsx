import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';
export default function Navigation() {
	return (
		<header className={css.nav}>
			<NavLink className={css.link} to={'/'}>
				Home
			</NavLink>

			<NavLink className={css.link} to={'/Movies'}>
				Movies
			</NavLink>
		</header>
	);
}
