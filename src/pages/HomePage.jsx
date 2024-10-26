import { useEffect, useState } from "react";
import Card from "../components/Card";
import axios from "axios";
import CreateForm from "../components/CreateForm";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [quiz, setQuiz] = useState([]);
  const [showForm, setshowForm] = useState(false);

  useEffect(() => {
    getAllQuiz();
  }, []);

  function handleCreateQuiz() {
    setshowForm(true);
  }

  function getAllQuiz() {
    axios
      .get("http://localhost:8080/quiz/all")
      .then((response) => {
        setQuiz(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the data!", error);
      });
  }

  function handleAddQuiz(quiz) {
    axios
      .post(
        `http://localhost:8080/quiz/create?category=${quiz.category}&title=${quiz.title}&numQ=${quiz.numQ}`
      )
      .then((response) => {
        getAllQuiz();
      })
      .catch((error) => {
        console.error("There was an error fetching the data!", error);
      });
    setshowForm(false);
  }

  function handleDeleteQuiz(id) {
    axios
      .delete(`http://localhost:8080/quiz/delete/${id}`)
      .then((response) => {
        getAllQuiz();
      })
      .catch((error) => {
        console.error("There was an error fetching the data!", error);
      });
  }

  return (
    <>
      <div className="text-center">
        <h1 className="mt-5">Create an awesome quiz in minutes</h1>
        <p>Quiz Maker is the easiest way to make quizzes FREE</p>
        <button
          type="button"
          className="btn btn-success btn-lg btn-block mx-4"
          onClick={handleCreateQuiz}
        >
          Create Quiz
        </button>
        <Link to="/Questions" role="button" className="btn btn-outline-info">
          All Questions
        </Link>
      </div>
      <div className="container mt-5">
        {showForm ? (
          <CreateForm addQuiz={handleAddQuiz} />
        ) : (
          <div className="row g-5">
            {quiz.map((q, key) => (
              <Card quiz={q} key={key} deletequiz={handleDeleteQuiz} />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default HomePage;
