import React from "react";
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import styled from "styled-components";
import { formToJSON } from "axios";

import Header from "./components/common/Header";
import MainPage from "./pages/MainPage";
import GlobalStyles from "./GlobalStyles";

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <>
    <GlobalStyles/>
    <QueryClientProvider client={queryClient}>
      <AppContainter >
        <Header />
        <MainPage />
      </AppContainter>
    </QueryClientProvider>
    </>
  );
};

export default App;
//npm i styled-components

const AppContainter = styled.div`
    background-color: #bce3fc;
    min-height: 100vh;
`