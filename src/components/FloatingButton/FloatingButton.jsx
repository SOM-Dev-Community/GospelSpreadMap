import React, { useState } from 'react';
import Fab from '@mui/material/Fab';
import ReportIcon from '@mui/icons-material/Report';
import { styled } from '@mui/material';
import GuidelinesDialog from '../GuidelinesDialog/GuidelinesDialog';

const StyledFab = styled(Fab)(({ theme }) => ({
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(8),
}));


export default function FloatingButton () {
    const [dialogOpen, setDialogOpen] = useState(false);
    const handleFabClick = () => {
        setDialogOpen(true);
    };
    
    const handleDialogClose = () => {
      setDialogOpen(false);
    };
    
    return (
      <div>
        <StyledFab color="info" aria-label="guidelines" onClick={handleFabClick}>
          <ReportIcon />
        </StyledFab>
        <GuidelinesDialog open={dialogOpen} onClose={handleDialogClose} />
      </div>
    );
  };
  
