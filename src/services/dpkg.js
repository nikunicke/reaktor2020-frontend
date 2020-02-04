import axios from 'axios'
const baseURL = "/api/dpkg"

const getAll = () => {
	const req = axios.get(baseURL)
	return req.then(res => res.data)
}

export default { getAll }