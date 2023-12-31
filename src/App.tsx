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
import _ from 'lodash';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import '@fontsource/spectral/300.css';
import '@fontsource/spectral/400.css';
import '@fontsource/spectral/500.css';
import '@fontsource/spectral/700.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#4682A9',
    },
    secondary: {
      main: '#F0997D',
    },
    error: {
      main: "#FFC6AC"
    },
    tonalOffset: 0.6
  },
  typography: {
    fontFamily: 'spectral,Roboto'
  }
});



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
  const [focusedSection, setFocusedSection] = useState("about");
  const classes = useStyle();

  const findCurrentSection = () => {
    // console.log('========')
    const distances = navItems.map((item) => {
      const sectionEle = document.getElementById(item.key);
      const distFromTop = sectionEle?.getBoundingClientRect().top;
      // console.log(`${item.key} ${distFromTop}`)
      return { key: item.key, distFromTop: Math.abs(distFromTop || 0) }
    });

    const focused = _.minBy(distances, (d) => d.distFromTop)?.key;
    // console.log("---- Focused section: ===== ", focused);


    setFocusedSection(focused || '');
  }

  const handleScroll = () => {
    findCurrentSection()
  }

  return (
    <ThemeProvider theme={theme}><div
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
                  focusedSection={focusedSection}
                />
              </div>

              <Connect />

              <Footer />
            </Stack>
          </Container>

        </Grid>


        <Grid item xs={12} sm={8} lg={8} style={{
          overflow: 'auto',
          height: '100%'
        }}
          onScroll={() => { handleScroll() }}
        >
          <Stack
            spacing={10}
            style={{
              marginTop: 82,
              flexDirection: 'column'
            }}
          >
            {navItems.map(item => <div id={item.key} key={item.key}>{item.content}</div>)}
          </Stack>
        </Grid>
      </Grid>




      {/* <Footer /> */}
    </div></ThemeProvider>

  );
}
