import { Assignment } from "../Assignment";
import styles from "./assignments.module.css";
import { AssignmentType } from "../../App";

interface AssignmentsProps {
  assignments: AssignmentType[];
  completeAssignment: (assignment: string) => void;
  deleteAssignment: (assignment: string) => void;
}

export function Assignments({ assignments, completeAssignment, deleteAssignment }: AssignmentsProps) {
  const completedAssignments = assignments.filter(a => a.completed);
  
  return (
    <section className={styles.assignments}>
      <header className={styles.header}>
        <div>
          <p>Created Assignments</p>
          <span>{assignments.length}</span>
        </div>

        <div>
          <p className={styles.textPurple}>Completed Assignments</p>
          <span>{completedAssignments.length} of {assignments.length}</span>
        </div>
      </header>

      <div className={styles.list}>
        {assignments.map((assignment, index) => (
          <Assignment 
            key={index} 
            title={assignment.title} 
            completed={assignment.completed}
            onComplete={() => completeAssignment(assignment.title)}
            onDelete={() => deleteAssignment(assignment.title)}
          />
        ))}
      </div>
    </section>
  );
}
