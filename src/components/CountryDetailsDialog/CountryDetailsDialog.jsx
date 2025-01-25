import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  List,
  ListItem,
  ListItemText,
  LinearProgress,
  Box,
  Divider,
} from "@mui/material";
import './CountryDetailsDialog.css'

const CountryDetailsDialog = ({ open, onClose, country }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <div className="dialog-container">
        <DialogTitle sx={{lineHeight: 1.1, padding: 3}}>{country?.country || "Country Details"}</DialogTitle>
        <Divider/>
        <div className="dialog-wrapper">
          <DialogContent>
            {country ? (
              <List>
                {country.states.map((state, index) => (
                  <ListItem key={index} sx={{flexDirection: "row", gap: 5, justifyContent:"space-between", width: "100%"}}>
                    <ListItemText
                      primary={state.state}
                      secondary={`Reach: ${state.reachPercentage}%`}
                      sx={{whiteSpace:"nowrap", marginRight: 10}}
                    />
                    <Box sx={{width: '50px', marginLeft: 'auto', justifyContent: 'flex-start'}}>
                      <LinearProgress variant="determinate" value={state.reachPercentage} 
                        sx={{
                          height: 5,
                          borderRadius: 5,
                          "& .MuiLinearProgress-bar": {
                            backgroundColor: "#3f51b5", // Customize the bar color
                          },
                        }}
                      />

                    </Box>
                  </ListItem>
                ))}
              </List>
            ) : (
              <p>No data available</p>
            )}
          </DialogContent>
        </div>
      </div>
    </Dialog>
  );
};

export default CountryDetailsDialog;
