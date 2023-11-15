import '../Student.css';

const Student = ({ id, name, age, course, onDelete }) => {
  return (
    <div className="student">
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Course: {course}</p>
      <button onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
};

export default Student;