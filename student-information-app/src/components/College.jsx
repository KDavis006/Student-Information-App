import { useState } from 'react';
import StudentList from './StudentList';
import StudentForm from './StudentForm';
import '../College.css';

const College = () => {
  const [students, setStudents] = useState([
    { id: 1, name: 'John Doe', age: 20, course: 'Computer Science' },
    { id: 2, name: 'Jane Doe', age: 22, course: 'Physics' },
  ]);

  const handleAddStudent = (newStudent) => {
    setStudents([...students, { ...newStudent, id: Date.now() }]);
  };

  const handleDeleteStudent = (id) => {
    setStudents(students.filter((student) => student.id !== id));
  };

  return (
    <div className="college">
      <h1>College</h1>
      <StudentList students={students} onDelete={handleDeleteStudent} />
      <hr />
      <h2>Add New Student</h2>
      <StudentForm onAddStudent={handleAddStudent} />
    </div>
  );
};

export default College;