import { MenuItem, ListItemIcon, ListItemText } from "@mui/material";

function DashboardMenuItem({ name, icon, isSelected, onClose, onClick }) {
  const handleClick = () => {
    if (onClose) {
      onClose();
    }
    onClick();
  };

  return (
    <MenuItem
      sx={{
        height: 50,
        backgroundColor: isSelected ? "#D21312" : "#fca5a5",
        color: isSelected ? "white" : "black",
        "&:hover": {
          backgroundColor: "#E74646",
        },
      }}
      onClick={handleClick}
    >
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText>{name}</ListItemText>
    </MenuItem>
  );
}

export default DashboardMenuItem;
