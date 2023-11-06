import Card, { CardVariant } from './components/Card'

const App = () => {
	return (
		<div>
			<Card width="200px" height="200px" variant={CardVariant.outlined} onClick={(num) => console.log('click', num)}>
				<button>123</button>
			</Card>
		</div>
	)
}

export default App
