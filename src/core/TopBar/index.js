import { useState } from "react";
import { Burger } from "./Burger";
import { Menu } from "./Menu";

export const TopBar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Burger open={open} setOpen={setOpen} />
      <Menu open={open} setOpen={setOpen} />
    </>
  );
};
