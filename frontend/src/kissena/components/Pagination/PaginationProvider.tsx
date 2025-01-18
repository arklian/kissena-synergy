import { useState, PropsWithChildren } from "react";
import { PaginationContext } from "@kissena/components/Pagination/PaginationContext.tsx";

interface PaginationProps {
    maxEntries:number,
};

export function PaginationProvider(props:PropsWithChildren<PaginationProps>) {
    // Configure Pagination settings
    const ENTRIES_PER_PAGE = 3;
    const pageCount = Math.ceil(props.maxEntries / ENTRIES_PER_PAGE);

    const [activePage, setPage] = useState(1);
    const onFirstPage:boolean = (activePage === 1);
    const onLastPage:boolean = (activePage === pageCount);

    console.log(activePage)

    const incrementPage = () => {
        if (onLastPage) return;
        setPage(activePage + 1);
    }

    const decrementPage = () => {
        if (onFirstPage) return;
        setPage(activePage - 1);
    }

    return (
    <PaginationContext.Provider value = {{ activePage, setPage, onFirstPage, onLastPage, incrementPage, decrementPage }}>
        { props.children }
    </PaginationContext.Provider>
    )
}