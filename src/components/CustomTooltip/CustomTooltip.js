import React from 'react';
import { Tooltip, tooltipClasses } from '@mui/material';
import { styled } from '@mui/material/styles';
import InfoIcon from '@mui/icons-material/Info';

const HtmlTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: '#f5f5f9',
    color: 'rgba(0, 0, 0, 0.87)',
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: '1px solid #dadde9',
  },
}));

const CustomTooltip = ({ text }) => {
  return (
    <HtmlTooltip title={text} arrow>
      <InfoIcon sx={{ cursor: 'pointer', fontSize: 'inherit' }} />
    </HtmlTooltip>
  );
};

export default CustomTooltip;
