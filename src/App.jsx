import { useSelector } from 'react-redux';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

export default function App() {
  const completedCount = useSelector(state => state.completedCount);
  const total = useSelector(state => state.tasks.length);

  return (
    <div style={{ 
      maxWidth: 520, 
      margin: '2rem auto', 
      fontFamily: 'system-ui', 
      textAlign: 'center' 
    }}>
      <h1 style={{ color: '#ff9fb2' }}>TaskBoard</h1>
      <TaskForm />
      <TaskList />
      <p 
        style={{ 
          marginTop: 20, 
          fontWeight: 'bold', 
          color: '#ff9fb2', 
          background: '#ffe4ec', 
          borderRadius: '10px', 
          padding: '10px'
        }}
      >
        Tareas completadas: {completedCount} / {total}
      </p>
    </div>
  );
}
