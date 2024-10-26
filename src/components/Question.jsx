function Question(props) {
  const { qn, id } = props;
  return (
    <>
      <div className="border rounded mt-5 mx-5 p-3" key={id}>
        <p>
          <span className="px-3">{id + 1}</span>
          {qn.question}
        </p>
        <div className="form-check">
          {qn.option1}
          <input
            className="form-check-input position-static"
            type="radio"
            name="blankRadio"
            id="blankRadio1"
            value={qn.option1}
          />
        </div>
        <div className="form-check">
          {qn.option2}
          <input
            className="form-check-input position-static"
            type="radio"
            name="blankRadio"
            id="blankRadio1"
            value="option1"
            aria-label="..."
          />
        </div>
        <div className="form-check">
          {qn.option3}
          <input
            className="form-check-input position-static"
            type="radio"
            name="blankRadio"
            id="blankRadio1"
            value="option1"
            aria-label="..."
          />
        </div>
        <div className="form-check">
          {qn.option4}
          <input
            className="form-check-input position-static"
            type="radio"
            name="blankRadio"
            id="blankRadio1"
            value="option1"
            aria-label="..."
          />
        </div>
      </div>
    </>
  );
}

export default Question;
