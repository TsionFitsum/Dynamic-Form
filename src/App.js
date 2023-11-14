import React, { useState } from 'react';

const DynamicForm = () => {
  const [questions, setQuestions] = useState([{ question: '', answer: '' }]);
  const [name, setName] = useState([]);
  const [phoneNo, setphoneNo] = useState([]);
  const [email, setEmail] = useState([]);

  
    const [selectedFile, setSelectedFile] = useState(null);
  
    const handleFileChange = (event) => {
      const file = event.target.files[0];
      setSelectedFile(file);
      console.log(event.target.files[0]);
    }
  
    const handleUpload = () => {
      if (selectedFile) {
        // Perform file upload logic here (e.g., send the file to the server)
        console.log('Uploading file:', selectedFile);
        // Reset the selected file after upload
        setSelectedFile(null);
      } else {
        alert('Please select a file before uploading.');
      }
    };
  
  const handleAddQuestion = () => {
    setQuestions([...questions, { question: '', answer: '' }]);
  };

  const handleInputChange = (index, type, value) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index][type] = value;
    setQuestions(updatedQuestions);
  };
  const handleSubmit = () => {
    if (questions.length === 0){
      alert("Nothing to submit");
    }else{
      const url = "http://localhost/enquiry.php"; 

      let fData = new FormData();
      fData.append('Fullname' , name);
      fData.append('phoneNo' , phoneNo);
      fData.append('questions' , questions );

      /*axios.post(url,fData)
      .then(response=> alert(response.data))
      .catch(error=> alert(error));*/
    }
};

/*const handleReset = () => {
  setName('');
  setphoneNo('');
  setEmail('');
  setQuestions(['']);
};*/
  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-y-auto max-h-screen
     max-w-screen-xl mx-auto p-4">
    <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl hover:shadow-green-400/50 ring-2 
    ring-green-600 lg:max-w-xl overflow-y-auto max-h-full max-w-screen-xl mx-auto p-4">
        <h1 className="text-3xl font-semibold text-center text-green-700 underline uppercase ">
            INTERVIEW Q & A
        </h1>
        <div className="mb-2">
        <label  
        for="uploadCV"
       className="block text-sm font-semibold text-gray-800">Upload CV
       </label>
                            
      <input
        type="file"
        accept=".pdf, .doc, .docx, .jpg, .png" 
        onChange={handleFileChange}
      />
      <button onClick={handleUpload}>Upload File</button>
                        <label
                            for="fullname"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Fullname
                        </label>
                        <input
                            type="text"
                            className="block w-full px-4 py-2 mt-2 text-indigo-700
                             bg-white border rounded-md focus:border-indigo-400
                              focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                              value={name} onChange={(e)=> setName(e.target.value)}
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            for="email"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            className="block w-full px-4 py-2 mt-2
                             text-indigo-700 bg-white border rounded-md focus:border-indigo-400
                              focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                              value={email} onChange={(e)=> setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            for="email"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            PhoneNo
                        </label>
                        <input
                            type="number"
                            className="block w-full px-4 py-2 mt-2 text-indigo-700
                             bg-white border rounded-md focus:border-indigo-400
                              focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                              value={phoneNo} onChange={(e)=> setphoneNo(e.target.value)}
                        />
                    </div>
      {questions.map((q, index) => (
        <div key={index} className="mb-4">
          <label className="block text-sm font-semibold mb-2">
            Question {index + 1}:
          </label>
          <input
            type="text"
            value={q.question}
            onChange={(e) => handleInputChange(index, 'question', e.target.value)}
            className="w-full p-2 border rounded"
          />
          <label className="block text-sm font-semibold mt-2 mb-2">
            Answer {index + 1}:
          </label>
          <input
            type="text"
            value={q.answer}
            onChange={(e) => handleInputChange(index, 'answer', e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>
        
      ))}
      <div class="flex justify-between">
  <button
    onClick={handleAddQuestion}
    className="bg-green-700 text-white py-2 px-4 rounded hover:bg-green-500"
  >
    Add More Question
  </button>

  <button
    onClick={handleSubmit}
    className="bg-green-700 text-white py-2 px-4 rounded hover:bg-green-500"
  >
    Submit
  </button>
</div>

    </div>
    </div>
  );
};

export default DynamicForm;













/*import React from "react";
import { useState } from 'react';



export default function FormExample5  () {
  const [questions, setQuestions] = useState([]);
  const [name, setName] = useState([]);
  const [phoneNo, setphoneNo] = useState([]);

  const handleAddQuestion = () => {
    setQuestions([...questions, { question: '', answer: '' }]);

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
    
  };

    return (
        <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
            <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl shadow-rose-600/40 ring-2 ring-indigo-600 lg:max-w-xl">
                <h1 className="text-3xl font-semibold text-center text-indigo-700 underline uppercase decoration-wavy">
                    INTERVIEW Q & A
                </h1>
                <form className="mt-6">
                    <div className="mb-2">
                        <label
                            for="fullname"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Fullname
                        </label>
                        <input
                            type="text"
                            className="block w-full px-4 py-2 mt-2 text-indigo-700
                             bg-white border rounded-md focus:border-indigo-400
                              focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                              value={name} onChange={(e)=> setName(e.target.value)}
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            for="email"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            className="block w-full px-4 py-2 mt-2
                             text-indigo-700 bg-white border rounded-md focus:border-indigo-400
                              focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            for="email"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            PhoneNo
                        </label>
                        <input
                            type="number"
                            className="block w-full px-4 py-2 mt-2 text-indigo-700
                             bg-white border rounded-md focus:border-indigo-400
                              focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                              value={phoneNo} onChange={(e)=> setphoneNo(e.target.value)}
                        />
                    </div>
                    
                    <div className="mt-6">
                        <button className="w-full px-4 py-2 tracking-wide
                         text-white transition-colors duration-200 transform
                          bg-indigo-700 rounded-md hover:bg-indigo-600 focus:outline-none
                           focus:bg-indigo-600">
                            Login
                        </button>
                        <button className="w-full px-4 py-2 tracking-wide
                         text-white transition-colors duration-200 transform
                          bg-indigo-700 rounded-md hover:bg-indigo-600 focus:outline-none
                           focus:bg-indigo-600"
                            onClick={handleAddQuestion}>Add Question</button>
                            {renderQuestions()}
      {questions.length > 0 && (
        <button onClick={handleAddQuestion}>Add More Question</button>
      )}
      {questions.length > 0 && (
        <button onClick={handleSubmit()}>Submit Form</button>
      )}
                    </div>
                </form>

                <p className="mt-8 text-xs font-light text-center text-gray-700">
                    {" "}
                    Already have an account?{" "}
                    <a
                        href="#"
                        className="font-medium text-indigo-600 hover:underline"
                    >
                        Sign in
                    </a>
                </p>
            </div>
        </div>
    );
}*/
/////////////////////////////////////////////////////////////////////////////////////////


//import React, { useState } from 'react';
//import axios from 'axios';

/*const DynamicForm = () => {
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
      <h2 >Interview Q & A</h2>
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

export default DynamicForm;*/

















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