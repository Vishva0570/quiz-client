import { useState } from "react";

function QuestionForm(props) {
  const { submitQuestion } = props;
  const [addQuestion, setAddQuestion] = useState({
    category: "",
    difficulty: "",
    option1: "",
    option2: "",
    option3: "",
    option4: "",
    question: "",
    rightanswer: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setAddQuestion({ ...addQuestion, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    submitQuestion(addQuestion);
    setAddQuestion({
      category: "",
      difficulty: "",
      option1: "",
      option2: "",
      option3: "",
      option4: "",
      question: "",
      rightanswer: "",
    });
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Choose the difficulty </label>
        <select className="form-select" aria-label="Default select example">
          <option defaultValue={addQuestion.difficulty}>
            Open this select menu
          </option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>

        <div className="form-group mb-3">
          <label>Enter the Category</label>
          <input
            type="text"
            className="form-control"
            placeholder="eg: subjects"
            name="category"
            value={addQuestion.category}
            onChange={handleChange}
          />
        </div>
        <div className="form-group mb-3">
          <label>Enter a Question</label>
          <input
            type="text"
            className="form-control"
            placeholder=""
            name="question"
            value={addQuestion.question}
            onChange={handleChange}
          />
        </div>
        <div className="form-group mb-3">
          <label>Enter a option1</label>
          <input
            type="text"
            className="form-control"
            placeholder=""
            name="option1"
            value={addQuestion.option1}
            onChange={handleChange}
          />
        </div>
        <div className="form-group mb-3">
          <label>Enter a option2</label>
          <input
            type="text"
            className="form-control"
            placeholder=""
            name="option2"
            value={addQuestion.option2}
            onChange={handleChange}
          />
        </div>
        <div className="form-group mb-3">
          <label>Enter a option3</label>
          <input
            type="text"
            className="form-control"
            placeholder=""
            name="option3"
            value={addQuestion.option3}
            onChange={handleChange}
          />
        </div>

        <div className="form-group mb-3">
          <label>Enter a option4</label>
          <input
            type="text"
            className="form-control"
            placeholder=""
            name="option4"
            value={addQuestion.option4}
            onChange={handleChange}
          />
          <div className="form-group mb-3">
            <label>Enter a rightanswer</label>
            <input
              type="text"
              className="form-control"
              placeholder=""
              name="rightanswer"
              value={addQuestion.rightanswer}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            submitted
          </button>
        </div>
      </form>
    </>
  );
}

export default QuestionForm;
