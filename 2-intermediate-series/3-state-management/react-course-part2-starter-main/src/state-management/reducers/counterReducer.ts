interface Action {
  //type: string;
  type: "INCREMENT" | "RESET";
}

const counterReducer = (state: number, action: Action): number => {
  if (action.type === "INCREMENT") return state + 1;
  if (action.type === "RESET") return 0;
  return state;
  //OR
  throw new Error("Action is not supported");
  //OR we only allow INCREMENT or RESET
  // specificType: "INCREMENT" | "RESET";
};

export default counterReducer;
