import { useEffect, useState } from "react";
import axios from "axios";
import Question from "../components/Question";
import QuestionForm from "../components/QuestionForm";

function QuestionPage() {
  const [questions, setQuestions] = useState([]);
  const [showForm, setshowForm] = useState(false);

  function handleShowQuestion() {
    setshowForm(true);
  }
  function getAllQuestions() {
    axios
      .get("http://localhost:8080/question/allquestions")
      .then((response) => {
        setQuestions(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the data!", error);
      });
  }

  // http://localhost:8080/question/allquestions
  useEffect(() => {
    getAllQuestions();
  }, []);

  function handleAddQuestion(question) {
    axios
      .post(`http://localhost:8080/question/add`, question)
      .then((response) => {
        getAllQuestions();
      })
      .catch((error) => {
        console.error("There was an error fetching the data!", error);
      });
    setshowForm(false);
  }

  return (
    <>
      <div className="d-flex flex-row-reverse mt-4 mx-4">
        <button
          className="btn btn-primary float-right"
          onClick={handleShowQuestion}
        >
          ADD
        </button>
      </div>
      {showForm ? (
        <QuestionForm submitQuestion={handleAddQuestion} />
      ) : (
        <div>
          {questions.map((qn, key) => (
            <div key={key}>
              <Question qn={qn} id={key} />
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default QuestionPage;
