import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import NotfoundPage from "./pages/NotFoundPage";
import QuestionPage from "./pages/QuestionsPage";
import JQuizPage from "./pages/JQuizPage";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Questions" element={<QuestionPage />} />
        <Route path="/JQuiz/:id" element={<JQuizPage />} />
        <Route path="*" element={<NotfoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
