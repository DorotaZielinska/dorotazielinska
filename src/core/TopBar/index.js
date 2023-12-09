import { useState } from "react";
import { Burger } from "./Burger/burger";
import { Menu } from "./Menu/menu";

export const TopBar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Burger open={open} setOpen={setOpen} />
      <Menu open={open} setOpen={setOpen} />
    </>
  );
};
