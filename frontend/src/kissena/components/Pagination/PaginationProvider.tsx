import { useState, PropsWithChildren } from 'react'
import { PaginationContext } from '@kissena/components/Pagination/PaginationContext.tsx'

interface PaginationProps {
  maxEntries: number // Total number of entries possible
}

export function PaginationProvider(props: PropsWithChildren<PaginationProps>) {
  // Configure Pagination settings
  const ENTRIES_PER_PAGE = 5
  const pageCount = Math.ceil(props.maxEntries / ENTRIES_PER_PAGE)

  const [activePage, setPage] = useState(1)
  const onFirstPage: boolean = activePage === 1
  const onLastPage: boolean = activePage === pageCount

  const incrementPage = () => {
    if (onLastPage) return
    setPage(activePage + 1)
  }

  const decrementPage = () => {
    if (onFirstPage) return
    setPage(activePage - 1)
  }

  return (
    <PaginationContext.Provider
      value={{
        activePage,
        onFirstPage,
        onLastPage,
        incrementPage,
        decrementPage,
        ENTRIES_PER_PAGE,
      }}
    >
      {props.children}
    </PaginationContext.Provider>
  )
}
