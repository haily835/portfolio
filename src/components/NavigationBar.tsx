import React from "react";
import { createUseStyles } from "react-jss";
import { Typography } from "antd";
const { Text } = Typography;

interface NavigationBarProps {
  navItems: {
    title: string;
    key: string;
  }[];
  currentPage: string;
  setCurrentPage: (currentPage: string) => void;
}

const useStyles = createUseStyles({
  navContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 30,
    backgroundColor: "#C4C1A4D9",
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

export default function ({ currentPage, setCurrentPage, navItems }: NavigationBarProps) {
  const classes = useStyles();
  return (
    <div className={classes.navContainer}>
      {
        navItems.map((item) => <div
          className={
            currentPage === item.key
              ? `${classes.selected} ${classes.navItem}`
              : classes.navItem
          }
          onClick={() => { setCurrentPage(item.key); }}
        >
          <Text>{item.title}</Text>
        </div>)
      }
    </div>
  );
}
