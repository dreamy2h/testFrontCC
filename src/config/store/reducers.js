import { combineReducers } from 'redux'
import summaryCovidReducer from '../../Components/App.reducer'

export default combineReducers({
  summaryCovid: summaryCovidReducer
})