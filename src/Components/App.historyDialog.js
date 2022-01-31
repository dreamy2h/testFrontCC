import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import { DataGrid } from '@material-ui/data-grid'
import { onCloseHistoryDialogSuccess } from './App.actions';

const HistoryDialog = () => {
  const { country: rows, countryName, loading, open } = useSelector(state => state.summaryCovid)
  const dispatch = useDispatch()
  const handleCloseHistory = () => dispatch(onCloseHistoryDialogSuccess())

  const columns = [
    { field: 'id', headerName: 'ID', width: 0, hide: true },
    { field: 'active', headerName: 'Casos Activos', width: 200 },
    { field: 'confirmed', headerName: 'Casos Confirmados', width: 200 },
    { field: 'deaths', headerName: 'Muertes', width: 200 },
    { field: 'recovered', headerName: 'Recuperaciones', width: 200 },
    { field: 'date', headerName: 'Fecha', width: 200 }
  ]

  return (
    <Dialog onClose={handleCloseHistory} open={open} fullScreen>
      <DialogTitle>
        {loading ? <Skeleton /> : `Historial de ${countryName}`}
      </DialogTitle>
      <DialogContent>
        {loading ? (
          <Skeleton variant="rectangular" width="100%" height="100%" />
        ) : (
          <DataGrid
            columns={columns}
            rows={rows}
            pageSize={10}
          />
        )}
      </DialogContent>
      <DialogActions>
        <Button variant="outlined" onClick={handleCloseHistory}>
          Cerrar
        </Button>
      </DialogActions>
    </Dialog>
  )
};

export default HistoryDialog;
