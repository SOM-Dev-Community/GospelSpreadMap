import React from "react";
import { styled, useTheme } from "@mui/material/styles";
import {
    Drawer as MuiDrawer,
    IconButton,
    Divider,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import UploadIcon from "@mui/icons-material/Upload";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

const drawerWidth = 240;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: "hidden",
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up("sm")]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
}));

const StyledDrawer = styled(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    position: "fixed",
    right: 0,
    boxSizing: "border-box",
    ...(open && {
        ...openedMixin(theme),
        "& .MuiDrawer-paper": openedMixin(theme),
    }),
    ...(!open && {
        ...closedMixin(theme),
        "& .MuiDrawer-paper": closedMixin(theme),
    }),
}));

export default function VariantDrawer({
    drawerOpen,
    setDrawerOpen,
    setFormDialogOpen,
}) {
    const theme = useTheme();
    const handleDrawerClose = () => {
        setDrawerOpen(false);
    };

    const handleDrawerOpen = () => {
        setDrawerOpen(true);
    };
    const handleDialogOpen = () => {
        setFormDialogOpen(true);
    };

    return (
        <StyledDrawer variant="permanent" anchor="right" open={drawerOpen}>
            <DrawerHeader>
                <IconButton onClick={drawerOpen ? handleDrawerClose : handleDrawerOpen}>
                    {drawerOpen ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                </IconButton>
            </DrawerHeader>
            <Divider />
            <List>
                {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
                    <ListItem key={text} disablePadding sx={{ display: "block" }}>
                        <ListItemButton
                            sx={{ justifyContent: drawerOpen ? "initial" : "center" }}
                        >
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText
                                primary={text}
                                sx={{ opacity: drawerOpen ? 1 : 0 }}
                            />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
            <div style={{ padding: theme.spacing(2), textAlign: "center" }}>
                <IconButton onClick={handleDialogOpen} color="primary">
                    <UploadIcon />
                </IconButton>
            </div>
        </StyledDrawer>
    );
}
