import React from "react";
import GlobalStyles from "./GlobalStyles";
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import styled from "styled-components";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/common/Header";
import MainPage from "./pages/MainPage";
import AnimalList from "./pages/AnimalList";
import ScrapPage from "./pages/ScrapPage";

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <>
    {/* 글로벌스타일 컴포넌트가 가장 위에 위치해야 함 */}
    <GlobalStyles/>
    <QueryClientProvider client={queryClient}>
      <Router>
        <AppContainter >
          <Header />
          <Routes>
            <Route path="/" element={<MainPage/>} />
            <Route path="/animallist" element={<AnimalList/>} />
            <Route path="/scrap" element={<ScrapPage/>}/>
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