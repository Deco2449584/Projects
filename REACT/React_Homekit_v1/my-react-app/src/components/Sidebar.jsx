import { useState } from "react";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  Typography,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import DesktopWindowsIcon from "@mui/icons-material/DesktopWindows";
import BedIcon from "@mui/icons-material/Hotel";
import BathtubIcon from "@mui/icons-material/Bathtub";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import MoreIcon from "@mui/icons-material/More";
import MenuIcon from "@mui/icons-material/Menu";

const Sidebar = () => {
  const [active, setActive] = useState(false);

  return (
    <div className={`sidebar ${active ? "active" : ""}`}>
      <div className="logo_content">
        <HomeIcon />
        <Typography variant="h6" className="logo_name">
          Home
        </Typography>
        <IconButton onClick={() => setActive(!active)}>
          <MenuIcon />
        </IconButton>
      </div>
      <List className="nav">
        <ListItem button>
          <ListItemIcon>
            <DesktopWindowsIcon />
          </ListItemIcon>
          <ListItemText primary="Estudio" className="link_name" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <BedIcon />
          </ListItemIcon>
          <ListItemText primary="Habitacion Principal" className="link_name" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <BathtubIcon />
          </ListItemIcon>
          <ListItemText primary="Baño" className="link_name" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <LightbulbIcon />
          </ListItemIcon>
          <ListItemText primary="Iluminacion" className="link_name" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <MoreIcon />
          </ListItemIcon>
          <ListItemText primary="Otros" className="link_name" />
        </ListItem>
      </List>
    </div>
  );
};

export default Sidebar;
