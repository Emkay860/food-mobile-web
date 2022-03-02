import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import UpdateMenuForm from './UpdateMenuForm';

export default function UpdateMenuItem({ scroll, open, handleClose }) {
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="update-dialog-title"
        aria-describedby="update-dialog-description"
        maxWidth="xs"
      >
        <DialogTitle id="update-dialog-title">Update Item</DialogTitle>
        <DialogContent dividers={scroll === 'paper'}>
          <UpdateMenuForm />
        </DialogContent>
      </Dialog>
    </div>
  );
}
