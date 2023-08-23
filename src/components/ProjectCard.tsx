import React from "react";
import { Stack, Typography, Chip, Container, Box } from '@mui/material'
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import ImageCarosel from "./ImageCarosel";


interface ProjectCardProps {
    projectName: string;
    start: string;
    end: string;
    projectLinks: string[];
    projectImages: string[];
    description: ReactJSXElement;
    technologies?: string[];
}

export default function ({
    projectName,
    start,
    end,
    projectLinks,
    projectImages,
    description,
    technologies,
}: ProjectCardProps) {
    return (
        <Stack
            style={{
                textAlign: "left",
                width: "100%",
            }}
            spacing={2}
        >
            <Stack
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                }}
                direction="row"
            >
                <Typography variant="h6" gutterBottom color="primary.dark"><strong>{projectName.toLocaleUpperCase()}</strong></Typography>
                <Typography variant="subtitle2" gutterBottom>{`${start} - ${end}`}</Typography>
            </Stack>

            {description}

            <ul>
                {projectLinks.map(l =>
                    <li><Typography style={{ cursor: 'pointer', textDecoration: 'underline' }} variant="subtitle1" color="info.dark" gutterBottom onClick={() => window.open(l)}>{l}</Typography></li>)}
            </ul>




            <Stack direction="row" spacing={2}>
                {technologies?.map((t => <Chip label={t} variant="filled" size="small" key={t} color="error" />))}
            </Stack>

            <Box height={300}>
                {projectImages.length ? <ImageCarosel imageUrls={projectImages} /> : null}
            </Box>
        </Stack>
    );
}
