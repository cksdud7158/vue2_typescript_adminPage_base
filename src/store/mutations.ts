import { RootState, state } from "@/store/state";

enum MutationTypes {
  INCREASENUM = "INCREASENUM",
}

const mutations = {
  decreaseNum() {
    state.count -= 1;
  },
  [MutationTypes.INCREASENUM](state: RootState): void {
    state.count++;
  },
};

type Mutations = typeof mutations;

export { MutationTypes, mutations, Mutations };
