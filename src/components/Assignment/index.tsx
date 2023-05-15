import styles from "./assignment.module.css";
import { TbTrash } from "react-icons/tb";
import { TbCircleCheckFilled } from "react-icons/tb";


interface AssignmentProps {
  title: string;
  completed:boolean;
  onDelete: () => void;
  onComplete: () => void;
}

export function Assignment({ title, completed, onComplete, onDelete}:AssignmentProps) {
  return (
    <div className={styles.assignment}>
      
      <button className={styles.checkContainer} onClick ={onComplete}>
        {completed
          ?<TbCircleCheckFilled size ={18}/>
          :<div />
        }
        
      </button>

      <p className={completed ? styles.textCompleted : ''}>{title}</p>

      <button className={styles.deleteButton} onClick={onDelete}>
        <TbTrash size={20} />
      </button>
    </div>
  );
}
