import React from 'react';
import PropTypes from 'prop-types'
import { batch, useDispatch } from 'react-redux';
import { Box, Button, Card, CardContent, Grid, Typography } from '@material-ui/core'
import { onGetSummaryCovidCountryThunk, onOpenHistoryDialogSuccess } from './App.actions';

const Today = props => {
  const { country, totalConfirmed, totalDeaths, totalRecovered } = props
  const dispatch = useDispatch();

  const handleShowHistory = () => {
    batch(() => {
      dispatch(onOpenHistoryDialogSuccess({ country }))
      dispatch(onGetSummaryCovidCountryThunk({ country }))
    })
  }

  return (
    <Box m={1} pt={1}>
      <Card elevation={5}>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={2}>
              <Typography align="center" variant='h6'>
                País
              </Typography>
              <Typography align="center" variant='subtitle1'>
                {country}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Typography align="center" variant='h6'>
                Casos Confirmados
              </Typography>
              <Typography align="center" variant='subtitle1'>
                {totalConfirmed}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={2}>
              <Typography align="center" variant='h6'>
                Total de Muertes
              </Typography>
              <Typography align="center" variant='subtitle1'>
                {totalDeaths}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Typography align="center" variant='h6'>
                Total de Recuperaciones
              </Typography>
              <Typography align="center" variant='subtitle1'>
                {totalRecovered}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={2} container alignItems="center">
              <Button variant="outlined" onClick={handleShowHistory}>
                Histórico
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>  
  )
}

Today.propTypes = {
  country: PropTypes.string.isRequired,
  totalConfirmed: PropTypes.number.isRequired,
  totalDeaths: PropTypes.number.isRequired,
  totalRecovered: PropTypes.number.isRequired
}

export default Today
