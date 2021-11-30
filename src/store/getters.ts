import { RootState } from "./state";

export const getters = {
  increaseNum(state: RootState) {
    return state.count;
  },
};

export type Getters = typeof getters;
