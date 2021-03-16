import ApiServices from 'services/api.service'

// Actions
export const LOAD = 'product/LOAD'
export const LOAD_SUCCESS = 'product/LOAD_SUCCESS'
export const LOAD_FAIL = 'product/LOAD_FAIL'

//initial state
const initialState = {
  loading: false,
  list: [],
  error: null,
}

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOAD:
      return {
        ...state,
        loading: true,
      }
    case LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        list: action.result.products,
        error: null,
      }
    case LOAD_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,
      }
    default:
      return state
  }
}

// Action Creators
export function load() {
  return { type: LOAD }
}
function loadSuccess(result) {
  return { type: LOAD_SUCCESS, result }
}
function loadFail(error) {
  return { type: LOAD_FAIL, error }
}
// side effects, only as applicable
export function getProducts() {
  return async dispatch => {
    try {
      dispatch(load())
      const response = await ApiServices.get('product')
      console.log(response);
      dispatch(loadSuccess(response.data))
    } catch (error) {
      console.log(error);
      dispatch(loadFail(error))
    }
  }
}