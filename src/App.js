import {useState} from 'react'
import Header from './componets/Header.jsx'
import FeedBackList from './componets/FeedBackList.jsx'
import FeedBackItem from './componets/FeedBackItem.jsx'
import FeedBackData from './data/feedBackData.jsx'
import FeedbackStats from './componets/FeedbackStats.jsx'
import FeedbackForm from './componets/FeedbackForm.jsx'

function App() {

	const [feedback, setFeedBack] = useState(FeedBackData)

	const deleteFeedBack = (id) => {
		if (window.confirm("Voce quer mesmo deletar?")){
			setFeedBack(feedback.filter((item) => item.id !== id))
		}
	}

	return (

		<>
			<Header/>	
			<div className='container'>
				<FeedbackForm />
				<FeedbackStats feedback={feedback}/>
				<FeedBackList feedback={feedback} handleDelete={deleteFeedBack}/>
		 	</div>
		</>
	)
}

export default App