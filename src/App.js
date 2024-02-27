import "./App.css";
import React, { useState } from "react";
import NavBar from "./Components/NavBar";
import News from "./Components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const App = () => {
  const apiKey = process.env.REACT_APP_NEWS_API;
  const [progress, setProgress] = useState(0);

  return (
    <>
      <Router>
        <NavBar />
        <LoadingBar height={5} color="#f11946" progress={progress} />
        <Routes>
          <Route
            exact
            path="/business"
            element={
              <News
                setProgress={setProgress}
                key={"business"}
                pageSize={6}
                category="business"
                api={apiKey}
              />
            }
          />
          <Route
            exact
            path="/sports"
            element={
              <News
                setProgress={setProgress}
                key={"sports"}
                pageSize={6}
                category="sports"
                api={apiKey}
              />
            }
          />
          <Route
            exact
            path="/entertainment"
            element={
              <News
                setProgress={setProgress}
                key={"entertainment"}
                pageSize={6}
                category="entertainment"
                api={apiKey}
              />
            }
          />
          <Route
            exact
            path="/health"
            element={
              <News
                setProgress={setProgress}
                key={"health"}
                pageSize={6}
                category="health"
                api={apiKey}
              />
            }
          />
          <Route
            exact
            path="/science"
            element={
              <News
                setProgress={setProgress}
                key={"science"}
                pageSize={6}
                category="science"
                api={apiKey}
              />
            }
          />
          <Route
            exact
            path="/technology"
            element={
              <News
                setProgress={setProgress}
                key={"techology"}
                pageSize={6}
                category="technology"
                api={apiKey}
              />
            }
          />
          <Route
            exact
            path="/"
            element={
              <News
                setProgress={setProgress}
                key={"general"}
                pageSize={6}
                category="general"
                api={apiKey}
              />
            }
          />
        </Routes>
      </Router>
    </>
  );
};

export default App;
