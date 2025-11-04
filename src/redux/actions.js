export const addTask = (titulo) => ({
  type: 'ADD_TASK',
  payload: { id: Date.now(), titulo, completada: false },
});

export const toggleTask = (id) => ({ type: 'TOGGLE_TASK', payload: id });

export const deleteTask = (id) => ({ type: 'DELETE_TASK', payload: id });
