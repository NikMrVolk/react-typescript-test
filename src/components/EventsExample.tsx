import React, { FC, useState } from 'react'

const EventsExample: FC = () => {
	const [value, setValue] = useState<string>('')
	const [isDrag, setIsDrag] = useState<boolean>(false)

	const handlerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value)
	}

	const handlerClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		console.log(value)
	}

	const dragHandler = (e: React.DragEvent<HTMLDivElement>) => {
		console.log('Drag')
	}

	const dragWithPreventHandler = (e: React.DragEvent<HTMLDivElement>) => {
		e.preventDefault()
		setIsDrag(true)
	}

	const leaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
		e.preventDefault()
		setIsDrag(false)
	}

	const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
		e.preventDefault()
		setIsDrag(false)
		console.log('Drop')
	}

	return (
		<div>
			<input type="text" value={value} onChange={handlerChange} />
			<button onClick={handlerClick}>Push</button>
			<div onDrag={dragHandler} draggable style={{ height: 200, width: 200, background: 'red' }}></div>
			<div
				onDrop={dropHandler}
				onDragLeave={leaveHandler}
				onDragOver={dragWithPreventHandler}
				style={{ height: 200, width: 200, background: isDrag ? 'green' : 'red', marginTop: 15 }}
			></div>
		</div>
	)
}

export default EventsExample
