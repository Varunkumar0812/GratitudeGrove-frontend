import Button from "@mui/material/Button";

function HomePageButton({ children, onClick }) {
  return (
    <Button
      sx={{
        width: 200,
        backgroundColor: "#E74646",
        borderRadius: 100,
        height: 50,
        fontSize: 15,
        "&:hover": {
          backgroundColor: "#D21312",
          transform: "scale(1.05)",
          transition: "300ms",
        },
      }}
      variant="contained"
      onClick={onClick}
    >
      {children}
    </Button>
  );
}

export default HomePageButton;
