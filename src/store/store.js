import { configureStore } from '@reduxjs/toolkit'
import explorerReducer from './slice'

export const store = configureStore({
    reducer: {
        explorer: explorerReducer
    },
})