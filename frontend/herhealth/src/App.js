// App.js
import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/SignUp";
import useToken from "./components/useToken";
import Home from "./components/Home";
import PCOSPredictionForm from "./components/Pcos-form";
import PeriodTrackerPage from "./components/PeriodTracker/PeriodTrackerPage";
import ExerciseSuggestor from "./components/ExerciseSuggestor/ExerciseSuggestor";
import DietPlanner from "./components/DietPlanner/DietPlanner";
import GyanoHelp from "./components/GyanoHelp/GyanoHelp";
import DialogflowChatbot from "./components/DialogflowChatbot";

import "./App.css";

function App() {
  const { token, setToken } = useToken();

  return (
    <BrowserRouter>
      {token ? <DialogflowChatbot /> : null}{" "}
      {/* Conditionally render DialogflowChatbot */}
      <Routes>
        <Route path="/" element={<Login setToken={setToken} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login setToken={setToken} />} />
        <Route path="/home" element={token ? <Home /> : <Navigate to="/" />} />
        <Route
          path="/self-diagnosis"
          element={token ? <PCOSPredictionForm /> : <Navigate to="/" />}
        />
        <Route
          path="/period-tracker"
          element={token ? <PeriodTrackerPage /> : <Navigate to="/" />}
        />
        <Route
          path="/exercise-suggestor"
          element={token ? <ExerciseSuggestor /> : <Navigate to="/" />}
        />
        <Route
          path="/diet-planner"
          element={token ? <DietPlanner /> : <Navigate to="/" />}
        />
        <Route
          path="/gyano-help"
          element={token ? <GyanoHelp /> : <Navigate to="/" />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
