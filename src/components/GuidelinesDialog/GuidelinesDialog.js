import React from 'react';
import './GuidelinesDialog.css'
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';


const GuidelinesDialog = ({ open, onClose }) => {
  return (
    <Dialog open={open} onClose={onClose} aria-labelledby="guidelines-dialog-title">
      <DialogTitle id="guidelines-dialog-title">Guidelines</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Here are the guidelines you need to follow:
          <ul>
            <li>1. Images must have a dscripitive Information on the location</li>
            <li>2. Images of the location Must also be included for verification</li>
            <li>3. Images sent must match the locations given within the reports for proper tracking and validation</li>
          </ul>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default GuidelinesDialog;
