import { makeActionCreator } from "../config/store/utils"
import { getSummaryCovid, getSummaryCovidCountry } from "../Services/SummaryCovid"

export const GET_SUMMARY_COVID = 'GET_SUMMARY_COVID'
export const GET_SUMMARY_COVID_ERROR = 'GET_SUMMARY_COVID_ERROR'
export const GET_SUMMARY_COVID_SUCCESS = 'GET_SUMMARY_COVID_SUCCESS'
export const onGetSummaryCovid = makeActionCreator(GET_SUMMARY_COVID)
export const onGetSummaryCovidError = makeActionCreator(GET_SUMMARY_COVID_ERROR, 'payload')
export const onGetSummaryCovidSuccess = makeActionCreator(GET_SUMMARY_COVID_SUCCESS, 'payload')

export const onGetSummaryCovidThunk = () => async dispatch => {
  dispatch(onGetSummaryCovid())

  try {
    const data = await getSummaryCovid()

    const today = data?.payload?.map(item => ({
      id: item.ID,
      country: item.Country,
      totalConfirmed: item.TotalConfirmed,
      totalDeaths: item.TotalDeaths,
      totalRecovered: item.TotalRecovered
    }))
    return dispatch(onGetSummaryCovidSuccess({ today }))
  } catch (error) {
    return dispatch(onGetSummaryCovidError({ error }))
  }
}

export const OPEN_HISTORY_DIALOG_SUCCESS = 'OPEN_HISTORY_DIALOG_SUCCESS'
export const onOpenHistoryDialogSuccess = makeActionCreator(OPEN_HISTORY_DIALOG_SUCCESS)

export const CLOSE_HISTORY_DIALOG_SUCCESS = 'CLOSE_HISTORY_DIALOG_SUCCESS'
export const onCloseHistoryDialogSuccess = makeActionCreator(CLOSE_HISTORY_DIALOG_SUCCESS)

export const GET_SUMMARY_COVID_COUNTRY = 'GET_SUMMARY_COVID_COUNTRY'
export const GET_SUMMARY_COVID_COUNTRY_ERROR = 'GET_SUMMARY_COVID_COUNTRY_ERROR'
export const GET_SUMMARY_COVID_COUNTRY_SUCCESS = 'GET_SUMMARY_COVID_COUNTRY_SUCCESS'
export const onGetSummaryCovidCountry = makeActionCreator(GET_SUMMARY_COVID_COUNTRY)
export const onGetSummaryCovidCountryError = makeActionCreator(GET_SUMMARY_COVID_COUNTRY_ERROR, 'payload')
export const onGetSummaryCovidCountrySuccess = makeActionCreator(GET_SUMMARY_COVID_COUNTRY_SUCCESS, 'payload')

export const onGetSummaryCovidCountryThunk = payload => async dispatch => {
  dispatch(onGetSummaryCovid())

  try {
    const data = await getSummaryCovidCountry({ country: payload.country })

    const country = data?.payload?.map(item => ({
      id: item.ID,
      active: item.Active,
      confirmed: item.Confirmed,
      deaths: item.Deaths,
      recovered: item.Recovered,
      date: item.Date
    }))
    return dispatch(onGetSummaryCovidCountrySuccess({ country, countryName: payload.country }))
  } catch (error) {
    return dispatch(onGetSummaryCovidCountryError({ error }))
  }
}