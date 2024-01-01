import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ChatMessage from './ChatMessage';
import { addMessage } from '../store/chatSlice';
import { generateRandomName, generateRandomMessages } from '../utils/helper';

const LiveChat = () => {
	const [liveMessage, setLiveMessage] = useState('');

	const ChatMessages = useSelector((store) => store.chat.messages);

	const dispatch = useDispatch();
	useEffect(() => {
		// API Polling

		const timer = setInterval(() => {
			dispatch(
				addMessage({
					name: generateRandomName(),
					message: generateRandomMessages(30),
				})
			);
		}, 2000);

		return () => {
			clearInterval(timer);
		};
	}, []);

	return (
		<div>
			<div className="border w-full p-4 bg-slate-100 rounded-lg flex flex-col gap-4 overflow-y-scroll h-[490px]">
				{ChatMessages.map((c, index) => (
					<ChatMessage key={index} name={c.name} message={c.message} />
				))}
			</div>
			<form
				className="mt-5 border border-black rounded-md p-2 flex gap-2"
				onSubmit={(e) => {
					e.preventDefault();
				}}
			>
				<input
					className="border p-2 rounded-md w-10/12"
					type="text"
					value={liveMessage}
					onChange={(e) => {
						setLiveMessage(e.target.value);
					}}
				/>
				<button
					className="w-2/12 bg-gray-400 py-1 px-2 rounded-md"
					onClick={() => {
						dispatch(
							addMessage({
								name: 'Jahnavi',
								message: liveMessage,
							})
						);
						setLiveMessage('');
					}}
				>
					Submit
				</button>
			</form>
		</div>
	);
};

export default LiveChat;
