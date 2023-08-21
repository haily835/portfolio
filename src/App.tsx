import "./styles.css";
import { useState } from "react";
import NavigationBar from "./components/NavigationBar";

import About from "./sections/About";
import Connect from "./components/Connect";
import Experiences from "./sections/Experiences";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
import Info from "./components/Info";
import { Grid, Stack } from "@mui/material";


const navItems = [
  {
    title: "About me",
    key: "about",
    content: <About />,
  },
  {
    title: "Experiences",
    key: "experience",
    content: <Experiences />,
  },
  {
    title: "Projects",
    key: "projects",
    content: <Projects />,
  },
  // {
  //   title: "Notes",
  //   key: "notes",
  //   content: <Notes />,
  // },
];
export default function App() {
  const [currentPage, setCurrentPage] = useState("about");


  return (
    <div
      className="App"
      style={{
        width: "100vw",
        backgroundColor: "#FFF6DC",
        display: "flex",
        flexDirection: "row",
        minHeight: "100vh",
      }}
    >
      <Grid container>
        <Grid item xs={12} sm={4} lg={4}>
          <Stack
            spacing={2}
            style={{
              backgroundColor: '#C4C1A4',
              padding: '40px',
              height: '100%',
            }}>
            <Info/>
            
            <NavigationBar
              navItems={navItems.map(item => ({ title: item.title, key: item.key }))}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage} />
          </Stack>
        </Grid>

        
        <Grid item xs={12} sm={8} lg={8}>
          <div
            style={{
              display: "flex",
              flex: 1,
              justifyContent: "center",
              marginTop: 82,
            }}
          >
            {navItems.find(item => item.key === currentPage)?.content}
          </div>
        </Grid>
      </Grid>




      {/* <Footer /> */}
    </div>
  );
}
