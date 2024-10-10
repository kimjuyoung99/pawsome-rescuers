import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { IShelter, fetchUniqueShelters } from '../services/api';

interface ShelterState {
  data: IShelter[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: ShelterState = {
  data: [],
  status: 'idle',
  error: null
};

export const loadShelterData = createAsyncThunk(
  'shelter/loadShelterData',
  async () => {
    const response = await fetchUniqueShelters();
    return response;
  }
);

const shelterSlice = createSlice({
  name: 'shelter',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadShelterData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(loadShelterData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(loadShelterData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || null;
      });
  },
});

export default shelterSlice.reducer;