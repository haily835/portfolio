import React from "react";
import { createUseStyles } from "react-jss";

interface NavigationBarProps {
  selected: string;
}

const useStyles = createUseStyles({
  navContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 30
  },
  selected: {
    fontWeight: "bold",
    textDecoration: "underline"
  }
});

export default function ({ selected }: NavigationBarProps) {
  const classes = useStyles();
  return (
    <div className={classes.navContainer}>
      <div className={selected === "home" ? classes.selected : ""}>Home</div>
      <div className={selected === "info" ? classes.selected : ""}>Info</div>
      <div className={selected === "projects" ? classes.selected : ""}>
        Projects
      </div>
      <div className={selected === "contact-me" ? classes.selected : ""}>
        Contact me
      </div>
    </div>
  );
}
