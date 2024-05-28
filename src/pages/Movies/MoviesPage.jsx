import { Formik, Field, Form } from 'formik';
import toast, { Toaster } from 'react-hot-toast';
import { useState, useEffect } from 'react';
import Loader from '../../components/Loader/Loader';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import { fetchFilmByQuery } from '../../fetchUrl';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import MoviesList from '../../components/MoviesList/MoviesList';
import css from './MoviesPage.module.css';
export default function MoviesPage() {
	const [error, setError] = useState(false);
	const [loader, setLoader] = useState(false);
	const [filmListByQuery, setFilmListByQuery] = useState([]);
	const location = useLocation();
	const [searchParams, setSearchParams] = useSearchParams();
	const query = searchParams.get('query') ?? '';

	useEffect(() => {
		const fetchQuery = async () => {
			try {
				setLoader(true);
				const result = await fetchFilmByQuery(query);
				setFilmListByQuery(result.results);
			} catch (error) {
				setError(true);
			} finally {
				setLoader(false);
			}
		};
		fetchQuery(query);
	}, [query]);

	const onSubmit = data => {
		searchParams.set('query', data);
		setSearchParams(searchParams);
	};

	return (
		<div>
			<Formik
				onSubmit={(values, actions) => {
					if (values.data.trim() == '') {
						alert('Please, type any query');
						// toast.error('Please,type any query', { position: 'top-right' });
					} else {
						onSubmit(values.data);
					}
					actions.resetForm();
				}}
				initialValues={{ data: query }}
			>
				<Form className={css.form}>
					<Field className={css.input} name="data"></Field>
					<button className={css.btn} type="submit" name="submitBtn">
						Find
					</button>
				</Form>
			</Formik>
			<MoviesList filmListByQuery={filmListByQuery} location={location} />
			{loader && <Loader />}
			{error && <ErrorMessage />}
		</div>
	);
}
