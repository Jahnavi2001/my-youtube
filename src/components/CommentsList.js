import React from 'react';
import Comment from './Comment';

const CommentsList = ({ commentsData }) => {
	return (
		<div>
			{commentsData.map((c, index) => (
				<div key={index}>
					<Comment name={c.name} text={c.text} />
					<div className="pl-8 border-l-2 border-gray-400">
						<CommentsList commentsData={c.replies} />
					</div>
				</div>
			))}
		</div>
	);
};

export default CommentsList;
