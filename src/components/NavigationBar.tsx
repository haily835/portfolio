import React from "react";
import { createUseStyles } from "react-jss";
import { Typography } from "antd";
const { Text } = Typography;

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
    backgroundColor: "#C4C1A4",
    position: "fixed",
    width: "100vw",
  },
  navItem: {
    cursor: "pointer",
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
        className={
          selected === "home"
            ? `${classes.selected} ${classes.navItem}`
            : classes.navItem
        }
        onClick={() => {
          setCurrentPage("home");
        }}
      >
        <Text>About</Text>
      </div>

      <div
        className={
          selected === "projects"
            ? `${classes.selected} ${classes.navItem}`
            : classes.navItem
        }
        onClick={() => {
          setCurrentPage("projects");
        }}
      >
        <Text>Experience</Text>
      </div>

      <div
        className={
          selected === "projects"
            ? `${classes.selected} ${classes.navItem}`
            : classes.navItem
        }
        onClick={() => {
          setCurrentPage("projects");
        }}
      >
        <Text>Projects</Text>
      </div>

      <div
        className={
          selected === "contact-me"
            ? `${classes.selected} ${classes.navItem}`
            : classes.navItem
        }
        onClick={() => {
          setCurrentPage("contact-me");
        }}
      >
        <Text>Notes</Text>
      </div>
    </div>
  );
}
