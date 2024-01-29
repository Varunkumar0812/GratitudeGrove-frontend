import { useState, useEffect } from "react";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import IconMenu from "./icon-menu";
import { IoMenu } from "react-icons/io5";

export default function TemporaryDrawer({ currSelected, onChange }) {
  const [state, setState] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const toggleDrawer = (open) => (event) => {
    setState(open);
  };

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);
    if (screenWidth > 640) {
      setState(false);
    }
  }, [screenWidth]);

  return (
    <div>
      <div>
        <Button onClick={toggleDrawer(true)}>
          <IoMenu className="text-2xl text-black" />
        </Button>
        <Drawer open={state} onClose={toggleDrawer(false)}>
          <IconMenu
            currSelected={currSelected}
            onChange={onChange}
            onClose={toggleDrawer(false)}
          />
        </Drawer>
      </div>
    </div>
  );
}
