import { useEffect, useState } from 'react'
import Card, { CardVariant } from './components/Card'
import UserList from './components/UserList'
import { ITodo, IUser } from './types/types'
import axios from 'axios'
import { List } from './components/List'
import UserItem from './components/UserItem'
import TodoItem from './components/TodoItem'
import EventsExample from './components/EventsExample'

const App = () => {
	const [users, setUsers] = useState<IUser[]>([])
	const [todos, setTodos] = useState<ITodo[]>([])

	useEffect(() => {
		fetchUsers()
		fetchTodos()
	}, [])

	const fetchUsers = async () => {
		try {
			const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
			setUsers(response.data)
		} catch (e) {
			alert(e)
		}
	}

	const fetchTodos = async () => {
		try {
			const response = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos?_limit=10')
			setTodos(response.data)
		} catch (e) {
			alert(e)
		}
	}

	return (
		<div>
			<EventsExample />
			<Card width="200px" height="200px" variant={CardVariant.outlined} onClick={(num) => console.log('click', num)}>
				<button>123</button>
			</Card>
			{/* <UserList users={users} /> */}
			{/* <List items={users} renderItem={(user: IUser) => <UserItem key={user.id} user={user} />} /> */}
			<List items={todos} renderItem={(todo: ITodo) => <TodoItem key={todo.id} todo={todo} />} />
		</div>
	)
}

export default App
