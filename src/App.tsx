import "./styles.css";
import { useEffect, useState } from "react";
import NavigationBar from "./components/NavigationBar";

import About from "./sections/About";
import Connect from "./components/Connect";
import Experiences from "./sections/Experiences";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
import Info from "./components/Info";
import { Container, Grid, Stack } from "@mui/material";

import { createUseStyles } from "react-jss";

const useStyle = createUseStyles({
  nav: {
    display: 'block',
  },
  '@media screen and (max-width: 600px)': {
    nav: {
      display: 'none',
    }
  }
})


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
  const classes = useStyle();
  return (
    <div
      className="App"
      style={{
        width: "100vw",
        backgroundColor: "#FFF6DC",
        display: "flex",
        flexDirection: "row",
        height: "100vh",
      }}
    >
      <Grid container flex={1}>
        <Grid item xs={12} sm={4} lg={4} height="100%">
          <Container style={{
            backgroundColor: '#C4C1A4',
            height: '100%'
          }}>
            <Stack
              spacing={2}
              style={{ padding: 40 }}
            >
              <Info />
              <div className={classes.nav}>
                <NavigationBar
                  navItems={navItems.map(item => ({ title: item.title, key: item.key }))}
                  currentPage={currentPage}
                  setCurrentPage={setCurrentPage} />
              </div>



            </Stack>
          </Container>

        </Grid>


        <Grid item xs={12} sm={8} lg={8} style={{
          overflow: 'auto',
          height: '100%'
        }}>
          <div
            style={{
              display: "flex",
              flex: 1,
              justifyContent: "center",
              marginTop: 82,
              flexDirection: 'column'
            }}
          >
            {navItems.map(item => item.content)}
          </div>
        </Grid>
      </Grid>




      {/* <Footer /> */}
    </div>
  );
}
