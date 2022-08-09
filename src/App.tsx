import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import MemberList from "./components/MemberList/MemberList";
import DetailsUser from "./pages/DetailsUser";

import "./App.css";

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<MemberList />} />
          <Route path="/:id" element={<DetailsUser />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
