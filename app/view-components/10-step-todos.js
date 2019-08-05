// notes: The `.map()` method creates a new array 
//        with the results of calling a provided 
//        function on every element in the calling array.

/* #Step 01: Add useReducer, initial state and useRef hooks */

  import { todoReducer } from './todoReducer';
  const initialState = [
    { id: 1, name: 'Get started', complete: false }
  ];

  const inputRef = useRef();
  const [todos, dispatch] = useReducer(todoReducer, []);

  ref = { inputRef }

/* Step 02: Add Dispatch and Reducer case for 'ADD_TODO' */

  dispatch({
    type: 'ADD_TODO',
    name: inputRef.current.value,
    complete: false
  });

  return (action.name.length)
    ? [...state, {
      id: state.length ? Math.max(...state.map(todo => todo.id)) + 1 : 0,
      name: action.name,
      complete: false
    }]
    : state

/* Step 03: Add prevent default and reset input */

  event.preventDefault();
  inputRef.current.value = '';

/* Step 04: Add Dispatch and Reducer case for 'TOGGLE_COMPLETE' */

  dispatch({ type: 'TOGGLE_COMPLETE', id });

  return state.map((item) =>
    item.id === action.id
      ? { ...item, complete: !item.complete }
      : item
  )

/* Step 05: Add Dispatch and Reducer case for 'DELETE_TODO' */

  dispatch({ type: 'DELETE_TODO', id });

  return state.filter((todo) => todo.id !== action.id);

/* Step 06: Add Dispatch and Reducer case for 'CLEAR_TODOS' */

  dispatch({ type: 'CLEAR_TODOS' });

  return [];

/* Step 07: handle default case (wrong action type?) */

  console.log('no corresponding action found')
  return state;

/* Step 08: useEffect to notify how many completed todos */

  const completedTodos = todos.filter(todo => todo.complete);

  useEffect(() => {
    document.title = `${completedTodos.length} completed todos`;
  })

/* Step 09: Redirect using Router and Hook (super contrived, I know) */

  import { Redirect } from 'react-router-dom';

  const [toHome, setToHome] = useState(false);

  setTimeout(() => setToHome(true), 2000)

/* Step 10: Render Redirect Component if toHome is `true` */

  {toHome ? <Redirect to="/" /> : <></>}