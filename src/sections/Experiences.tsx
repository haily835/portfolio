import React from "react";
import { Stack, Divider, Typography } from "@mui/material";
import ExperienceCard from "../components/ExperienceCard";


const experiences = [
  {
    companyName: "Speranza Inc",
    start: "Jul 2021",
    end: "Oct 2021",
    role: "Engineering Intern",

    description: (<ul>
      <li><Typography variant="body1" gutterBottom>Kiosk application for patients and staff to interact with smart lockers. Join in building the UI using Windows Forms (.Net framework)</Typography></li>
    </ul>)
  },
  {
    companyName: "DevSamurai Vietnam",
    start: "Nov 2021",
    end: "April 2022",
    role: "Engineering Intern",
    description: (<ul>
      <li><Typography variant="body1" gutterBottom>
        Leanboard plugin on Jira and Confluence (Atlassian Market). Responsible for maintenance and adding new features
      </Typography></li>
    </ul>)
  },
  {
    companyName: "DevSamurai Vietnam",
    start: "June 2022",
    end: "May 2023",
    role: "Junior developer",
    description: (<ul>
      <li><Typography variant="body1" gutterBottom>
        Agile Roadmaps, Timeline & Product Discovery plugin for Jira (Atlassian Market). Join the team to develop the Back-end (NodeJS) and Front-end (ReactJS).
      </Typography></li>
      <li><Typography variant="body1" gutterBottom>
        Build a bot in python to automate the interaction with protocols such as Uniswap, Hash flow
      </Typography></li>
      <li><Typography variant="body1" gutterBottom>
        Build a bot in typescript to automate the listing of NFTs on Opensea, Looksrare, X2Y2, Magic Eden.
      </Typography></li>
    </ul>)
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
        {experiences.map((e) => (
          <>
            <ExperienceCard
              companyName={e.companyName}
              start={e.start}
              end={e.end}
              role={e.role}
              description={e.description}
            />
            <Divider style={{ margin: "20px 0px" }} />
          </>
        ))}
      </div>
    </Stack>
  );
}
