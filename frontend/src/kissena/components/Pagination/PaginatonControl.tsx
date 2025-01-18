import { useContext } from "react";
import { PaginationContext } from "@kissena/components/Pagination/PaginationContext";
import { Button, Group } from "@mantine/core";

export function PaginationControl() {
    const { activePage, incrementPage, decrementPage, onFirstPage, onLastPage } = useContext(PaginationContext);

    return (
        <Group >
            <Button disabled={onFirstPage} onClick={() => decrementPage()}>Prev</Button>
            {activePage}
            <Button disabled={onLastPage} onClick={() => incrementPage()}>Next</Button>
        </Group>
    )
}