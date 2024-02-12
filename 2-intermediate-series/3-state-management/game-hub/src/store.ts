import { create } from "zustand";

export interface GameQuery {
    genreId?: number;
    platformId?: number;
    sortOrder?: string;
    searchText?: string;
  }

//shape
interface GameQueryStore {
    gameQuery: GameQuery;
    setSearchText: (searchText: string) => void;
    setGenreId: (genreId: number) => void;
    setPlatformId: (platformId: number) => void;
    setSortOrder: (sortOrder: string) => void;
}

const useGameQueryStore = create<GameQueryStore>(set => ({
    gameQuery: {},
    setSearchText: (searchText: string) => set(() => ({gameQuery: {searchText}})),
    setGenreId: (genreId: number) => set(store => ({gameQuery: {...store.gameQuery, genreId}})),
    setPlatformId: (platformId: number) => set(store => ({gameQuery: {...store.gameQuery, platformId}})),
    setSortOrder: (sortOrder: string) => set(store => ({gameQuery: {...store.gameQuery, sortOrder}})),
}))

//note - by only specifying one value in game query, the others are wiped out.

export default useGameQueryStore;
