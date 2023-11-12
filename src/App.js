import React, { useState } from 'react';
import axios from 'axios';

const DynamicForm = () => {
  const [questions, setQuestions] = useState([]);
  const [name, setName] = useState([]);
  const [phoneNo, setphoneNo] = useState([]);

  const handleSubmit = () => {
      if (questions.length === 0){
        alert("Nothing to submit");
      }else{
        const url = "http://localhost/enquiry.php"; 

        let fData = new FormData();
        fData.append('Fullname' , name);
        fData.append('phoneNo' , phoneNo);
        fData.append('questions' , questions );

        axios.post(url,fData)
        .then(response=> alert(response.data))
        .catch(error=> alert(error));
      }
  };

  const handleAddQuestion = () => {
    setQuestions([...questions, { question: '', answer: '' }]);
  };

  const handleQuestionChange = (index, type, value) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index][type] = value;
    setQuestions(updatedQuestions);
  };

  const renderQuestions = () => {
    return questions.map((q, index) => (
      <div key={index}>
        <label>{`Question ${index + 1}:`}</label>
        <textarea 
          rows="2"
          value={q.question}
          onChange={(e) => handleQuestionChange(index, 'question', e.target.value)}
        />
        <label>{`Answer ${index + 1}:`}</label>
        <textarea
          type="text"
          
          value={q.answer}
          onChange={(e) => handleQuestionChange(index, 'answer', e.target.value)}
        />
      </div>
    ));
  };

  return (
    <div>
      <h2>Interview Q & A</h2>
      <label htmlFor="name">Full Name</label>
      <input type='text' id='name' value={name} onChange={(e)=> setName(e.target.value)}/>
      <label htmlFor="name">Phone Number</label>
      <input type='text' id='phoneNo' value={phoneNo} onChange={(e)=> setphoneNo(e.target.value)}/>

      <button onClick={handleAddQuestion}>Add Question</button>
      {renderQuestions()}
      {questions.length > 0 && (
        <button onClick={handleAddQuestion}>Add More Question</button>
      )}
      {questions.length > 0 && (
        <button onClick={handleSubmit()}>Submit Form</button>
      )}
    </div>
  );
};

export default DynamicForm;

















/*function App() {
  return (
    <div className="App">
      <h1 style={<i class="fa fa-bold" aria-hidden="true"></i>}>Interview Q & A</h1>
      <form>
        <button onClick={}>add question</button>
      </form>
    </div>
  );
}

export default App;
*/