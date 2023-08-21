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
  focusedSection: string;
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

export default function ({ focusedSection, navItems }: NavigationBarProps) {
  const classes = useStyles();
  return (
    <div className={classes.navContainer}>
      {
        navItems.map((item) => <div
          className={
            focusedSection === item.key
              ? `${classes.selected} ${classes.navItem}`
              : classes.navItem
          }
          onClick={() => {
            const section = document.getElementById(item.key);
            section?.scrollIntoView({ behavior: "smooth", block: 'center' });
          }}
        >
          <Typography variant="button">{item.title}</Typography>
        </div>)
      }
    </div>
  );
}
