import { useContext } from "react";
import { PaginationContext } from "@kissena/components/Pagination/PaginationContext";
import { ActionIcon, Group, Text} from "@mantine/core";

import styles from "@kissena/components/Pagination/Pagination.module.css"

export function PaginationControl() {
    const { activePage, incrementPage, decrementPage, onFirstPage, onLastPage } = useContext(PaginationContext);

    return (
        <Group align="center" p={5} className={styles.container}>
            <ActionIcon size="lg" className={styles.button} variant="light" disabled={onFirstPage} onClick={() => decrementPage()}>-</ActionIcon>
            <Text size="lg" c="neonGreen.6">{activePage}</Text>
            <ActionIcon size="lg" className={styles.button} variant="light" disabled={onLastPage} onClick={() => incrementPage()}>+</ActionIcon>
        </Group>
    )
}