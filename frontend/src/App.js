import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Home from "./pages/Home";

const Background = styled.div`
  background-color: #FFFEF8;
  width: 1920px;
  height: 1080px;
`

function App() {
  return (
    <Background>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      </BrowserRouter>
    </Background>
  );
}

export default App;
