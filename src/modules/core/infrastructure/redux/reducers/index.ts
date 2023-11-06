import {createSlice} from '@reduxjs/toolkit';
import {CoreState, initialCoreState} from '../../../domain/CoreState';

const coreSlice = createSlice({
  name: 'core',
  initialState: initialCoreState as CoreState,
  reducers: {},
});

export const {} = coreSlice.actions;

export default coreSlice.reducer;
