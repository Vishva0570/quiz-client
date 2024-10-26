import { useState } from "react";

function CreateForm(props) {
  const { addQuiz } = props;

  const [createQuiz, setCreateQuiz] = useState({
    title: "",
    category: "",
    numQ: 0,
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setCreateQuiz({ ...createQuiz, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    addQuiz(createQuiz);
    setCreateQuiz({
      category: "",
      numQ: 0,
      title: "",
    });
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="form-group mb-3">
          <label>Choose the Category </label>
          <select
            className="form-control"
            name="category"
            value={createQuiz.category}
            onChange={handleChange}
          >
            <option value="select a category">select a category</option>
            <option value="Geography">Geography</option>
            <option value="History">History</option>
            <option value="Literature">Literature</option>
            <option value="Mathematics">Mathematics</option>
            <option value="Science">Science</option>
            <option value="java">java</option>
          </select>
        </div>
        <div className="form-group mb-3">
          <label>Enter the Number of Questions</label>
          <input
            type="number"
            className="form-control"
            placeholder="no of questions"
            name="numQ"
            value={createQuiz.numQ}
            onChange={handleChange}
          />
        </div>
        <div className="form-group mb-3">
          <label>Enter a Title</label>
          <input
            type="text"
            className="form-control"
            placeholder="eg: python"
            name="title"
            value={createQuiz.title}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Create Quiz
        </button>
      </form>
    </>
  );
}

export default CreateForm;
