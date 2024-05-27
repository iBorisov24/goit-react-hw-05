import axios from 'axios';

const options = {
	headers: {
		Authorization:
			'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MDMyM2JlYzQ2Y2I4MzA3YTk3ODM3Nzg1ZTI3Y2Q2NCIsInN1YiI6IjY2NTBlOWY1NWE4M2ZiNTc1ZjRiNTZkOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aJ8gkRZofg8N9IZ64YeMypvPRcXTawisZfa_-XLMEjo',
	},
};

export async function fetchFilmList() {
	const url = 'https://api.themoviedb.org/3/trending/movie/';
	const request = await axios.get(`${url}day`, options);
	return request.data;
}

export async function fetchFilmInfo(movieId) {
	const url = 'https://api.themoviedb.org/3/movie/';
	const request = await axios.get(`${url}${movieId}`, options);
	return request.data;
}
export async function fetchCastInfo(movieId) {
	const url = 'https://api.themoviedb.org/3/movie/';
	const request = await axios.get(`${url}${movieId}/credits`, options);
	return request.data;
}
export async function fetchReviewsInfo(movieId) {
	const url = 'https://api.themoviedb.org/3/movie/';
	const request = await axios.get(`${url}${movieId}/reviews`, options);
	return request.data;
}
export async function fetchFilmByQuery(query) {
	const url = `https://api.themoviedb.org/3/search/movie?query=${query}`;
	const request = await axios.get(url, options);
	return request.data;
}
