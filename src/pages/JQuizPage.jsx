import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Question from "../components/Question";

function JQuizPage() {
  const { id } = useParams();
  const [jQuiz, setJQuiz] = useState([]);

  useEffect(() => {
    const singleQuiz = (id) => {
      console.log(id);
      axios
        .get(`http://localhost:8080/quiz/get/${id}`)
        .then((response) => {
          setJQuiz(response.data);
        })
        .catch((error) => {
          console.error("There was an error fetching the data!", error);
        });
    };
    singleQuiz(id);
  }, [id]);

  return (
    <>
      {jQuiz.map((qn, key) => (
        <div key={key}>
          <Question qn={qn} id={key} />
        </div>
      ))}
      <form>
        {" "}
        <div className="d-flex  justify-content-center mt-4 mx-4">
          <button type="submit" className="btn btn-primary ">
            Submit
          </button>
        </div>
      </form>
    </>
  );
}

export default JQuizPage;
