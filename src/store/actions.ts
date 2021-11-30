import { MyMutations } from "@/types/vuexType";
import { MutationTypes } from "@/store/mutations";

enum ActionTypes {
  INCREASENUM = "INCREASENUM",
}

const actions = {
  [ActionTypes.INCREASENUM](context: MyMutations) {
    context.commit(MutationTypes.INCREASENUM);
  },
};

type Actions = typeof actions;

export { ActionTypes, actions, Actions };
