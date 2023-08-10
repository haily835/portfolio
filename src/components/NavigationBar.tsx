import React from "react";
import { createUseStyles } from "react-jss";

interface NavigationBarProps {
  selected: string;
  setCurrentPage: (currentPage: string) => void;
}

const useStyles = createUseStyles({
  navContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 30,
  },
  selected: {
    fontWeight: "bold",
    textDecoration: "underline",
  },
});

export default function ({ selected, setCurrentPage }: NavigationBarProps) {
  const classes = useStyles();
  return (
    <div className={classes.navContainer}>
      <div
        className={selected === "home" ? classes.selected : ""}
        onClick={() => {
          setCurrentPage("home");
        }}
      >
        Home
      </div>
      <div
        className={selected === "info" ? classes.selected : ""}
        onClick={() => {
          setCurrentPage("info");
        }}
      >
        Info
      </div>
      <div
        className={selected === "projects" ? classes.selected : ""}
        onClick={() => {
          setCurrentPage("projects");
        }}
      >
        Projects
      </div>
      <div
        className={selected === "contact-me" ? classes.selected : ""}
        onClick={() => {
          setCurrentPage("contact-me");
        }}
      >
        Contact me
      </div>
    </div>
  );
}
