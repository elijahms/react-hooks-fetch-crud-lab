import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({questionsList, setQuestions}) {
  
  function handleDelete(id) {
    fetch(`http://localhost:4000/questions/${id}`, {
      method: "DELETE",
    })
    .then((r) => r.json())
    
    const deletedArray = questionsList.filter((question) => {
      return question.id !== id
    })
    setQuestions(deletedArray)
  }

  
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questionsList.map((q) => {
        return <QuestionItem question={q} key={q.id} handleDelete={handleDelete} />
      })}</ul>
    </section>
  );
}

export default QuestionList;
