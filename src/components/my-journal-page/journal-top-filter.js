import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import TextInputField from "../login-page/text-input";

function JournalTopFilter() {
  return (
    <div className="flex flex-col xl:flex-row w-full bg-red-100 justify-between p-4">
      <div className="flex xl:w-1/2 items-center mb-3 xl:mr-3 xl:mb-0">
        <FormControl
          fullWidth
          sx={{
            width: "100%",
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
          }}
        >
          <InputLabel id="demo-simple-select-label">Sort By</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Sort by"
            value={""}
          >
            <MenuItem value={"Month"}>Month</MenuItem>
            <MenuItem value={"Day"}>Day</MenuItem>
            <MenuItem value={"Year"}>Year</MenuItem>
          </Select>
        </FormControl>
      </div>
      <TextInputField
        label="Search"
        type="text"
        sx={{ marginBottom: "0px", width: "100%" }}
      />
    </div>
  );
}

export default JournalTopFilter;
