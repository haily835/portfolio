/**
 * My name is Hai Ly from Vietnam. I am a fullstack developer based in Windsor, Canada.
 * I have developed plugins on Atlassian Markets
 * I also the maintainer a Ecomemerce website which was my capstone project in university with my other 2 friends.
 * We built this with the hope of support small to medium bussiness to have a free tool to manage their business
 * I am passionate about web development and especially building robust backend and beautiful interface.
 * As the rise of AI, I am currently pursue a master degree in CS (focus on AI) at Univerisity Of Windsor.
 */

import { Space, Typography } from "antd";
const { Paragraph, Title } = Typography;

export default function () {
  return (
    <Space
      direction="vertical"
      style={{
        margin: `0 100px`,
      }}
    >
      <Title>Hello, my name is Hai Ly</Title>
      <Paragraph>
        I'm Vietnamese and a fullstack developer based in Windsor, Canada.
      </Paragraph>

      <Paragraph>
        Currently, I'm pursueing a master degree in Computer Science at
        University Of Windsor.
      </Paragraph>


      <div>
        <img
          alt="avata"
          src="../assets/avata.jpeg"
          height="400"
          style={{
            borderRadius: "50%"
          }}
        />
      </div>
      <Paragraph>
        After graduating from university, I started my career as a fullstack
        developer. I developed plugins on Atlassian Markets which support Jira
        user to manage their projects more effectively.
      </Paragraph>

      <Paragraph>
        I also the maintainer a Ecomemerce website which was my capstone project
        in university with my other 2 friends. We built this with the hope of
        support small to medium bussiness to have a free tool to manage their
        business.
      </Paragraph>

      <Paragraph>
        I am passionate about web development and beautiful user interface.
      </Paragraph>

      <Paragraph>
        I am love to experience with different things. A boy from a small city
        in Vietnam now making his very first steps to Canada, I'm excited to
        explore new things, culture, food and most importantly pursue my master
        study in one of the most developed countries. I choose to focus my study
        in Artifical Intelligence, new topics for me, hopefully I will like it
      </Paragraph>
    </Space>
  );
}
