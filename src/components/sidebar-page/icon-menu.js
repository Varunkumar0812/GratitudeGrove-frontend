import Paper from "@mui/material/Paper";
import MenuList from "@mui/material/MenuList";
import DashboardMenuItem from "./dashboard-menu-item";
import { items } from "../../pages/dashboard-page";
import { useNavigate } from "react-router";

export default function IconMenu({ onClose, currSelected, onChange }) {
  const navigate = useNavigate();

  const handleClick = (index) => {
    onChange(index);
    console.log(index, currSelected);
    navigate(items[index - 1].url);
  };

  const renderedItems = items.map((item) => {
    const isSelected = item.id === currSelected;

    return (
      <DashboardMenuItem
        isSelected={isSelected}
        name={item.name}
        icon={isSelected ? item.icon2 : item.icon1}
        onClose={onClose}
        onClick={() => handleClick(item.id)}
      />
    );
  });

  return (
    <Paper
      sx={{
        width: 300,
        maxWidth: "100%",
        borderRadius: 0,
        boxShadow: 0,
      }}
    >
      <MenuList sx={{ padding: 0 }}>{renderedItems}</MenuList>
    </Paper>
  );
}
