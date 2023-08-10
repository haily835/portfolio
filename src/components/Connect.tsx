import React from "react";
import {
  GithubOutlined,
  LinkedinOutlined,
  FacebookOutlined,
  TwitterOutlined,
  MailOutlined,
} from "@ant-design/icons";
import { Space } from "antd";

export default function () {
  return (
    <Space size="large">
      <GithubOutlined
        style={{ fontSize: 20 }}
        rev=""
        onClick={() => {
          window.open("https://github.com/haily835");
        }}
      />
      <LinkedinOutlined
        style={{ fontSize: 20 }}
        rev=""
        onClick={() => {
          window.open("https://www.linkedin.com/in/hai-ly-takumi379/");
        }}
      />
      <FacebookOutlined
        style={{ fontSize: 20 }}
        rev=""
        onClick={() => {
          window.open(
            "https://www.facebook.com/profile.php?id=100058773344864"
          );
        }}
      />

      <MailOutlined
        style={{ fontSize: 20 }}
        rev=""
        onClick={() => {
          window.open("lyquochai835@gmail.com");
        }}
      />
      {/* <TwitterOutlined style={{ fontSize: 20 }} rev="" /> */}
    </Space>
  );
}
