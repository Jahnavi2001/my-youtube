import React from 'react';
import CommentsList from './CommentsList';

const commentsData = [
	{
		name: 'Jahnavi',
		text: 'Trying out comments along with nested.',
		replies: [
			{
				name: 'Jahnavi',
				text: 'Trying out comments along with nested.',
				replies: [
					{
						name: 'Jahnavi',
						text: 'Trying out comments along with nested.',
						replies: [
							{
								name: 'Jahnavi',
								text: 'Trying out comments along with nested.',
								replies: [
									{
										name: 'Jahnavi',
										text: 'Trying out comments along with nested.',
										replies: [
											{
												name: 'Jahnavi',
												text: 'Trying out comments along with nested.',
												replies: [
													{
														name: 'Jahnavi',
														text: 'Trying out comments along with nested.',
														replies: [],
													},
												],
											},
										],
									},
								],
							},
							{
								name: 'Jahnavi',
								text: 'Trying out comments along with nested.',
								replies: [
									{
										name: 'Jahnavi',
										text: 'Trying out comments along with nested.',
										replies: [],
									},
								],
							},
							{
								name: 'Jahnavi',
								text: 'Trying out comments along with nested.',
								replies: [],
							},
						],
					},
				],
			},
			{
				name: 'Jahnavi',
				text: 'Trying out comments along with nested.',
				replies: [
					{
						name: 'Jahnavi',
						text: 'Trying out comments along with nested.',
						replies: [],
					},
					{
						name: 'Jahnavi',
						text: 'Trying out comments along with nested.',
						replies: [
							{
								name: 'Jahnavi',
								text: 'Trying out comments along with nested.',
								replies: [],
							},
						],
					},
				],
			},
		],
	},
	{
		name: 'Jahnavi',
		text: 'Trying out comments along with nested.',
		replies: [],
	},
	{
		name: 'Jahnavi',
		text: 'Trying out comments along with nested.',
		replies: [
			{
				name: 'Jahnavi',
				text: 'Trying out comments along with nested.',
				replies: [
					{
						name: 'Jahnavi',
						text: 'Trying out comments along with nested.',
						replies: [],
					},
					{
						name: 'Jahnavi',
						text: 'Trying out comments along with nested.',
						replies: [],
					},
				],
			},
			{
				name: 'Jahnavi',
				text: 'Trying out comments along with nested.',
				replies: [],
			},
			{
				name: 'Jahnavi',
				text: 'Trying out comments along with nested.',
				replies: [],
			},
			{
				name: 'Jahnavi',
				text: 'Trying out comments along with nested.',
				replies: [],
			},
			{
				name: 'Jahnavi',
				text: 'Trying out comments along with nested.',
				replies: [],
			},
		],
	},
	{
		name: 'Jahnavi',
		text: 'Trying out comments along with nested.',
		replies: [],
	},
	{
		name: 'Jahnavi',
		text: 'Trying out comments along with nested.',
		replies: [
			{
				name: 'Jahnavi',
				text: 'Trying out comments along with nested.',
				replies: [
					{
						name: 'Jahnavi',
						text: 'Trying out comments along with nested.',
						replies: [],
					},
					{
						name: 'Jahnavi',
						text: 'Trying out comments along with nested.',
						replies: [],
					},
				],
			},
			{
				name: 'Jahnavi',
				text: 'Trying out comments along with nested.',
				replies: [],
			},
			{
				name: 'Jahnavi',
				text: 'Trying out comments along with nested.',
				replies: [],
			},
			{
				name: 'Jahnavi',
				text: 'Trying out comments along with nested.',
				replies: [],
			},
			{
				name: 'Jahnavi',
				text: 'Trying out comments along with nested.',
				replies: [],
			},
		],
	},
];

const CommentsContainer = () => {
	return (
		<div className="my-10">
			<div className="font-bold">Comments:</div>
			<CommentsList commentsData={commentsData} />
		</div>
	);
};

export default CommentsContainer;
