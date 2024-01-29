import { TextField } from "@mui/material";

function TextInputField({ label, type, sx, onChange }) {
  return (
    <TextField
      id="outlined-basic"
      label={label}
      variant="outlined"
      type={type}
      onChange={onChange}
      sx={{
        width: "100%",
        marginBottom: "20px",
        "& label.Mui-focused": {
          color: "#E74646",
        },
        "& .MuiInput-underline:after": {
          borderBottomColor: "#D21312",
        },
        "& .MuiOutlinedInput-root": {
          "&:hover fieldset": {
            borderColor: "",
          },
          "&.Mui-focused fieldset": {
            borderColor: "#D21312",
          },
        },
        ...sx,
      }}
    />
  );
}

export default TextInputField;
