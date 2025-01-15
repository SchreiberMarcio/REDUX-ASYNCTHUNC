import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

interface Wizard {
  id: string;
  name: string;
  image: string;
  wizard: boolean;
  house: string | null;
}

interface WizardState {
  list: Wizard[];
  itemsList: Wizard[];
  loading: boolean;
  error: string | null;
  total: number;
  currentPage: number;
  itemsPage: number;
}

const initialState: WizardState = {
  list: [],
  itemsList: [],
  loading: false,
  error: null,
  total: 0,
  currentPage: 1,
  itemsPage: 18,
};

// Buscar os dados da API
export const wizardAsyncThunk = createAsyncThunk<
  Wizard[],
  void,
  { rejectValue: string }
>("wizard/list", async (_, { rejectWithValue }) => {
  try {
    const response = await axios.get<Wizard[]>(
      "https://hp-api.onrender.com/api/characters"
    );
    return response.data.map((wizard) => ({
      id: wizard.id,
      name: wizard.name,
      image: wizard.image,
      wizard: wizard.wizard,
      house: wizard.house,
    }));
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return rejectWithValue(
      "Não foi possível carregar os dados dos personagens."
    );
  }
});

// Criação do slice
const wizardSlice = createSlice({
  name: "wizard",
  initialState,
  reducers: {
    setPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;

      const startIndex = (state.currentPage - 1) * state.itemsPage;
      const endIndex = startIndex + state.itemsPage;
      state.itemsList = state.list.slice(startIndex, endIndex);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(wizardAsyncThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(wizardAsyncThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
        state.total = action.payload.length;

        // Calcula os itens da primeira página
        state.itemsList = state.list.slice(0, state.itemsPage);
      })
      .addCase(wizardAsyncThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Erro desconhecido.";
      });
  },
});

// Actions
export const { setPage } = wizardSlice.actions;

// Reducer
export const wizardReducer = wizardSlice.reducer;
