import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import DetailsUser from "./pages/DetailsUser";

import "./App.css";

function App() {
  return (
    <>
      <Header />
      <main>
        {/* Route to the different pages */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<DetailsUser />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
