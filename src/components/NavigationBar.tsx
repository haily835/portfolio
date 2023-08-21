import React from "react";
import { createUseStyles } from "react-jss";
// import { Typography } from "antd";
// const { Text } = Typography;

import Typography from "@mui/material/Typography";

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
    flexDirection: "column",
    justifyContent: "space-around",
    
    // backgroundColor: "#C4C1A4D9",
    // position: "fixed",
    // width: "100vw",
  },
  navItem: {
    cursor: "pointer",
    color: '#9E9FA5',
    marginTop: 10,
    '&:hover': {
      ontWeight: "bold",
      textDecoration: "underline",
      color: 'black'
    }
  },
  selected: {
    fontWeight: "bold",
    textDecoration: "underline",
    fontSize: '20px',
    color: 'black'
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
          <Typography variant="button">{item.title}</Typography>
        </div>)
      }
    </div>
  );
}
