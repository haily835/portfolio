/**
 * My name is Hai Ly from Vietnam. I am a fullstack developer based in Windsor, Canada.
 * I have developed plugins on Atlassian Markets
 * I also the maintainer a Ecomemerce website which was my capstone project in university with my other 2 friends.
 * We built this with the hope of support small to medium bussiness to have a free tool to manage their business
 * I am passionate about web development and especially building robust backend and beautiful interface.
 * As the rise of AI, I am currently pursue a master degree in CS (focus on AI) at Univerisity Of Windsor.
 */

import { Space } from "antd";

export default function () {
  return (
    <Space
      direction="vertical"
      style={{
        margin: `0 100px`,
      }}
    >
      <h1>Hai Ly</h1>
      <p>
        After graduating from university, I started my career as a fullstack
        developer. I developed plugins on Atlassian Markets which support Jira
        user to manage their projects more effectively.
      </p>

      <p>
        I also the maintainer a Ecomemerce website which was my capstone project
        in university with my other 2 friends. We built this with the hope of
        support small to medium bussiness to have a free tool to manage their
        business.
      </p>

      <p>I am passionate about web development and beautiful user interface.</p>

      <p>
        I am love to experience with different things. A boy from a small city
        in Vietnam now making his very first steps to Canada, I'm excited to
        explore new things, culture, food and most importantly pursue my master
        study in one of the most developed countries. I choose to focus my study
        in Artifical Intelligence, new topics for me, hopefully I will like it
      </p>
    </Space>
  );
}
