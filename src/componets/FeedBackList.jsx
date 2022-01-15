import FeedBackItem from './FeedBackItem.jsx'

function FeedBackList({feedback}) {
	if (!feedback || feedback.length === 0) {
		return <p>No Feedback Yet</p>
	}

	return (
		<div className='feedback-list'>
			{feedback.map((item) => (
				<FeedBackItem key={item.id} item={item} />
			))}
		</div>
	)


}

export default FeedBackList