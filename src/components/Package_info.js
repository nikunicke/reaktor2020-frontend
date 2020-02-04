import React from 'react'

const Description = ({ rows }) => {
	const arr = rows.split("\n")
	const render_description = () => arr.map(row => {
		return (
			<p>{row}</p>
		)
	})
	if (render_description().length === 0) {
		return null
	}
	return (
		<div>
			{render_description()}
		</div>
	)
}

const Package_info = ({ pack }) => {
	return (
		<div className="info">
			<h2>{pack.Package}</h2>
			<Description rows={pack.Description}/>
			{/* <pre>Description: {pack.Description}</pre> */}
		</div>
	)
}

export default Package_info