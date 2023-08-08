import "./styles.css";
import NavigationBar from "./components/NavigationBar";
import Home from "./pages/Home";
import Info from "./pages/Info";
import Connect from "./components/Connect";
import Projects from "./pages/Projects";

export default function App() {
  return (
    <div
      className="App"
      style={{
        height: "100vh",
        width: "100vw",
        backgroundColor: "#FFF6DC",
        display: "flex",
        flexDirection: "column"
      }}
    >
      <div>
        <NavigationBar selected="projects" />
      </div>

      <div>
        <Connect />
      </div>

      <div style={{ display: "flex", flex: 1, justifyContent: "center" }}>
        <Projects />
      </div>
    </div>
  );
}
