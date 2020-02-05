import React from 'react'
import Package from "./Package"

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

const Depends = ({ depends, event }) => {
	if (!depends) {
		return (
			<h4 className="depends">No dependencies</h4>
		)
	}
	const depends_list = () => depends.map((element) => {
		const row = element.map((item) => {
			return (
				<Package name={item.split(' ', 1)[0]} event={event}/>
			)
		})
		return (
			<li>{row}</li>
		)
	})
	return (
		<div className="depends">
			<h4>Dependencies</h4>
			<div className="packages">
				{depends_list()}
			</div>
		</div>
	)
}

const Reverse_depends = ({ rdepends, event }) => {
	if (!rdepends) {
		return (
			<h4 className="depends">No reverse dependencies</h4>
		)
	}
	const rdepends_list = () => rdepends.map(item => {
		return (
			<li><Package name={item} event={event}/></li>
		)
	})
	return (
		<div className="depends">
			<h4>Reverse dependencies</h4>
			<div className="packages">
				{rdepends_list()}
			</div>
		</div>
	)
}

const Package_info = ({ pack, event }) => {
	return (
		<div className="info">
			<h3>{pack.Package}</h3>
			<Description rows={pack.Description}/>
			<Depends depends={pack.Depends} event={event}/>
			<Reverse_depends rdepends={pack.Reverse_Depends} event={event}/>
		</div>
	)
}

export default Package_info