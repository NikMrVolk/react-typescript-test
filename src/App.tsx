import { useEffect, useState } from 'react'
import Card, { CardVariant } from './components/Card'
import UserList from './components/UserList'
import { IUser } from './types/types'
import axios from 'axios'

const App = () => {
	const [users, setUsers] = useState<IUser[]>([])

	useEffect(() => {
		fetchUsers()
	}, [])

	const fetchUsers = async () => {
		try {
			const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
			setUsers(response.data)
		} catch (e) {
			alert(e)
		}
	}

	return (
		<div>
			<Card width="200px" height="200px" variant={CardVariant.outlined} onClick={(num) => console.log('click', num)}>
				<button>123</button>
			</Card>
			<UserList users={users} />
		</div>
	)
}

export default App
