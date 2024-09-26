import React from "react";
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import Header from "./components/common/Header";
import MainPage from "./pages/MainPage";
import styled from "styled-components";
import { formToJSON } from "axios";

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AppContainter >
        <Header />
        <MainPage />
      </AppContainter>
    </QueryClientProvider>
  );
};

export default App;
//npm i styled-components

const AppContainter = styled.div`
    background-color: skyblue;
    min-height: 100vh;
`