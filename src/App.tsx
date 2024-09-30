import React from "react";
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import styled from "styled-components";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/common/Header";
import MainPage from "./pages/MainPage";
import GlobalStyles from "./GlobalStyles";
import AnimalList from "./pages/AnimalList";

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <>
    <GlobalStyles/>
    <QueryClientProvider client={queryClient}>
      <Router>
        <AppContainter >
          <Header />
          <Routes>
            <Route path="/" element={<MainPage/>} />
            <Route path="/animallist" element={<AnimalList/>} />
          </Routes>
        </AppContainter>
      </Router>
    </QueryClientProvider>
    </>
  );
};

export default App;
//npm i styled-components

const AppContainter = styled.div`
    /* background-color: #bce3fc; */
    min-height: 100vh;
`