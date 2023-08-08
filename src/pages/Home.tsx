/**
 * My name is Hai Ly from Vietnam. I am a fullstack developer based in Windsor, Canada.
 * I have developed plugins on Atlassian Markets
 * I also the maintainer a Ecomemerce website which was my capstone project in university with my other 2 friends.
 * We built this with the hope of support small to medium bussiness to have a free tool to manage their business
 *
 * I am passionate about web development and especially building robust backend and beautiful interface.
 * As the rise of AI, I am currently pursue a master degree in CS (focus on AI) at Univerisity Of Windsor.
 */

import { Space } from "antd";
import React from "react";

export default function () {
  return (
    <Space size="large">
      <div>
        <div>
          <h1>Hello, my name is Hai Ly</h1>
        </div>
        <div>
          I'm Vietnamese and a fullstack developer based in Windsor, Canada.
        </div>

        <div>
          Currently, I'm pursueing a master degree in Computer Science at
          University Of Windsor.
        </div>
      </div>

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
    </Space>
  );
}
