import { useDispatch } from 'react-redux';
import { addTask } from '../redux/actions';

export default function TaskForm() {
  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    const titulo = e.target.titulo?.value?.trim();
    if (!titulo) return; // evita agregar vacíos
    dispatch(addTask(titulo));
    e.target.reset();
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', gap: 8 }}>
      <input
        name="titulo"               // ← necesario si lees e.target.titulo.value
        placeholder="Nueva tarea"
        autoComplete="off"
        style={{ flex: 1, padding: 8 }}
      />
      <button type="submit">Agregar</button>
    </form>
  );
}
