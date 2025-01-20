import React from 'react'
import './Report.css'
import FormDialog from '../../components/FormDialog/FormDialog'
import { Button } from '@mui/material';

const Report = () => {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  
  return (
    <div classname="report">
      <FormDialog open={open} setOpen={setOpen}/>
      <Button variant= "outlined" onClick={handleClickOpen}>Upload Report</Button>
      <div classname= "reports-wrapper"></div>
      <div classname= "reports-drawer">

      </div>
    </div>
  )
}
export default Report
