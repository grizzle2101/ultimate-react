import { create } from "zustand";

//1 - create interface to define the shape of our data.
interface CounterStore {
    counter: number;
    incrment: () => void;
    reset: () => void;
}

//use create to provide the data, and functions to increment & reset the store.
//save & export the result 
const useCounterStore = create<CounterStore>(set => ({
    counter: 0,
    incrment: () => set((store) => ({counter: store.counter + 1})),
    reset: () => set(() => ({counter: 0}))
}))


export default useCounterStore;