import { MdClose } from 'react-icons/md';
import css from './TaskListItem.module.css';

export const TaskListItem = ({ task }) => {
  return (
    <div className={css.wrapper}>
      <input
        type="checkbox"
        className={css.checkbox}
        checked={task.completed}
      />
      <p className={css.text}>{task.text}</p>
      <button className={css.btn}>
        <MdClose size={24} />
      </button>
    </div>
  );
};
