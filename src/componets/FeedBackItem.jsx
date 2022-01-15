import Card from './shared/Card.jsx'

function FeedBackItem({item}) {

	return (
		<Card>
			<div className='num-display'>{item.rating}</div>
			<div className='text-display'>{item.text}</div>
		</Card>
	)
}

export default FeedBackItem