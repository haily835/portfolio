import React from "react";
import {
  GithubOutlined,
  LinkedinOutlined,
  FacebookOutlined,
  TwitterOutlined
} from "@ant-design/icons";
import { Space } from "antd";

export default function () {
  return (
    <Space size="large">
      <GithubOutlined style={{ fontSize: 20 }} />
      <LinkedinOutlined style={{ fontSize: 20 }} />
      <FacebookOutlined style={{ fontSize: 20 }} />
      <TwitterOutlined style={{ fontSize: 20 }} />
    </Space>
  );
}
