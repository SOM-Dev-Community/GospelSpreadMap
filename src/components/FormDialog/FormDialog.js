import { Dialog, DialogContent, DialogTitle, useMediaQuery } from '@mui/material'
import React, { useEffect } from 'react'
import './FormDialog.css'
import CustomTooltip from '../CustomTooltip/CustomTooltip'
import CloseIcon from '@mui/icons-material/Close';

export default function FormDialog({open, setOpen}) {
    const [screen, setScreen]= React.useState(false)
    const handleClose = () => {
      setOpen(false);
    };
    const matches = useMediaQuery("(min-width:768px)");
    useEffect(()=> {
        setScreen(matches)
    }, [matches])
    const text = 'Instructions for uploading the report';
    return (
        <Dialog open= {open} onClose={handleClose} aria-labelledby="form-dialog-title" className='Form-Dialog' fullScreen={!screen}>
            <DialogContent className='Form-Dialog-Content-Wrapper'>
                <DialogTitle id="Form-Dialog-Title">
                    <p className=''>Upload Report <CustomTooltip text={text} /></p>
                    <p className='grid-col-1'>Enter Your Soul`s Contact Information</p>
                    <CloseIcon sx={{fontSize: 18, marginLeft: 'auto', cursor: 'pointer'}} onClick={handleClose} className='Form-Dialog-Close grid-row-1 grid-col-2' />
                </DialogTitle>
                <DialogContent className='Form-Dialog-Forms' id='Form-Dialog-Forms'>
                    <div className='Form-Dialog-Content-Group'>
                        <label>Title</label>
                        <input type='text' className='Form-Dialog-Content-Input' />
                    </div>
                    <div className='Form-Dialog-Content-Group'>
                        <label>Name</label>
                        <input type='text' className='Form-Dialog-Content-Input' />
                    </div>
                    <div className='Form-Dialog-Content-Group grid-colspan-2'>
                        <label>Email (optional)</label>
                        <input type='mail' className='Form-Dialog-Content-Input' />
                    </div>
                    <div className='Form-Dialog-Content-Group'>
                        <label>Phone Number</label>
                        <input type='tel' className='Form-Dialog-Content-Input' />
                    </div>
                    <div className='Form-Dialog-Content-Group'>
                        <label>Country</label>
                        <input type='text' className='Form-Dialog-Content-Input' />
                    </div>
                    <div className='Form-Dialog-Content-Group'>
                        <label>State</label>
                        <input type='text' className='Form-Dialog-Content-Input state' />
                    </div>
                    <div className='Form-Dialog-Content-Group'>
                        <label>City</label>
                        <input type='text' className='Form-Dialog-Content-Input city' />
                    </div>
                    <div className='Form-Dialog-Content-Group grid-colspan-2'>
                        <label>Address</label>
                        <input type='text' className='Form-Dialog-Content-Input' />
                    </div>
                    <div className='Form-Dialog-Content-Group'>
                        <label>Image</label>
                        <input type='file' className='Form-Dialog-Content-Input image' />
                    </div>
                    <div className='Form-Dialog-Content-Button'>
                        <button>Upload</button>
                    </div>
                </DialogContent>
            </DialogContent>
        </Dialog>
    )

}