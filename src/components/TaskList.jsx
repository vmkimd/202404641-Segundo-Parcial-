import { useSelector } from 'react-redux';
import TaskItem from './TaskItem';

export default function TaskList() {
  const tasks = useSelector(state => state.tasks);

  // (Extensión) Completadas al final sin mutar el estado:
  const ordered = [...tasks].sort((a, b) => Number(a.completada) - Number(b.completada));

  if (!ordered.length) return <p>No hay tareas.</p>;

  return (
    <ul style={{ marginTop: 16, padding: 0, listStyle: 'none' }}>
      {ordered.map(task => <TaskItem key={task.id} task={task} />)}
    </ul>
  );
}
