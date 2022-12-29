import "./App.css";
import Movie from "./components/movies";

import { Home, Customers, NotFound, NavBar } from "./components/routing/index";
import { Routes, Route, redirect, Navigate } from "react-router-dom";

function App() {
  return (
    <main className="container">
        <NavBar />
      <div>
        <h1 className="text-center bg-info container-fluid pb-3">
          App Movies React JS :)
        </h1>
      </div>
      <div className="text-center  container-fluid pb-3">
    
        <Routes>
          <Route path="/movies" element={<Movie />} />
          <Route path="/" element={<Home />} />
          <Route path="customers" element={<Customers />} />
          <Route path="not-found" element={<NotFound />} />
          {/* <Redirect from="/" to="/movies" /> */}
          <Route
            path="*"
            exact
            element={<Navigate replace to="/movies" />}
          />
        </Routes>
        <hr />
      </div>
    </main>
  );
}

export default App;
