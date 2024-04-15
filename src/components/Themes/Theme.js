"use client";
import { ThemeProvider } from "next-themes";
import { useEffect, useState } from "react";
import DarkLight from "./DarkLight";

const Themes = ({ children }) => {
  const [state, setState] = useState(false);

  useEffect(() => {
    setState(true);
  }, []);

  if (!state) {
    return null;
  }

  return (
    <ThemeProvider attribute="class">
      <DarkLight></DarkLight>
      {children}
    </ThemeProvider>
  );
};

export default Themes;
