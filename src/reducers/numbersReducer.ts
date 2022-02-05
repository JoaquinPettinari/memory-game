import { createSlice } from "@reduxjs/toolkit";
import { AppThunk, RootState } from "../app/store";
import { NumbersReducerState, NumbersWithState } from "../interfaces";

const initialState: NumbersReducerState = {
   looking: false,
   error: false,
   numbers: [],
};

export const numberReducer = createSlice({
   name: "numbers",
   initialState,
   reducers: {
      lookingForMistakes: (state) => {
         state.looking = true;
         state.error = false;
      },
      saveResults: (state, action) => {
         state.numbers = action.payload;
         state.error = false;
         state.looking = false;
      },
      failLooking: (state) => {
         state.error = true;
      },
      reset: (state) => {
         state.numbers = [];
      },
   },
});

export const numbers = (state: RootState) => state.numbers;

export const { lookingForMistakes, saveResults, failLooking, reset } =
   numberReducer.actions;

export const validateNumbers =
   (enteredNumber: string, randomNumber: string | undefined): AppThunk =>
   async (dispatch) => {
      dispatch(lookingForMistakes());
      try {
         const enteredNumbersSplited = enteredNumber.split("");
         const randomNumbersSplited = randomNumber?.split("");
         const validatedNumberList: NumbersWithState =
            enteredNumbersSplited.map((number, index) => {
               return {
                  number: number,
                  error:
                     number !==
                     (randomNumbersSplited && randomNumbersSplited[index]),
               };
            });
         dispatch(saveResults(validatedNumberList));
      } catch (error) {
         dispatch(failLooking());
      }
   };

export const resetNumbers = (): AppThunk => (dispatch) => { dispatch(reset())};

export default numberReducer.reducer;
