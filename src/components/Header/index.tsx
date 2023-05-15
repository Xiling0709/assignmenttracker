import styles from "./header.module.css";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { uppercase } from "../../helpers/stringHelpers";
import { useState } from "react";
import { FormEvent } from "react";

interface HeaderProps {
  addAssignment: (assignment: string) => void;
}

export function Header({ addAssignment }: HeaderProps) {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    addAssignment(inputValue);
    setInputValue('');
  }


  return (
    <header className={styles.header}>
      <h1>{uppercase("bcit")} Assignment Tracker</h1>
      <form className={styles.newAssignmentForm} onSubmit={handleSubmit}>
        <input placeholder="Add a new assignment" type="text" value={inputValue} onChange={event => setInputValue(event.target.value)}/>
        <button disabled={!inputValue.trim()}>
          Create <AiOutlinePlusCircle size={20} />
        </button>
      </form>
    </header>
  );
}
