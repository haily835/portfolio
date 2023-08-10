import React from "react";
import { createUseStyles } from "react-jss";
import Connect from "./Connect";
import { Space } from "antd";

const useStyles = createUseStyles({
  container: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#000",
    color: "#fff",
    padding: 30,
    justifyContent: "space-between",
  },
});

export default function () {
  const classes = useStyles();
  return (
    <Space className={classes.container}>
      <div>
        <div>Hai Ly</div>
        <div>Windsor, Ontario, Canada</div>
        <div>Di An, Binh Duong, Vietnam</div>
        <div>
          <Connect />
        </div>
      </div>
      <div>
        <div>Email: lyquochai835@gmail.com</div>
        <div>(+84) 847377379</div>
        <div>© Hai Ly. All rights reserved.</div>
      </div>
    </Space>
  );
}
