import {useState} from 'react'
import Card from './shared/Card'

function FeedbackForm() {
	const [text , setText] = useState('')
	const handleTextChange = (e) => {
		setText(e.target.value)
	}

	return (
		<Card>
			<form> 
				<h2>Como voce quer avaliar nosso servico?</h2>
				<div className='input-group'>
					<input 
					onChange={handleTextChange}
					type="text" 
					placeholder="Escreve um review" 
					value={text}/>
					
					<button type='submit'>Enviar</button>
				</div>
			</form>
		</Card>
	)
}

export default FeedbackForm