export default function MovieDetailsPageItem({ movieInfo }) {
	const average = Math.round(movieInfo.vote_average) * 10;
	const linkImg = `https://image.tmdb.org/t/p/w500${movieInfo.poster_path}`;
	return (
		<div>
			<img src={linkImg} alt="FilmPoster" width={250} height={350} />
			<h2>{movieInfo.title}</h2>
			<p>{`${average}%`}</p>
			<p>Overview</p>
			<p>{movieInfo.overview}</p>
			<ul>Genres:</ul>
			{movieInfo.genres.map(item => {
				return <li key={item.id}>{item.name}</li>;
			})}
		</div>
	);
}
