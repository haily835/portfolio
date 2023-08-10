import React from "react";
import { Space, Typography } from "antd";

const { Text, Paragraph } = Typography;

interface ExperienceCardProps {
  companyName: string;
  start: string;
  end: string;
  role: string;
  descriptions: string[];
}

export default function ({
  companyName,
  start,
  end,
  role,
  descriptions,
}: ExperienceCardProps) {
  return (
    <Space
      direction="vertical"
      size="small"
      style={{
        textAlign: "left",
        width: "100%",
      }}
    >
      <Space
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Text strong>{companyName.toLocaleUpperCase()}</Text>
        <Text italic>{`${start} - ${end}`}</Text>
      </Space>

      <Text strong>{role}</Text>
      <Paragraph>
        <ul>
          {descriptions.map((desc) => (
            <li>{desc}</li>
          ))}
        </ul>
      </Paragraph>
    </Space>
  );
}
