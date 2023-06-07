import { useEffect } from "react";

const Table = (props) => {
  const students = props.props;
  // TODO: answer here
  const handleDeleteButton = (id) => {
    fetch(`http://localhost:3001/student/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .catch((error) => {
        console.log("Delete error", error);
      });
  };

  return (
    <>
      <table className="table-auto w-full mt-16" id="table-student">
        <thead>
          <tr>
            <th>No</th>
            <th>Full Name</th>
            <th>Birth Date</th>
            <th>Gender</th>
            <th>Faculty</th>
            <th>Program Study</th>
            <th>Option</th>
          </tr>
        </thead>
        <tbody>
          {students?.map((student, index) => (
            <tr className="student-data-row" key={student.id}>
              <td>{student.id}</td>
              <td>{student.fullname}</td>
              <td>{student.birthDate}</td>
              <td>{student.gender}</td>
              <td>{student.faculty}</td>
              <td>{student.programStudy}</td>
              <td>
                <button
                  onClick={() => handleDeleteButton(student.id)}
                  data-testid={`delete-${student.id}`}
                  className="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded"
                >
                  Button
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Table;
