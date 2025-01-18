import { createContext } from "react";

export const PaginationContext = createContext({
    activePage: 1,
    setPage: (n:number) => { console.log(n); return; },
    onFirstPage: true,
    onLastPage: true,

    incrementPage: () => { return; },
    decrementPage: () => { return; },
});