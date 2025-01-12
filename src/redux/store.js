import { configureStore } from '@reduxjs/toolkit'
//import counterReducer from '../features/counter/CounterSlice'
import pasteReducer from '../features/Paste/PasteSlice'
import { Provider } from 'react-redux'
export const store = configureStore({
  reducer: {
    paste: pasteReducer
  },
})