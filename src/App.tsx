import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout/layout";
import { HomePage } from "./features/home";
import { AboutPage } from "./features/about";
import { TeamPage } from "./features/team";
// import { SchedulePage } from "./features/schedule";
import { ContactPage } from "./features/contact";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="team" element={<TeamPage />} />
        {/* <Route path="schedule" element={<SchedulePage />} /> */}
        <Route path="contact" element={<ContactPage />} />
      </Route>
    </Routes>
  );
}

export default App;
