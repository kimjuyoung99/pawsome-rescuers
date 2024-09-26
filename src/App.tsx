import React from "react";
import Header from "./components/Header";
import MainPage from "./components/MainPage";
import styled from "styled-components";

const App: React.FC = () => {
  return (
    <AppContainter >
      <Header />
      <MainPage />
    </AppContainter>
  );
};

export default App;
//npm i styled-components

const AppContainter = styled.div`
    background-color: skyblue;
    min-height: 100vh;
`