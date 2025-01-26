import React from "react";
import "./Reports.css";
import { useTheme } from '@mui/material/styles';
import FormDialog from "../../components/FormDialog/FormDialog";
// import VariantDrawer from '../../components/variantDrawer/VariantDrawer';
import { Avatar, Button, Typography } from "@mui/material";
import PlaceIcon from "@mui/icons-material/Place";
import { green } from "@mui/material/colors";

import UploadIcon from "@mui/icons-material/Upload";
import FloatingButton from "../../components/FloatingButton/FloatingButton";
import ReportsTable from "../../components/ReportsTable/ReportsTable";

const Reports = ({open, setOpen}) => {
  const theme = useTheme();

  // const [drawerOpen, setDrawerOpen] = React.useState(false);
  // const handleDrawerOpen = () => {
  //   setDrawerOpen(true);
  // };

  return (
    <div className="report-body">
      {/* <VariantDrawer drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} setFormDialogOpen={setOpen} /> */}
      <FormDialog open={open} setOpen={setOpen} />
      <FloatingButton />
      <div className="report-header">
        <div className="report-header-wrapper">
          <div className="report-header-title">
            <Avatar
              sx={{ bgcolor: green[400] }}
              sizes="medium"
              className="grid-rowspan-2"
            >
              SJ
            </Avatar>
            <p className="grid-col-2">Samuel Johnson</p>
            <span className="location-info grid-col-2 grid-row-2">
              <Typography className="" sx={{ color: "grey", fontSize: 14 }}>
                Lagos, Nigeria{" "}
              </Typography>
              <PlaceIcon
                className="grid-col-2"
                sx={{
                  color: "grey",
                  fontSize: 14,
                  cursor: "pointer",
                  marginLeft: 0.3,
                }}
              />
            </span>
          </div>
          <div className="report-header-description">
            <span className="description-group">
              <p className="description-title">Souls submitted</p>
              <p className="description-sub-title">22</p>
            </span>
            <span className="description-group">
              <p className="description-title">Souls Won</p>
              <p className="description-sub-title">14</p>
            </span>
            <span className="description-group">
              <p className="description-title">Locations Reached</p>
              <p className="description-sub-title">4</p>
            </span>
          </div>
        </div>
        <Button
          onClick={setOpen}
          sx={{
            height: "min-content",
            marginLeft: "auto",
            [theme.breakpoints.down('768px')]: {
              marginLeft: "none", // Apply 'none' above 768px
            },
          }}
          variant="contained"
        >
          <UploadIcon sx={{ fontSize: 18 }} />
          <Typography sx={{ fontSize: 14 }}>Upload Report</Typography>
        </Button>
      </div>
      <div className="reports-table-container">
        <ReportsTable />
      </div>
    </div>
  );
};

export default Reports;
