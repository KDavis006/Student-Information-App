import Student from './Student';
import '../StudentList.css';

const StudentList = ({ students, onDelete }) => {
  return (
    <div className="student-list">
      {students.map((student) => (
        <Student key={student.id} {...student} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default StudentList;