

import { create } from "zustand";

//define shape
interface AuthStore {
    user: string;
    login: (userName: string) => void;
    logout: () => void;
}


//create & export
//note - store is used to represent previous state.
const useAuthStore = create<AuthStore>(set => ({
    user: '',
    login: (userName: string) => set(() => ({user: userName})),
    logout: () => set(() => ({user: ''}))
}));


export default useAuthStore;