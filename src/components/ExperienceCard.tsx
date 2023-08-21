import React from "react";
// import { Space, Typography } from "antd";

// const { Text, Paragraph } = Typography;
import { Stack, Typography } from '@mui/material'


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
    <Stack

      style={{
        textAlign: "left",
        width: "100%",
      }}
    >
      <Stack
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
        direction="row"
      >
        <Typography variant="h6" gutterBottom><strong>{companyName.toLocaleUpperCase()}</strong></Typography>
        <Typography variant="subtitle2" gutterBottom>{`${start} - ${end}`}</Typography>
      </Stack>

      <Typography variant="subtitle1" gutterBottom>{role}</Typography>

      <ul>
        {descriptions.map((desc) => (
          <li><Typography variant="body1" gutterBottom>{desc}</Typography></li>
        ))}
      </ul>

    </Stack>
  );
}
