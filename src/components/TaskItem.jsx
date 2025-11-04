import { useDispatch } from 'react-redux';
import { toggleTask, deleteTask } from '../redux/actions';

export default function TaskItem({ task }) {
  const dispatch = useDispatch();

  return (
    <li
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        padding: '8px 0',
        borderBottom: '1px solid #eee',
      }}
    >
      <input
        type="checkbox"
        checked={task.completada}
        onChange={() => dispatch(toggleTask(task.id))}
      />
      <span style={{ flex: 1, textDecoration: task.completada ? 'line-through' : 'none' }}>
        {task.titulo}
      </span>
      <button onClick={() => dispatch(deleteTask(task.id))}>Eliminar</button>
    </li>
  );
}
