import React from "react"

const Package = ({ name, event }) => {
	return (
		<li><button onClick={() => event(name)}>{name}</button></li>
	)
}

const Packages = ({ packages, event }) => {
	packages.sort((a, b) => {
		return a["Package"].localeCompare(b["Package"])
	})
	const rows = () => packages.map(pack => {
		return (
			<Package name={pack.Package} event={event}/>
		)
	})
	if (rows().length === 0) {
		return (
			<div>
				<p>No Packages found</p>
			</div>
		)
	}
	return (
		<div className="sidebar">
			{rows()}
		</div>
	)
}

export default Packages