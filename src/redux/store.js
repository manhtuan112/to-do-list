
import { configureStore } from "@reduxjs/toolkit";
import filtersReducer from './../components/Filters/filtersSlice';
import todoListReducer from './../components/TodoList/todoSlice';

const store = configureStore({
	reducer: {
		filters: filtersReducer.reducer,
		todoList: todoListReducer.reducer
	}
})

export default store
