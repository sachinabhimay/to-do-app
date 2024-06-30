import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getTakeTodoListFromWeb } from "../services/Api"

export interface Todo {
    title: string,
    desc: string,
    id: string,
    createdTime: string,
    completedTime?: string,
    completed: boolean
}

const initialState = {
    todos: <Todo []>[],
    pending: false,
    error: false
}

// create action for calling async calls
export const getTodoListFromWeb = createAsyncThunk('todo/getTodoListFromWeb', async () => {
    return getTakeTodoListFromWeb();
})

export const getTodoListFromWebCustom = () => async (dispatch: any, getState: any) => {
    const todoList: any = await getTakeTodoListFromWeb();
    for(let todo of todoList) {
        dispatch(addTodo(todo))
    }
}

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<Todo>) => {
            state.todos.push(action.payload)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id != action.payload.id);
        },
        setTodoCompleted: (state, action) => {
            state.todos.forEach(todo => {
                if(todo.id === action.payload.id) {
                    todo.completed = true;
                    todo.completedTime = Date.now().toString();
                }
            })
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(getTodoListFromWeb.pending, (state, action) => {
            state.pending = true;

        })
        .addCase(getTodoListFromWeb.fulfilled, (state, action: any) => {
            state.todos.push(...action.payload);
            state.pending = false;
        })
    }
})

export const {addTodo, removeTodo, setTodoCompleted} = todoSlice.actions;
export const todoReducer = todoSlice.reducer;

