import React from "react";
import { Stack, Divider, Typography } from "@mui/material";
import ExperienceCard from "../components/ExperienceCard";


const projects = [
  {
    companyName: "Retail management website",
    start: "Jul 2021",
    end: "Oct 2021",
    role: "ReactJs (Front-end), Laravel (Back-end)",
    descriptions: [
      "A web application from my graduation thesis aims at small to medium businesses.",
      "Responsible for building the frontend, backend and deployment to a VPS",
      "Backend: https://github.com/haily835/bkrm-api",
      "Frontend: https://github.com/ledang1234/bkrm_web",
    ],
  },
  {
    companyName: "Food Court website: ReactJs, MongoDB",
    start: "Nov 2021",
    end: "April 2022",
    role: "",
    descriptions: [
      "Simple website for customers to order foods",
      "https://github.com/haily835/foodcourt",
    ],
  },
];

export default function () {
  return (
    <Stack

      style={{
        margin: `30px 100px`,
        textAlign: "left",
      }}
    >
      <div>
        {projects.map((e) => (
          <>
            <ExperienceCard
              companyName={e.companyName}
              start={e.start}
              end={e.end}
              role={e.role}
              descriptions={e.descriptions}
            />
            <Divider />
          </>
        ))}
      </div>
    </Stack>
  );
}
