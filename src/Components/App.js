import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Grid, TextField, Typography } from '@material-ui/core'
import Today from './App.today'
import { onGetSummaryCovidThunk } from './App.actions'
import HistoryDialog from './App.historyDialog'

const App = () => {
  const dispatch = useDispatch()
  const { today } = useSelector(state => state.summaryCovid)
  const [todayCovid, setTodayCovid] = useState([])
  const [value, setValue] = useState("")

  const handleChange = e => {
    setValue(e.target.value)
  }

  const handleSearch = () => {
    if (value === "") {
      return setTodayCovid(today)
    }
    setTodayCovid(today.filter(item => item.country.toLowerCase() === value.toLowerCase()))
  }

  const handleClear = () => {
    setValue("");
    return setTodayCovid(today)
  }

  useEffect(() => {
    dispatch(onGetSummaryCovidThunk())
  }, []);

  useEffect(() => {
    setTodayCovid(today)
  }, [today]);

  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography align="center" variant="h4">Casos COVID-19 de hoy</Typography>
      </Grid>
      <Grid item xs={12} container justifyContent="flex-end">
        <TextField onChange={handleChange} value={value} variant="outlined" />
        <Button color="primary" onClick={handleSearch} variant="outlined">
          Buscar
        </Button>
        <Button onClick={handleClear} variant="outlined">
          Limpiar
        </Button>
      </Grid>
      <Grid item xs={12}>
        {todayCovid && todayCovid.length > 0 && todayCovid.map(item => (
          <Today
            country={item.country}
            key={item.id}
            totalConfirmed={item.totalConfirmed}
            totalDeaths={item.totalDeaths}
            totalRecovered={item.totalRecovered}
          />
        ))}
      </Grid>
      <HistoryDialog />
    </Grid>
  )
}

export default App;
