import React from "react";
import Header from "./components/Header";
import MainPage from "./components/MainPage";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <MainPage />
    </div>
  );
};

export default App;
