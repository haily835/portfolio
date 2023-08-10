import React from "react";
import {
  GithubOutlined,
  LinkedinOutlined,
  FacebookOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
import { Space } from "antd";

export default function () {
  return (
    <Space size="large">
      <GithubOutlined style={{ fontSize: 20 }} rev="" />
      <LinkedinOutlined style={{ fontSize: 20 }} rev="" />
      <FacebookOutlined style={{ fontSize: 20 }} rev="" />
      <TwitterOutlined style={{ fontSize: 20 }} rev="" />
    </Space>
  );
}
