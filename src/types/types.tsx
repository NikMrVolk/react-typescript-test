export interface IWithId {
	id: number
}

export interface IAddress {
	street: string
	city: string
	zipcode: string
}

export type IUser = IWithId & {
	name: string
	email: string
	address: IAddress
}

export type ITodo = IWithId & {
	userId: number
	title: string
	completed: boolean
}
