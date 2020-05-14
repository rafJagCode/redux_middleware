import {createStore, applyMiddleware} from 'redux'
import timeReducer from './redux/reducer'
import {confirmationMiddleware, apiMiddleware} from './redux/middlewares'



const store = createStore(timeReducer, applyMiddleware(confirmationMiddleware,apiMiddleware))

export default store