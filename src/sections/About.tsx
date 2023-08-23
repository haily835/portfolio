import { Stack, Typography } from '@mui/material';
import { CheckCircleTwoTone, HeartTwoTone, SmileTwoTone, CoffeeOutlined } from '@ant-design/icons';

export default function () {
  return (
    <Stack
      spacing={2}
      style={{
        margin: `0 100px`,
      }}
    >
      <Typography>
        <CheckCircleTwoTone rev twoToneColor="#a0d911"/> After graduating from university, I started my career as a <strong>fullstack
          developer</strong>. I developed plugins on Atlassian Markets which support Jira
        user to manage their projects more effectively.
      </Typography>

      <Typography>
        <CoffeeOutlined rev twoToneColor="#ffe7ba" /> I also the maintainer a Ecomemerce website which was my capstone project
        in university with my other 2 friends. We built this with the hope of
        support small to medium bussiness to have a free tool to manage their
        business.
      </Typography>

      <Typography>
        <HeartTwoTone twoToneColor="#eb2f96" rev /> I am passionate about studying Artificial Intelligence, Web Development and designing beautiful user interfaces.
      </Typography>

      <Typography>
        <SmileTwoTone rev /> I am love to experience with different things. I'm now begin my very first steps to Canada, I'm excited to explore new things, culture, food and most importantly pursue my master
        study in one of the most developed countries. I choose to focus my study
        in Artifical Intelligence, new topics for me, hopefully I can make it.
      </Typography>
    </Stack>
  );
}
