import React from "react";
import { Stack, Typography, Chip } from '@mui/material'
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";


interface ExperienceCardProps {
  companyName: string;
  start: string;
  end: string;
  role: string;
  description: ReactJSXElement;
  technologies?: string[];
}

export default function ({
  companyName,
  start,
  end,
  role,
  description,
  technologies,
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
        <Typography variant="h6" gutterBottom color="primary.dark"><strong>{companyName.toLocaleUpperCase()}</strong></Typography>
        <Typography variant="subtitle2" gutterBottom>{`${start} - ${end}`}</Typography>
      </Stack>

      <Typography variant="subtitle1" gutterBottom>{role}</Typography>
      
      {description}

      <Stack direction="row" spacing={2}>
        {technologies?.map((t => <Chip label={t} variant="filled" size="small" key={t} color="error"/>))}
      </Stack>
    </Stack>
  );
}
