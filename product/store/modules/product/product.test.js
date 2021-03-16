import productReducer from './product'

describe('Product Reducer', () => {
	it('Should return default state', () => {
		const newState = productReducer(undefined, {})
		expect(newState).toEqual({ loading: false, list: [], error: null })
	})
})
