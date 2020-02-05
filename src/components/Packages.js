import React from "react"
import Package from "./Package"

const Packages = ({ packages, event }) => {
	packages.sort((a, b) => {
		return a["Package"].localeCompare(b["Package"])
	})
	const rows = () => packages.map(pack => {
		return (
			<li><Package name={pack.Package} event={event}/></li>
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