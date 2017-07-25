import { combineReducers } from 'redux'
import { routerReducer as routing } from 'preact-router-redux'
import HomeReducer from './homeReducer'

const rootReducer = combineReducers({    
  home: HomeReducer,
  routing
})

export default rootReducer
