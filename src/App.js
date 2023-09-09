import React from "react";
import "./App.css";
import MoviesContainer from "./redux/movies/components/MoviesContainer";
import MoviesForm from "./redux/movies/components/MoviesForm";
import TimeDisplayer from "./redux/time/components/TimeDisplayer";

function App() {
  return (
    <div className="App">
      <MoviesContainer />
      <MoviesForm />
      <TimeDisplayer />
    </div>
  );
}

export default App;
