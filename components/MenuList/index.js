import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import UpdateMenuItem from '../UpdateMenuItem';
import { orange } from '@mui/material/colors';

export default function MenuList() {
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState('paper');

  const handleClickOpen = (scrollType) => {
    setOpen(true);
    console.log('scrolltype', scrollType);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // MUI column setings
  const columns = [
    {
      field: 'id',
      headerName: 'ID',
      width: 90,
      headerClassName: 'super-app-theme--header',
      flex: 1,
    },
    {
      field: 'firstName',
      headerName: 'First name',
      width: 150,
      editable: false,
      headerClassName: 'super-app-theme--header',
      flex: 1,
    },
    {
      field: 'lastName',
      headerName: 'Last name',
      width: 150,
      editable: false,
      headerClassName: 'super-app-theme--header',
      flex: 1,
    },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      width: 110,
      editable: false,
      headerClassName: 'super-app-theme--header',
      flex: 1,
    },
    {
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      headerClassName: 'super-app-theme--header',
      flex: 1,
      sortable: false,
      width: 160,
      valueGetter: (params) =>
        `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
  ];

  // Dyanamic Data from api call
  const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  ];

  return (
    <>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection={false}
        getRowId={(row) => {
          return row.id;
        }}
        onRowClick={(params) => {
          handleClickOpen('paper');
          console.log(params.row.id);
        }}
        sx={{
          my: 10,
          borderTop: '10px solid orange',
          borderRight: '1px solid orange',
          borderLeft: '1px solid orange',
          borderBottom: '10px solid orange',
          borderRadius: 2,
          height: 400,
          '& .MuiDataGrid-row:hover': {
            backgroundColor: 'orange',
            color: 'white',
          },
        }}
      />
      <UpdateMenuItem
        scroll={scroll}
        open={open}
        handleClickOpen={handleClickOpen}
        handleClose={handleClose}
      />
    </>
  );
}
