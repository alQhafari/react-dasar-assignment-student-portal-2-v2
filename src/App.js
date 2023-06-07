import { useEffect, useState } from "react";
import Form from "./components/Form";
import Table from "./components/Table";

const App = () => {
  const [student, setStudent] = useState(null);

  function fetchStudent() {
    fetch(`http://localhost:3001/student`)
      .then((res) => res.json())
      .then((data) => setStudent(data))
      .catch(() => console.log("ERROR"));
  }

  useEffect(() => fetchStudent(), []);

  return (
    <>
      <Form />
      {student ? <Table props={student} /> : <p>Loading ...</p>}
    </>
  );
};

export default App;
