export const getSummaryCovid = () => {
  return fetch(
    'http://localhost/testBackCC/public/CSummaryCovid/today'
  ).then(
    blob => blob.json()
  ).then(data => {
      return data
    }
  ).catch(e => {
      return e
    }
  )
}

export const getSummaryCovidCountry = ({ country }) => {
  return fetch(
    `http://localhost/testBackCC/public/CSummaryCovid/country/${country}`
  ).then(
    blob => blob.json()
  ).then(data => {
      return data
    }
  ).catch(e => {
      return e
    }
  )
}