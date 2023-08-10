import React from "react";
import { Space, Divider, Typography } from "antd";
import ExperienceCard from "../components/ExperienceCard";
const { Title } = Typography;

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
  {
    companyName: "DevSamurai Vietnam",
    start: "June 2022",
    end: "May 2023",
    role: "Junior developer",
    descriptions: [
      "Agile Roadmaps, Timeline & Product Discovery plugin for Jira (Atlassian Market). Join the team to develop the Back-end (NodeJS) and Front-end (ReactJS).",
      "Build a bot in python to automate the interaction with protocols such as Uniswap, Hash flow",
      "Build a bot in typescript to automate the listing of NFTs on Opensea, Looksrare, X2Y2, Magic Eden.",
    ],
  },
];

export default function () {
  return (
    <Space
      direction="vertical"
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
    </Space>
  );
}
