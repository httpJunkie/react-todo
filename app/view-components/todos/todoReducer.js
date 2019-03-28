export const todoReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO': {
      return (action.name.length)
        ? [...state, {
          id: state.length ? Math.max(...state.map(todo => todo.id)) + 1 : 0,
          name: action.name,
          complete: false
        }]
        : state
    }
    case 'TOGGLE_COMPLETE': {
      return state.map((item) =>
        item.id === action.id
          ? { ...item, complete: !item.complete }
          : item
      )
    }
    case 'DELETE_TODO': {
      return state.filter((x) => x.id !== action.id);
    }
    case 'CLEAR_TODOS': {
      return [];
    }
    default: {
      return state;
    };
  }
}