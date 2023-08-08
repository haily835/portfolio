import { Space } from "antd";

export default function () {
  return (
    <Space
      direction="vertical"
      style={{
        margin: `0 100px`,
        fontFamily: "serif",
        textAlign: "left"
      }}
    >
      <div>Experience</div>
      <div>
        <div>
          <div>Jul 2021 - Oct 2021: Speranza Inc</div>
          <div>Engineering Intern</div>
          <div>
            Kiosk application for patients and staff to interact with smart
            lockers. Join in building the UI using Windows Forms (.Net
            framework)
          </div>
        </div>

        <div>
          <div>Dec 2021 - April 2021: DevSamurai Vietnam</div>
          <div>Engineering Intern</div>
          <div>
            Leanboard plugin on Jira and Confluence (Atlassian Market).
            Responsible for maintenance and adding new features
          </div>
        </div>

        <div>
          <div>June 2022 - May 2023: Junior Developer</div>
          <div>DevSamurai Vietnam</div>
          <div>
            Agile Roadmaps, Timeline & Product Discovery plugin for Jira
            (Atlassian Market). Join the team to develop the Back-end (NodeJS)
            and Front-end (ReactJS).
          </div>
          <div>
            Outsourcing Blockchain projects:
            <div>
              Build a bot in python to automate the interaction with protocols
              such as Uniswap, Hash flow
            </div>
            <div>
              Build a bot in typescript to automate the listing of NFTs on
              Opensea, Looksrare, X2Y2, Magic Eden.
            </div>
          </div>
        </div>
      </div>
    </Space>
  );
}
