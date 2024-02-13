import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/home"
import { Container } from "reactstrap";
import Login from "./pages/login";

function App() {
  return (
    <Container>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage/>} />
          <Route path="/login" element={<Login/>} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;
