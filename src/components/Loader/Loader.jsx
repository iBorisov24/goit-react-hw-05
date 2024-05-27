import { Audio } from 'react-loader-spinner';
import css from './Loader.module.css';
export default function Loader() {
	return (
		<>
			<p>Loading...</p>
			<Audio
				height="50"
				width="50"
				radius="7"
				color="blue"
				ariaLabel="three-dots-loading"
				wrapperStyle
				wrapperClass
				classname={css.loader}
			/>
		</>
	);
}
