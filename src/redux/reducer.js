const initialState = {
  tasks: [],
  completedCount: 0
};

export default function taskReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TASK': {
      if (!action.payload || !action.payload.titulo) return state;
      const newTasks = [...state.tasks, action.payload];
      const completedCount = newTasks.filter(t => t.completada).length;
      return { ...state, tasks: newTasks, completedCount };
    }

    case 'TOGGLE_TASK': {
      const newTasks = state.tasks.map(t =>
        t.id === action.payload ? { ...t, completada: !t.completada } : t
      );
      const completedCount = newTasks.filter(t => t.completada).length;
      return { ...state, tasks: newTasks, completedCount };
    }

    case 'DELETE_TASK': {
      const newTasks = state.tasks.filter(t => t.id !== action.payload);
      const completedCount = newTasks.filter(t => t.completada).length;
      return { ...state, tasks: newTasks, completedCount };
    }

    default:
      return state;
  }
}
