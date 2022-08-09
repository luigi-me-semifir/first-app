import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import MemberList from "./components/MemberList/MemberList";

import "./App.css";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<MemberList />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
