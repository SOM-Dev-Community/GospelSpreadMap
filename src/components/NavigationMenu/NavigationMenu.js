import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import { green } from "@mui/material/colors";
import { Link } from "react-router-dom";
import { FormControlLabel, Switch } from "@mui/material";

export default function NavigationMenu({ visible, setVisible }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const toggleVisibility = () => {
    if (visible) {
      setVisible(false);
    } else {
      setVisible(true);
    }
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <MenuIcon sx={{ color: green[300], fontSize: 28 }} />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>
          <Link to="/dashboard" className="Link">
            DashBoard
          </Link>
        </MenuItem>
        {/* <MenuItem onClick={handleClose}>Logout</MenuItem> */}
        <MenuItem onClick={handleClose}><Link to="/login" className="Link">Login</Link> </MenuItem>
        <MenuItem onClick={handleClose}><Link to="/signup" className="Link">Signup</Link> </MenuItem>
        <MenuItem className="home-switch">
          <FormControlLabel
            control={<Switch defaultChecked onChange={toggleVisibility} />}
            label="Show Info"
          />
        </MenuItem>
      </Menu>
    </div>
  );
}
