import { useState } from 'react';
import '../StudentForm.css';

const StudentForm = ({ onAddStudent }) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [course, setCourse] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newStudent = { name, age, course };
    onAddStudent(newStudent);
    setName('');
    setAge('');
    setCourse('');
  };

  return (
    <form className="student-form" onSubmit={handleSubmit}>
      <label>
        Name:
        <br/>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <br />
      <label>
        Age:
        <br/>
        <input type="Number" value={age} onChange={(e) => setAge(e.target.value)} />
      </label>
      <br />
      <label>
        Course:
        <br/>
        <input type="text" value={course} onChange={(e) => setCourse(e.target.value)} />
      </label>
      <br />
      <button type="submit">Add Student</button>
    </form>
  );
};

export default StudentForm;