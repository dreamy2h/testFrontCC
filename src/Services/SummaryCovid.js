export const getSummaryCovid = () => {
  return fetch(
    'http://localhost/test/public/CSummaryCovid/today'
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
    `http://localhost/test/public/CSummaryCovid/country/${country}`
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