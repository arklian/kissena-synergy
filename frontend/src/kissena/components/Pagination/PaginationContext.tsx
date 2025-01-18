import { createContext } from "react";

export const PaginationContext = createContext({
    ENTRIES_PER_PAGE: 0,
    activePage: 1,
    onFirstPage: true,
    onLastPage: true,

    incrementPage: () => { return; },
    decrementPage: () => { return; },
});