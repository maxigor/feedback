import React from 'react'

function button({children, version , type , isDisabled}) {
	return (
		<button type={type} disabled={isDisabled} className={`btn`}>
			{children}
		</button>
	)
}

export default button