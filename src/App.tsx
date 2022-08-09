import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import DetailsUser from "./pages/DetailsUser";

import "./App.css";
import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <Header />
      <main>
        {/* Route to the different pages */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<DetailsUser />} />
        </Routes>
      </main>
      <Footer />
    </Fragment>
  );
}

export default App;
