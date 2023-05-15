import { Header } from "./components/Header";
import { Assignments } from "./components/Assignments";
import { useState } from "react";

// type AssignmentType = {
//   title: string;
//   completed: boolean;
// }
export interface AssignmentType {
  title: string;
  completed: boolean;
}



function App() {
  const [assignments, setAssignments] = useState<AssignmentType[]>([]);

  const addAssignment = (title: string) => {
    setAssignments([...assignments, { title, completed: false }]);
  }

  const completeAssignment = (title: string) => {
    setAssignments(assignments.map(a => 
      a.title === title 
        ? { ...a, completed: !a.completed }
        : a
    ));
  }

  const deleteAssignment = (title: string) => {
    setAssignments(assignments.filter(a => a.title !== title));
  }

  return (
    <>
      <Header addAssignment={addAssignment}/>
      <Assignments 
        assignments={assignments}
        completeAssignment={completeAssignment}
        deleteAssignment={deleteAssignment}
      />
    </>
  );
}

export default App;

