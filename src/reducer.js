import todosReducer from "./features/todos/todosSlice";
import filtersReducer from "./features/filters/filtersSlice";

const initialState = {
    todos: [
    ],
    filters: {
        status: "All",
        colors: []
    }
}

export default function appReducer(state = initialState, action){
    return {
        todos: todosReducer(state.todos, action),
        filters: filtersReducer(state.filters, action)
    }
}