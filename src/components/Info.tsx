import React from "react";
// import { Typography } from "antd";
// const { Title, Text } = Typography;

import Typography from '@mui/material/Typography';


export default function () {
    return (<>
        <div>
            <img
                alt="avata"
                src="../assets/avata.jpeg"
                height="150"
                style={{
                    borderRadius: "50%"
                }}
            />
        </div>
        <Typography variant="h3">Hai Ly</Typography>

        <Typography variant="body1">
            I'm a fullstack developer based in <strong>Windsor, Ontario</strong>. Currently, I'm pursueing a master degree in Computer Science at 
            <strong> University Of Windsor</strong>.
        </Typography>
    </>)
};