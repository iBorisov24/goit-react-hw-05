import css from './MovieDetailsPageItem.module.css';
export default function MovieDetailsPageItem({ movieInfo }) {
	const average = Math.round(movieInfo.vote_average) * 10;
	const linkImg = `https://image.tmdb.org/t/p/w500${movieInfo.poster_path}`;
	return (
		<div className={css.block}>
			<img
				className={css.img}
				src={linkImg}
				alt="FilmPoster"
				width={150}
				height={250}
			/>
			<div className={css.card}>
				<h2 className={css.title}>{movieInfo.title}</h2>
				<p>Positive scores: {`${average}%`}</p>
				<p className={css.title}>Overview</p>
				<p>{movieInfo.overview}</p>
				<ul className={css.title}>Genres:</ul>
				{movieInfo.genres.map(item => {
					return <li key={item.id}>{item.name}</li>;
				})}
			</div>
		</div>
	);
}
