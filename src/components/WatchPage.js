import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import CommentsContainer from './CommentsContainer';
import LiveChat from './LiveChat';
import Sidebar from './Sidebar';
import { closeMenu } from '../store/appSlice';

const WatchPage = () => {
	const showMenu = useSelector((store) => store.app.isMenuOpen);
	const [searchParams] = useSearchParams();

	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(closeMenu());
	}, []);

	return (
		<div>
			{showMenu && (
				<div className="absolute bg-white h-full px-8 py-4 shadow-md w-1/6">
					<Sidebar />
				</div>
			)}
			<div className="p-6 w-full">
				<div className="flex gap-4 w-full">
					<div>
						<iframe
							className="rounded-lg"
							width="950"
							height="550"
							src={'https://www.youtube.com/embed/' + searchParams.get('v')}
							title="YouTube video player"
							frameBorder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
							allowFullScreen
						></iframe>
					</div>
					<div className="w-full flex flex-col gap-2">
						<div className="font-bold">Live Chat</div>
						<LiveChat />
					</div>
				</div>
				<CommentsContainer />
			</div>
		</div>
	);
};

export default WatchPage;
