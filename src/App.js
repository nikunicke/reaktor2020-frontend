import React, { useState, useEffect } from 'react';
import Packages from "./components/Packages"
import Package_info from "./components/Package_info"
import dpkg_service from "./services/dpkg"

const App = (props) => {
	const [packages, setPackages] = useState([])
	const [pack, setPack] = useState(null)
	useEffect(() => {
		dpkg_service.getAll().then(packages => setPackages(packages))
	}, [])
	const handleClick = async (name) => {
		const a = await packages.find(pack => pack.Package === name)
		if (!a)
			return
		setPack(a)
	}
	return (
		<div>
			<h2>Packages</h2>
				<Packages packages={packages} event={handleClick}/>
				{pack === null ?
					null :
					<Package_info pack={pack} event={handleClick}/>
				}
		</div>
	)
}

export default App