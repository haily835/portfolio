import "./styles.css";
import { useState } from "react";
import NavigationBar from "./components/NavigationBar";

import About from "./pages/About";
import Connect from "./components/Connect";
import Experiences from "./pages/Experiences";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

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
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <div>
        <NavigationBar navItems={navItems.map(item => ({ title: item.title, key: item.key }))} currentPage={currentPage} setCurrentPage={setCurrentPage} />
      </div>

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

      <Footer />
    </div>
  );
}
