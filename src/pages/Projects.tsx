import React from "react";
import { Space, Divider, Typography } from "antd";
import ExperienceCard from "../components/ExperienceCard";
const { Title } = Typography;

const experiences = [
  {
    companyName: "Speranza Inc",
    start: "Jul 2021",
    end: "Oct 2021",
    role: "Engineering Intern",
    descriptions: [
      "Kiosk application for patients and staff to interact with smart lockers. Join in building the UI using Windows Forms (.Net framework)",
    ],
  },
  {
    companyName: "DevSamurai Vietnam",
    start: "Nov 2021",
    end: "April 2022",
    role: "Engineering Intern",
    descriptions: [
      "Leanboard plugin on Jira and Confluence (Atlassian Market). Responsible for maintenance and adding new features",
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
        margin: `0 100px`,
        textAlign: "left",
      }}
    >
      <Divider orientation="left" orientationMargin="0">
        <Title>Experience</Title>
      </Divider>
      <div>
        {experiences.map((e) => (
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
