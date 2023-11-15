import { useState } from 'react';
import StudentList from './StudentList';
import StudentForm from './StudentForm';
import '../College.css';

const initialStudentData = `
1,Devlin Van der Hoeven,Physics
2,Jsandye Gilcrist,Biology
3,Felipe Venditti,Physics
4,Shir Langridge,Physics
5,Giles Mackney,Computer Science
6,Georgeanne Tooze,Biology
7,Blondelle Nequest,Chemistry
8,Arabel Imlacke,Mathematics
9,Madella Sawers,Mathematics
10,Amerigo O'Rowane,Computer Science
`

const College = () => {
  const [students, setStudents] = useState(parseStudentData(initialStudentData));

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

function parseStudentData(data) {
  return data
    .trim() // Remove leading/trailing whitespace
    .split('\n') // Split by newline to get an array of lines
    .map((line) => {
      const [id, name, course] = line.split(',');
      return { id: parseInt(id), name, course };
    });
}

export default College;