import "./styles.css";
import { useState } from "react";
import NavigationBar from "./components/NavigationBar";
import Home from "./pages/Home";
import Info from "./pages/Info";
import Connect from "./components/Connect";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
export default function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const renderContent = () => {
    switch (currentPage) {
      case "home":
        return <Home />;
      case "info":
        return <Info />;
      case "projects":
        return <Projects />;
      case "contact-me":
        return <Contact />;
    }
    return "";
  };
  return (
    <div
      className="App"
      style={{
        width: "100vw",
        backgroundColor: "#FFF6DC",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div>
        <NavigationBar selected={currentPage} setCurrentPage={setCurrentPage} />
      </div>

      <div>
        <Connect />
      </div>

      <div style={{ display: "flex", flex: 1, justifyContent: "center" }}>
        {renderContent()}
      </div>
    </div>
  );
}
