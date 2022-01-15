import {useState} from 'react'
import Header from './componets/Header.jsx'
import FeedBackList from './componets/FeedBackList.jsx'
import FeedBackItem from './componets/FeedBackItem.jsx'
import FeedBackData from './data/feedBackData.jsx'


function App() {

	const [feedback, setFeedBack] = useState(FeedBackData)
	
	return (

		<>
			<Header/>	
			<div className='container'>
				<FeedBackList feedback={feedback}/>
		 	</div>
		</>
	)
}

export default App