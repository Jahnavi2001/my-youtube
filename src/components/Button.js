import React from 'react';
import { YOUTUBE_SEARCH_LIST_API } from '../utils/constants';
import { addActiveCategory, addVideosList } from '../store/videoSlice';
import { useDispatch, useSelector } from 'react-redux';

const Button = ({ name }) => {
	const dispatch = useDispatch();
	const activeCategory = useSelector((store) => store.video.activeCategory);

	const handleCategoryButtonSearch = async () => {
		const data = await fetch(YOUTUBE_SEARCH_LIST_API + name);
		const json = await data.json();
		dispatch(addActiveCategory(name));
		dispatch(addVideosList(json.items));
	};

	return (
		<div>
			<button
				className={
					'bg-gray-100 rounded-md px-3 py-1 w-max ' +
					(activeCategory === name ? 'bg-gray-400' : '')
				}
				onClick={handleCategoryButtonSearch}
			>
				{name}
			</button>
		</div>
	);
};

export default Button;
