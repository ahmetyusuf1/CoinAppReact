import "bootstrap/dist/css/bootstrap.min.css";
import LoginPageController from "./controllers/LoginPageController";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPageController from "./controllers/MainPageController";
import Header from "./components/Header";
import DetailPageController from "./controllers/DetailPageController";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MainPageController />} />
        <Route path="/login" element={<LoginPageController />} />
        <Route path="/coin/:id" element={<DetailPageController />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
