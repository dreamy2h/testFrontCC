import {
  GET_SUMMARY_COVID,
  GET_SUMMARY_COVID_ERROR,
  GET_SUMMARY_COVID_SUCCESS,
  OPEN_HISTORY_DIALOG_SUCCESS,
  CLOSE_HISTORY_DIALOG_SUCCESS,
  GET_SUMMARY_COVID_COUNTRY,
  GET_SUMMARY_COVID_COUNTRY_ERROR,
  GET_SUMMARY_COVID_COUNTRY_SUCCESS
} from './App.actions'

const initialState = {
  today: [],
  loading: false,
  error: false,
  open: false,
  country: [],
  countryName: ''
}

const summaryCovidReducer = (state = initialState, { payload, type }) => {
  switch (type) {
    case GET_SUMMARY_COVID: {
      return { ...state, loading: true, error: false }
    }
    case GET_SUMMARY_COVID_ERROR: {
      return { ...state, loading: false, error: true }
    }
    case GET_SUMMARY_COVID_SUCCESS: {
      return {
        ...state,
        today: payload.today,
        loading: false,
        error: false
      }
    }
    case OPEN_HISTORY_DIALOG_SUCCESS: {
      return {
        ...state,
        open: true
      }
    }
    case CLOSE_HISTORY_DIALOG_SUCCESS: {
      return {
        ...state,
        open: false
      }
    }
    case GET_SUMMARY_COVID_COUNTRY: {
      return { ...state, loading: true, error: false }
    }
    case GET_SUMMARY_COVID_COUNTRY_ERROR: {
      return { ...state, loading: false, error: true }
    }
    case GET_SUMMARY_COVID_COUNTRY_SUCCESS: {
      return {
        ...state,
        country: payload.country,
        countryName: payload.countryName,
        loading: false,
        error: false
      }
    }
    default: {
      return state
    }
  }
  }
  
  export default summaryCovidReducer