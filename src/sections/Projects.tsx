import React from "react";
import { Stack, Divider, Typography, Button } from "@mui/material";
import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    projectName: "Retail management website",
    start: "Jul 2021",
    end: "Oct 2021",
    technologies: [
      'Laravel', 'ReactJS', "MySQL", "PHP", "Linux"
    ],
    projectLinks: [
      "https://github.com/haily835/bkrm-api",
      "https://github.com/ledang1234/bkrm_web"
    ],
    projectImages: [
      "../assets/bkrm_1.png",
      "../assets/bkrm_2.png",
      "../assets/bkrm_3.png",
      "../assets/bkrm_4.png",
      "../assets/bkrm_5.png",
      "../assets/bkrm_6.png",
    ],
    description: (<>
      <Typography variant="body1" gutterBottom component="div">
        A web application from my graduation thesis aims at small to medium businesses.
      </Typography>
      <Typography variant="body1" gutterBottom>
        Responsible for building the frontend, backend and deployment to a VPS
      </Typography>

    </>)
  },
  {
    projectName: "Food Court website",
    start: "Nov 2021",
    end: "April 2022",
    description: (<>
      <Typography variant="body1" gutterBottom component="div">
        Simple website for customers to order foods
      </Typography>
    </>),
    technologies: [
      'NodeJs', 'ReactJS', "MongoDB", "Heroku"
    ],
    projectLinks: ["https://github.com/haily835/foodcourt"],
    projectImages: [
      "../assets/foodcourt_1.png",
      "../assets/foodcourt_2.png",
      "../assets/foodcourt_3.png",
      "../assets/foodcourt_4.png",
      "../assets/foodcourt_5.png",
    ]
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
        {projects.map((p) => (
          <>
            <ProjectCard {...p} />
            <Divider style={{ margin: "20px 0px" }} />
          </>
        ))}
      </div>
    </Stack>
  );
}
